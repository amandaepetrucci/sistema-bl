export default function Consultas(){
  return(
    <div className="h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10">
    <span className="font-bold">Consultas</span>
    <div className="w-full flex">

      <div className="w-1/2 flex flex-col space-y-3 p-2">
        <div className="flex p-4 w-full flex-col space-y-2">
          <label className="mr-2" htmlFor="codTxt">Codcons</label>
          <input id="codTxt" type="text"  className="rounded-sm w-24"/>
        </div>
        <div className="flex p-4 w-full flex-col space-y-2">
          <label className="ml-2 mr-2" htmlFor="name">Nome</label>
          <input type="text" id="name"  className="rounded-sm"/>
        </div>
        <div className="flex p-4 w-full flex-col space-y-2">
          <label className="ml-2 mr-2" htmlFor="subName">Sobrenome</label>
          <input type="text" id="subName"  className="rounded-sm"/>
        </div>
        <div className="flex p-4 w-full flex-col space-y-2">
          <label className="ml-2 mr-2" htmlFor="enterprise">Empresa</label>
          <input type="text" id="enterprise"  className="rounded-sm"/>
        </div>
      </div>
      <div className="flex-1">
      <div className="flex p-4 w-full mt-11">
          <input id="cont_cad" type="checkbox"  className="rounded-sm"/>
          <label className="ml-2" htmlFor="cont_cad">Cont_cad</label>
        </div>
        <div className="flex p-4 w-full">
          <input id="Empcad" type="checkbox"  className="rounded-sm"/>
          <label className="ml-2" htmlFor="Empcad">Empcad</label>
        </div>
        <div className="flex p-4 w-full flex-col space-y-2">
          <label className="ml-2 mr-2" htmlFor="phone">Telefone</label>
          <input type="text" id="phone"  className="rounded-sm"/>
          <label className="ml-2 mr-2" htmlFor="phone">Ramal</label>
          <input type="text" id="ramal"  className="rounded-sm"/>
        </div>
        <div className="flex p-4 w-full flex-col space-y-2">
          <label className="ml-2 mr-2" htmlFor="mail">E-mail</label>
          <input type="text" id="mail"  className="rounded-sm"/>
        </div>
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