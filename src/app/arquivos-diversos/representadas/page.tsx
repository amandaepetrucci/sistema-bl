export default function Representadas(){
  return(
    <div className="h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10">
      <span className="font-bold">Representadas</span>
      <div className="flex p-4 w-full items-center justify-around">
        <div>
          <label className="mr-2" htmlFor="codTxt">Cod.</label>
          <input id="codTxt" type="text"  className="rounded-sm"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="dtInclusao">Prefixo Invoice</label>
          <input type="text" name="prefixoInvoicesTxt" id="prefixoInvoicesTxt"  className="rounded-sm w-16"/>
        </div>
      </div>
      <div className="flex px-16 py-4 w-full items-center justify-around">
        <label htmlFor="nameTxt" className="mr-4">Nome: </label>
        <input type="text" id="nameTxt" className="w-full"/>
      </div>
      <div className="flex px-16 py-4 w-full items-center justify-around">
        <label htmlFor="coinSelect" className="mr-3">Moeda: </label>
        <select id="coinSelect" className="w-full h-6"/>
      </div>
      <div className="flex px-16 py-4 w-full items-center justify-around">
        <label htmlFor="symbolTxt" className="mr-1">Simbolo: </label>
        <input type ="text" id="symbolTxt" className="flex-1 h-6"/>
        <label htmlFor="critPageSelect" className="mr-1 ml-2">Crit Pag: </label>
        <select id="critPageSelect" className="flex-1 h-6"/>
      </div>
      <div className="flex p-4 w-full items-center justify-around">
        <div>
          <label className="ml-2 mr-2" htmlFor="comOne">Com 1:</label>
          <input type="text" name="comOne" id="comOne"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="comTwo">Com 2:</label>
          <input type="text" name="comTwo" id="comTwo"  className="rounded-sm w-16"/>
        </div>
        <div>
          <label className="ml-2 mr-2" htmlFor="dtInclusao">Com 3:</label>
          <input type="text" name="comThree" id="comThree"  className="rounded-sm w-16"/>
        </div>
      </div>
      <div className="flex p-4 w-full items-center justify-around">
        <div>
          <input type="checkbox" name="blEmiteInvoice" id="blEmiteInvoice"  className="rounded-sm"/>
          <label className="ml-2 mr-2" htmlFor="comOne">BL Emite Invoice?</label>
        </div>
        <div>
          <input type="checkbox" name="acceptCreditCard" id="acceptCreditCard"  className="rounded-sm"/>
          <label className="ml-2 mr-2" htmlFor="comTwo">Aceita Cartão de Crédito</label>
        </div>
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
      <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]"/>
      <div>
          <input type="checkbox" name="haveContract" id="haveContract"  className="rounded-sm"/>
          <label className="ml-2 mr-2" htmlFor="comTwo">Tem contrato?</label>
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