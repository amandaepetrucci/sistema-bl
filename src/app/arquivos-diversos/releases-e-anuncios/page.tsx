export default function ReleasesAnuncios(){
  return(
    <div className="h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10">
      <span className="font-bold">Release e anúncios</span>
        <div className="flex p-4 items-center justify-around">
          <div>
            <label className="mr-2" htmlFor="dtAnuncio">Data:</label>
            <input id="dtAnuncio" type="datetime-local"  className="rounded-sm"/>
          </div>
          <div>
            <label className="ml-2 mr-2" htmlFor="dtInclusao">Prefixo Invoice</label>
            <input type="text" name="prefixoInvoicesTxt" id="prefixoInvoicesTxt"  className="rounded-sm w-16"/>
          </div>
        </div>
        <div className="flex p-4 items-center justify-around">
          <div>
            <label className="mr-2" htmlFor="revista">Revista:</label>
            <input id="revista" type="text"  className="rounded-sm"/>
            <label className=" ml-2 mr-2" htmlFor="revista">Ref:</label>
            <input id="ref" type="text"  className="rounded-sm"/>
          </div>
        </div>
        <div className="flex p-4 items-center justify-around">
            <label className="mr-2" htmlFor="uploadImage">Foto do anuncio:</label>
            <input id="uploadImage" type="file"  className="rounded-sm" accept="image/jpeg, image/bmp"/>
        </div>
        <div className="flex p-4 items-center justify-center border-2 border-slate-500 w-96 h-96">

        </div>
        <div className="flex flex-col w-full text-center p-2">
        <label htmlFor="descriptionTxt" className="mb-2">Descrição</label>
          <textarea id="descriptionTxt"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none" placeholder="Digite a descrição"></textarea>
        </div>
    </div>
  )
}