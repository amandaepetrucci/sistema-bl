export default function ProjectsPage(){
  return(
    <div className="h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10">
      <span className="font-bold">Projetos</span>
      <div className="flex p-4 w-full items-center justify-center">
        <label className="mr-2" htmlFor="codTxt">Cod.</label>
        <input id="codTxt" type="text"  className="rounded-sm"/>
        <label className="ml-2 mr-2" htmlFor="dtInclusao">Data Inclusão</label>
        <input type="datetime-local" name="dtInclusao" id="dtInclusao"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full text-center p-2">
        <label htmlFor="descriptionTxt" className="mb-2">Descrição</label>
        <textarea id="descriptionTxt"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none" placeholder="Digite a descrição"></textarea>
      </div>
      <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]"/>
      <div className="flex flex-col p-4 w-full items-center justify-center">
        <label className="mb-2 " htmlFor="selectEmpresa">Empresa Responsável/Principal:</label>
        <select name="selectEmpresa" id="selectEmpresa" className="w-full">
          <option value="Selecione">Selecione</option>
        </select>
        <div className="flex flex-row p-2 justify-around mt-4">
          <label className="mr-2" htmlFor="valorEstimadoTxt">Valor estimado(US$):</label>
          <input id="valorEstimadoTxt" type="text"  className="rounded-sm h-6"/>
          <label className="ml-2 mr-2" htmlFor="maturacaoTxt">Maturação(meses):</label>
          <input type="text" name="maturacaoTxt" id="maturacaoTxt"  className="rounded-sm h-6"/>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full p-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Clientes
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17&quot;
                      </th>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Google Pixel Phone
                      </th>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple Watch 5
                      </th>
                      <td className="px-6 py-4">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

    </div>
  )
}