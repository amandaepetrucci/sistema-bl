export default function CriteriosForecast(){
  return(
    <div className="h-auto m-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-full">
      <span>Critérios de forecast</span>
      <div className="flex p-4 w-full justify-around flex-col space-y-4">
        <div>
          <label className="mr-2" htmlFor="probabilidadeTxt">Probabilidade</label>
          <input id="probabilidadeTxt" type="text"  className="rounded-sm "/>
        </div>
        <div>
          <label className="mr-2" htmlFor="vendCodTxt">Descrição(Pt-Br)</label>
          <input id="probabilidadeTxt" type="text"  className="rounded-sm w-full"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="vendCodTxt">Descrição(En-Us)</label>
          <input id="probabilidadeTxt" type="text"  className="rounded-sm w-full"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="vendCodTxt">Tempo previsto para pedidos em dias</label>
          <input id="probabilidadeTxt" type="text"  className="rounded-sm w-12"/>
        </div>
      </div>
    </div>
  )
}