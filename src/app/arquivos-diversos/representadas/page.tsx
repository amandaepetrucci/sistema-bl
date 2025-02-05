"use client";
import Modal from "@/app/components/Modal/Modal";
import { useEffect, useState } from "react";

type RepresentadasProps = {
  rep_cod: string;
  rep_preff_inv: string;
  rep_nome: string;
  moeda: string;
  simbolo: string;
  rep_crit_page: string;
  rep_com1: string;
  rep_com2: string;
  rep_com3: string;
  bl_emite_invoice: boolean;
  aeitacarta: boolean;
  rep_tem_contrato: boolean;
  rep_contr_tem_validade: boolean;
  rep_dat_venc_contr: Date;
  rep_banking: string;
  rep_form_precos: string;
  rep_endereco: string;
  rep_ship_form: string;
  repr: string;
  repw: string;
  repc: string;
};
export default function Representadas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<RepresentadasProps>({
    rep_cod: "",
    rep_preff_inv: "",
    rep_nome: "",
    moeda: "",
    simbolo: "",
    rep_crit_page: "",
    rep_com1: "",
    rep_com2: "",
    rep_com3: "",
    bl_emite_invoice: false,
    aeitacarta: false,
    rep_tem_contrato: false,
    rep_contr_tem_validade: false,
    rep_dat_venc_contr: new Date(),
    rep_banking: "",
    rep_form_precos: "",
    rep_endereco: "",
    rep_ship_form: "",
    repr: "",
    repw: "",
    repc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement & HTMLSelectElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (checked ? true : false) : value,
    }));
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const api = await fetch("https://sistemabl-novo.onrender.com/representadas");
    const apijson = await api.json();
    setData(apijson);
  }

  async function handleAddNewData(e: React.FormEvent) {
    e.preventDefault();
    console.log("Dados enviados:", formData); // Verifique se os dados estão preenchidos corretamente
  
    const response = await fetch("https://sistemabl-novo.onrender.com/representadas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      handleCloseModal();
      loadData();
    } else {
      console.error("Erro ao enviar dados!", await response.text());
    }
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

      <div className="h-auto bg-slate-200 flex items-center flex-col pt-4 border-slate-300 border-2 justify-center mt-10">
        <span className="font-bold">Representadas</span>
        <div className="mt-2 p-4">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rep rep_nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Moeda
                </th>
                <th scope="col" className="px-6 py-3">
                  Simbolo
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep Com 1
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep Com 2
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep Com 3
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep Crit Page
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep tem contrato
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((representadas: RepresentadasProps, index: number) => {
                return (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={index}
                  >
                    <td>{representadas.rep_nome}</td>
                    <td>{representadas.moeda}</td>
                    <td>{representadas.simbolo}</td>
                    <td>{representadas.rep_com1}</td>
                    <td>{representadas.rep_com2}</td>
                    <td>{representadas.rep_com3}</td>
                    <td>{representadas.rep_crit_page}</td>
                    <td>{representadas.rep_tem_contrato}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]" />

          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Rep contr tem validade
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep dat venc contrat
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep banking
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep form preços
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep endereço
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep pref inv
                </th>
                <th scope="col" className="px-6 py-3">
                  Bl emite invoice
                </th>
                <th scope="col" className="px-6 py-3">
                  Rep ship form
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((representadas: RepresentadasProps, index: number) => {
                return (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={index}
                  >
                    <td>{representadas.rep_contr_tem_validade}</td>
                    <td>{representadas.rep_dat_venc_contr.toString()}</td>
                    <td>{representadas.rep_banking}</td>
                    <td>{representadas.rep_form_precos}</td>
                    <td>{representadas.rep_endereco}</td>
                    <td>{representadas.rep_preff_inv}</td>
                    <td>{representadas.bl_emite_invoice}</td>
                    <td>{representadas.rep_ship_form}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]" />

          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 ali">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Aceita cartão
                </th>
                <th scope="col" className="px-6 py-3">
                  Repr
                </th>
                <th scope="col" className="px-6 py-3">
                  Repw
                </th>
                <th scope="col" className="px-6 py-3">
                  Repc
                </th>
                <th scope="col" className="px-6 py-3">
                  Re logo
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((representadas: RepresentadasProps, index: number) => {
                return (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={index}
                  >
                    <td>{representadas.aeitacarta}</td>
                    <td>{representadas.repr}</td>
                    <td>{representadas.repw}</td>
                    <td>{representadas.repc}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          classProps="h-screen"
        >
          <form onSubmit={handleAddNewData}>
            <div className="flex p-4 w-full items-center justify-around">
              <div>
                <label className="mr-2" htmlFor="rep_codTxt">
                  rep_cod.
                </label>
                <input
                  id="rep_codTxt"
                  name="rep_cod"
                  type="text"
                  className="rounded-sm"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="ml-2 mr-2" htmlFor="dtInclusao">
                  Prefixo Invoice
                </label>
                <input
                  type="text"
                  name="rep_preff_inv"
                  id="prefixoInvoicesTxt"
                  className="rounded-sm w-16"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex px-16 py-4 w-full items-center justify-around">
              <label htmlFor="nameTxt" className="mr-4">
                rep_nome:{" "}
              </label>
              <input type="text" id="nameTxt" name="rep_nome" className="w-full" onChange={handleChange}/>
            </div>
            <div className="flex px-16 py-4 w-full items-center justify-around">
              <label htmlFor="coinSelect" className="mr-3">
                Moeda:{" "}
              </label>
              <select id="coinSelect" name="moeda" className="w-full h-6" />
            </div>
            <div className="flex px-16 py-4 w-full items-center justify-around">
              <label htmlFor="symbolTxt" className="mr-1">
                Simbolo:{" "}
              </label>
              <input type="text" id="symbolTxt" name="simbolo" className="flex-1 h-6" onChange={handleChange}/>
              <label htmlFor="critPageSelect" className="mr-1 ml-2">
                Crit Pag:{" "}
              </label>
              <select id="critPageSelect" name="rep_crit_page" className="flex-1 h-6" />
            </div>
            <div className="flex p-4 w-full items-center justify-around">
              <div>
                <label className="ml-2 mr-2" htmlFor="comOne">
                  Com 1:
                </label>
                <input
                  type="text"
                  name="rep_com1"
                  id="comOne"
                  className="rounded-sm w-16"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="ml-2 mr-2" htmlFor="comTwo">
                  Com 2:
                </label>
                <input
                  type="text"
                  name="rep_com2"
                  id="comTwo"
                  className="rounded-sm w-16"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="ml-2 mr-2" htmlFor="dtInclusao">
                  Com 3:
                </label>
                <input
                  type="text"
                  name="rep_com3"
                  id="comThree"
                  className="rounded-sm w-16"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex p-4 w-full items-center justify-around">
              <div>
                <input
                  type="checkbox"
                  name="bl_emite_invoice"
                  id="blEmiteInvoice"
                  className="rounded-sm"
                  checked={formData.bl_emite_invoice}
                  onChange={handleChange}
                />
                <label className="ml-2 mr-2" htmlFor="comOne">
                  BL Emite Invoice?
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="aeitacarta"
                  id="acceptCreditCard"
                  className="rounded-sm"
                  onChange={handleChange}
                />
                <label className="ml-2 mr-2" htmlFor="comTwo">
                  Aceita Cartão de Crédito
                </label>
              </div>
            </div>
            <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]" />
            <div>
              <input
                type="checkbox"
                name="rep_tem_contrato"
                id="haveContract"
                className="rounded-sm"
                onChange={handleChange}
              />
              <label className="ml-2 mr-2" htmlFor="comTwo">
                Tem contrato?
              </label>
            </div>
            <hr className="mt-2 mb-2 bg-slate-300 w-full h-[2px]" />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full p-2">
              <label htmlFor="description">Desc. Resumida</label>
              <textarea
                className="w-full h-20"
                name="repr"
                id="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center w-full justify-center">
              <button
                type="submit"
                className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Adicionar Registro
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
