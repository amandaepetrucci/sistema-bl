import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-center">
      <ul className="flex font-bold items-center justify-between relative px-10">
        <li className="flex text-slate-300 hover:text-slate-100 m-1 p-5">
          <Link href="/">Home</Link>
        </li>
        <li
          className="relative flex text-slate-300 hover:text-slate-100 m-1 p-5 cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          Arquivos Diversos
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 w-52 bg-slate-800 text-white shadow-lg z-10">
              <li className="p-2 hover:bg-slate-600">
                <Link href="/arquivos-diversos/representadas">Representadas</Link>
              </li>
              <li className="p-2 hover:bg-slate-600">
                <Link href="/arquivos-diversos/vendedores-e-representantes">Vendedores e Representantes</Link>
              </li>
              <li className="p-2 hover:bg-slate-600">
                <Link href="/arquivos-diversos/moedas-e-cambio">Moedas e Câmbio</Link>
              </li>
              <li className="p-2 hover:bg-slate-600">
                <Link href="/arquivos-diversos/condicoes-pagamento">Condições de Pagamento</Link>
              </li>
              <li className="p-2 hover:bg-slate-600">
                <Link href="/arquivos-diversos/parametros-sistema">Parâmetros</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="flex text-slate-300 hover:text-slate-100  m-1 p-5">Comercial</li>
        <li className="flex text-slate-300 hover:text-slate-100  m-1 p-5">Financeiro</li>
        <li className="flex text-slate-300 hover:text-slate-100  m-1 p-5">FAQ</li>
        <li className="flex text-slate-300 hover:text-slate-100  m-1 p-5">Sair</li>
      </ul>
    </div>
  );
}