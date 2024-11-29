import Link from "next/link";

export default function MenuCatalogo(){
  return(
    <div className=" flex flex-col items-center m-auto justify-center mt-10 space-y-5">
      <Link href={"/catalogos"}>Catalogos</Link>
      <Link href={"/catalogos/tipos-catalogo"}>Tipos de catalogo</Link>
    </div>
  )
}