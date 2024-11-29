export default function VendedoresRepresentantes(){
  return(
    <div className="m-auto h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-[400px]">
      <span>Vendedores e Representantes</span>
      <div className="flex p-4 w-full items-center justify-around flex-col space-y-4">
        <div>
          <label className="mr-2" htmlFor="vendCodTxt">Vend Cod.</label>
          <input id="vendCodTxt" type="text"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="vendNomeTxt">Vend_nome</label>
          <input type="text" name="vendNomeTxt" id="vendNomeTxt"  className="rounded-sm w-32"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="vendComImp">Vend_com_imp</label>
          <input type="text" name="vendComImp" id="vendComImp"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="vendComNac">Vend_com_nac</label>
          <input type="text" name="vendComNac" id="vendComNac"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="vendCgc">Vend_cgc</label>
          <input type="text" name="vendCgc" id="vendCgc"  className="rounded-sm w-32"/>
        </div>
        <div>
          <input type="checkbox" name="vend112" id="vend112"  className="rounded-sm"/>
          <label className="ml-2 mr-2" htmlFor="dtInclusao">Prefixo Invoice</label>
        </div>
      </div>
    </div>
  )
}