"use client";
import Modal from "@/app/components/Modal/Modal";
import { useEffect, useState } from "react";

type MoedasProps = {
  mo_cod: number;
  mo_nome: string;
  simbolo: string;
};
export default function MoedasCambio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [codValue, setCodeValue] = useState(0);
  const [formData, setFormData] = useState<MoedasProps>({
    mo_cod: codValue,
    mo_nome: "",
    simbolo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    console.log("Loading data");
    const api = await fetch("http://localhost:8000/moedas/");
    const apijson = await api.json();
    let actualCode = apijson[apijson.length-1].mo_cod
    if(apijson.length > 0) {
      setData(apijson);
      setCodeValue(++actualCode);
      setFormData((prevData) => ({
        ...prevData,
        ["mo_cod"]: actualCode,
      }))
    } else {
      setCodeValue(++actualCode);
      setFormData((prevData) => ({
        ...prevData,
        ["mo_cod"]: actualCode,
      }))
    }
  }

  async function handleAddNewData(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/moedas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status == 201) {
      handleCloseModal();
      loadData();
    } else {
      console.log("Algo deu errado!");
    }
    return response.json();
  }
  return (
    <>
      <div className="flex items-end justify-end w-full">
        <button
          onClick={handleOpenModal}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 mr-4 mt-2"
        >
          Inserir
        </button>
      </div>

      <div className="m-auto h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10 w-[400px]">
        <span>Moedas e Cambio</span>
        <div className="flex p-4 w-full justify-around flex-col space-y-4">
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            classProps="max-w-md"
          >
            <form onSubmit={handleAddNewData}>
              <div className="flex p-4 w-full justify-around flex-col space-y-4">
                <div>
                  <label className="ml-2 mr-2" htmlFor="vendCodTxt">
                    Cod.
                  </label>
                  <input
                    id="moCodTxt"
                    type="text"
                    name="mo_cod"
                    className="rounded-sm w-16 bg-slate-200"
                    value={codValue}
                    onChange={handleChange}
                    readOnly={true}
                  />
                </div>
                <div>
                  <label className="ml-2 mr-2" htmlFor="vendNomeTxt">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="mo_nome"
                    id="vendNomeTxt"
                    className="rounded-sm w-32"
                    value={formData.mo_nome}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="ml-2 mr-2" htmlFor="simbolo">
                    Simbolo
                  </label>
                  <input
                    type="text"
                    name="simbolo"
                    id="simbolo"
                    className="rounded-sm w-36"
                    value={formData.simbolo}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Adicionar Registro
                </button>
              </div>
            </form>
          </Modal>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full p-2">
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Cod.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nome
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Simbolo
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((moedas: MoedasProps, index: number) => {
                  return (
                    <tr
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      key={index}
                    >
                      <td>{moedas.mo_cod}</td>
                      <td>{moedas.mo_nome}</td>
                      <td>{moedas.simbolo}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
