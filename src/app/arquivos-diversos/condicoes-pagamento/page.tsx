export default function CondicoesPagamento(){
  return(
    <div className="m-auto h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-[400px]">
      <span>Condições de pagamento</span>
      <div className="flex p-4 w-full justify-around flex-col space-y-4">
        <div>
          <label className="mr-2" htmlFor="codTxt">Codigo</label>
          <input id="codTxt" type="text"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="descricaoTxt">Descrição</label>
          <input id="descricaoTxt" type="text"  className="rounded-sm"/>
        </div>
      </div>
    </div>
  )
}