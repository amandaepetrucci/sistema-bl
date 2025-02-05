"use client";
import Modal from "@/app/components/Modal/Modal";
import { useEffect, useState } from "react";

type CondicoesProps = {
  condcod: string;
  cond_desc: string;
};
export default function CondicoesPagamento() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<CondicoesProps>({
    condcod: "",
    cond_desc: "",
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
    const api = await fetch("http://localhost:8000/condicoes_pagamento");
    const apijson = await api.json();
    setData(apijson);
  }

  async function handleAddNewData(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/condicoes_pagamento", {
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
      <div className="m-auto h-auto bg-slate-200 flex items-center flex-col pt-2 border-slate-300 border-2 justify-center mt-5 w-[400px]">
        <span>Condições de pagamento</span>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          classProps="max-w-md"
        >
          <div className="flex p-4 w-full justify-around flex-col space-y-4">
            <form onSubmit={handleAddNewData}>
              <div>
                <label className="mr-2" htmlFor="codTxt">
                  Codigo
                </label>
                <input
                  id="codTxt"
                  name="condcod"
                  type="text"
                  className="rounded-sm w-16"
                  value={formData.condcod}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="mr-2" htmlFor="descricaoTxt">
                  Descrição
                </label>
                <input
                  id="descricaoTxt"
                  name="cond_desc"
                  type="text"
                  className="rounded-sm "
                  value={formData.cond_desc}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Adicionar Registro
              </button>
            </form>
          </div>
        </Modal>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Condcod
              </th>
              <th scope="col" className="px-6 py-3">
                Cond_desc
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((condicoes: CondicoesProps, index: number) => {
              return (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={index}
                >
                  <td>{condicoes.condcod}</td>
                  <td>{condicoes.cond_desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
