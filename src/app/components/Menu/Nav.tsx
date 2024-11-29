import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Nav(props:NavProps){
  const {visible, setVisible} = props;
  return(
    <div className=" flex relative">
      <ul className={`${visible ? "w-full sm:w-64" : "w-0"} transition-width duration-500 flex flex-col font-bold h-screen pt-10 fixed left-0 bg-slate-700 items-center`}>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
        <Link href={"/"} onClick={() => setVisible(!visible)}>Home</Link>
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          <Link href={"/arquivos-diversos"} onClick={() => setVisible(!visible)}>Arquivos Diversos</Link>
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          Comercial
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          Financeiro
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          <Link href={"/catalogos/menu-catalogos"} onClick={() => setVisible(!visible)}>Catálogos</Link>
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
        <Link href={"/controle-consultas"} onClick={() => setVisible(!visible)}>Controle de Consultas</Link>
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          Manutenção de Arquivos
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          FAQ
        </li>
        <li className={`${visible ? "flex" : "hidden"} text-slate-300 hover:text-slate-100 w-full sm:w-52 m-1 p-5`}>
          Sair
        </li>
      </ul>
    </div>
  )
}