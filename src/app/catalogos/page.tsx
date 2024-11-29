export default function Catalogos(){
  return(
    <div className="h-auto m-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-[500px]">
      <span className="font-bold">Catálogos</span>
      <div className="flex p-4 w-full">
        <label className="mr-2" htmlFor="cadCodTxt">Cod.</label>
        <input id="cadCodTxt" type="text"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_emp">Cat_emp</label>
        <input type="text" id="cat_emp"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_emp">Cat_endereco</label>
        <input type="text" id="cat_endereco"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_emp">Cat_estado</label>
        <input type="text" id="cat_estado"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_emp">Cat_cidade</label>
        <input type="text" id="cat_cidade"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_emp">Cat_pais</label>
        <input type="text" id="cat_pais"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_emp">Cat_fone</label>
        <input type="text" id="cat_fone"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_fax">Cat_fax</label>
        <input type="text" id="cat_fax"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_website">Cat_website</label>
        <input type="text" id="cat_website"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_contato">Cat_contato</label>
        <input type="text" id="cat_contato"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_cargo">Cat_cargo</label>
        <input type="text" id="cat_cargo"  className="rounded-sm"/>
      </div>
      <div className="flex flex-col w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_email">Cat_email</label>
        <input type="text" id="cat_email"  className="rounded-sm"/>
      </div>
      <div className="flex w-full p-2">
        <label className="ml-2 mr-2" htmlFor="cat_pasta">Cat_pasta</label>
        <input type="text" id="cat_pasta"  className="rounded-sm w-12"/>
      </div>
      <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]"/>
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