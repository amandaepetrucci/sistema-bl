import Link from "next/link";

export default function ArquivosDiversos(){
  return(
    <div className=" flex flex-col items-center m-auto justify-center mt-10 space-y-5">
      <Link href={"/arquivos-diversos/projetos"}>Projetos</Link>
      <Link href={"/arquivos-diversos/representadas"}>Representadas</Link>
      <Link href={"/arquivos-diversos/vendedores-e-representantes"}>Vendedores e Representantes</Link>
      <Link href={"/arquivos-diversos/releases-e-anuncios"}>Releases e Anúncios</Link>
      <Link href={"/arquivos-diversos/moedas-e-cambio"}>Moedas e Cambio</Link>
      <Link href={"/arquivos-diversos/criterios-forecast"}>Critérios para Forecast</Link>
      <Link href={"/arquivos-diversos/condicoes-pagamento"}>Condições de Pagamento</Link>
      <Link href={"/arquivos-diversos/parametros-sistema"}>Parametros</Link>
    </div>
  )
}