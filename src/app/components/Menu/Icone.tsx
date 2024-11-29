import { Dispatch, SetStateAction } from "react";
interface IconeProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}


export default function Icone(props:IconeProps){
  const { setVisible , visible } = props;
  return(
    <div className="flex flex-col fixed top-0 left-0 z-40 p-5"
      onClick={ () => setVisible(!visible)}
    >
      <div className={`${visible && "rotate-45 translate-y-2"} h-1 w-8 mb-1 bg-slate-700 transition duration-500 `}></div>
      <div className={`${visible && "-rotate-45"} h-1 w-8 mb-1 bg-slate-700 transition duration-500 `}></div>
      <div className={`${visible ? "hidden" : "flex"} h-1 w-8 mb-1 bg-slate-700 transition duration-500 `}></div>
    </div>
  )
}