export default function ParametrosSistema(){
  return(
    <div className="m-auto h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-[700px]">
      <span>Parametros do sistema</span>
      <div className="flex p-4 w-full justify-around flex-col space-y-4">
        <div>
          <label className="mr-2" htmlFor="calculaAteTxt">Calcula_ate</label>
          <input id="calculaAteTxt" type="text"  className="rounded-sm w-24"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="N_imp_mun">N_imp_mun</label>
          <input id="N_imp_mun" type="text"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="N_imp_estad">N_imp_estad</label>
          <input id="N_imp_estad" type="text"  className="rounded-sm"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="N_imp_fed">N_imp_fed</label>
          <input id="N_imp_fed" type="text"  className="rounded-sm"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="ultimaDtMexida">Ultima data mexida</label>
          <input id="ultimaDtMexida" type="date"  className="rounded-sm"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="Ult_data_lanc">Ult_data_lanc</label>
          <input id="Ult_data_lanc" type="text"  className="rounded-sm"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="Dia_pag_com">Dia_pag_com</label>
          <input id="Dia_pag_com" type="text"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="recalculo_auto">Recálculo Automático</label>
          <input id="recalculo_auto" type="checkbox"  className="rounded-sm"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="recalculo_auto">Diretório txt clientes</label>
          <input id="recalculo_auto" type="text"  className="rounded-sm"/>
        </div>
        <div>
          <label className="mr-2" htmlFor="recalculo_auto">Número de dias para fechar o cambio</label>
          <input id="recalculo_auto" type="text"  className="rounded-sm w-16"/>
        </div>
        <div className="border-slate-500 border-2 flex flex-col items-center space-y-4 p-2">
          <span>OFX</span>
          <div className="flex flex-col">
            <div>
              <label className="mr-2" htmlFor="recalculo_auto">Diretório para exportar .OFX</label>
              <input id="recalculo_auto" type="text"  className="rounded-sm"/>
            </div>
            <div>
              <input id="recalculo_auto" type="checkbox"  className="rounded-sm"/>
              <label className="ml-2" htmlFor="recalculo_auto">FTID como data?</label>
            </div>
            <div>
              <input id="recalculo_auto" type="checkbox"  className="rounded-sm"/>
              <label className="ml-2" htmlFor="recalculo_auto">Corrige e compensa Impostos e Comissões Menores que 1?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}