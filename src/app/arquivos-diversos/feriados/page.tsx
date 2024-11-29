export default function Feriados(){
  return(
    <div className="m-auto h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-[400px] space-y-2">
      <span className="font-bold">Feriados</span>
      <div className="flex p-4 w-full items-center justify-center">
        <label className="mr-2" htmlFor="codTxt">Data</label>
        <input id="dtFeriado" type="datetime-local"  className="rounded-sm"/>
      </div>
      <div>
        <label className="ml-2 mr-2" htmlFor="dtInclusao">Nome:</label>
        <input type="text" name="dtInclusao" id="dtInclusao"  className="rounded-sm"/>
      </div>
      <div>
        <label className="ml-2 mr-2" htmlFor="checkFixo">Fixo?</label>
        <input type="checkbox" name="checkFixo" id="checkFixo"  className="rounded-sm"/>
      </div>
    </div>
  )
}