import { Dispatch, SetStateAction } from "react";

interface LoginProps {
  showLoginSide: boolean;
  setShowLoginSide: Dispatch<SetStateAction<boolean>>;
  switchShowSide: () => void;
}

export function Login({
  showLoginSide,
  setShowLoginSide,
  switchShowSide,
}: LoginProps) {
  function handleClick() {
    setShowLoginSide(!showLoginSide);
    switchShowSide();
  }
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4 transition-colors duration-500">
      <figure>Logo</figure>
      <div className="w-1/2 flex flex-col gap-2">
        <label className="flex flex-col text-sm">
          E-mail
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            className="bg-slate-100 max-w-xs h-10 px-4 border-2 border-white rounded-md focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-opacity-50 focus:ring-2 transition duration-100"
          />
        </label>
        <label className="flex flex-col text-sm">
          Senha
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="bg-slate-100 max-w-xs h-10 px-4 border-2 border-white rounded-md focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-opacity-50 focus:ring-2 transition duration-100"
          />
        </label>
      </div>
      <button
        type="button"
        className="w-1/2 px-6 py-2 rounded-full bg-cyan-500 text-white font-bold transition-all duration-500 ease-in-out shadow-md select-none hover:bg-cyan-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 active:bg-blue-700 active:shadow-none"
      >
        Entrar
      </button>
      <span>
        Ainda não tem uma conta?{" "}
        <strong className="cursor-pointer" onClick={handleClick}>
          Clique aqui!
        </strong>{" "}
      </span>
    </div>
  );
}
