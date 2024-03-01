import { useState } from "react";
import { Login } from "./components/Login";

export function App() {
  const [showLoginSide, setShowLoginSide] = useState<boolean>(true);

  function switchShowSide() {
    setShowLoginSide(!showLoginSide);
  }

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen text-black">
        <div className="w-3/4 h-2/3 grid grid-cols-2 rounded-lg overflow-hidden bg-slate-50">
          {showLoginSide ? (
            <Login 
            showLoginSide={showLoginSide}
            setShowLoginSide={setShowLoginSide}
            switchShowSide={switchShowSide} />
          ) : (
            <div className="bg-cyan-900 transition-colors duration-500"></div>
          )}
          {!showLoginSide ? (
            <div className="bg-slate-100 transition-colors duration-500">
              SignUp
              <span>
                Já tem uma conta?{" "}
                <strong className="cursor-pointer" onClick={switchShowSide}>
                  Faça o login!
                </strong>{" "}
              </span>
            </div>
          ) : (
            <div className="bg-cyan-900 transition-colors duration-500"></div>
          )}
        </div>
      </div>
    </>
  );
}
