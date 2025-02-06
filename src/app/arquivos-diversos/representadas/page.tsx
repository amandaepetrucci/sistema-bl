"use client";
import { Suspense, useEffect, useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import {format} from 'date-fns'
type MoedasProps = {
  mo_cod: number;
  mo_nome: string;
  simbolo: string;
};

type RepresentadasProps = {
  rep_cod: number;
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
  const [data, setData] = useState<RepresentadasProps[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [simbolo, setSimbolo] = useState('');
  const [codValue, setCodeValue] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    loadData()
    loadMoedas()
    setCurrentPage(1)
  }, []);

  async function loadData() {
    const api = await fetch("https://sistemabl-novo.onrender.com/representadas");
    const apijson = await api.json();
    let actualCode = 0
    if(apijson.length > 0) {
      actualCode = apijson[apijson.length-1].rep_cod
      setData(apijson);
      setCodeValue(++actualCode);
    }else{
      setCodeValue(++actualCode);
    }

    setFormData((prevData) => ({
      ...prevData,
      ["rep_cod"]: actualCode,
    }))
    
  }

  async function loadMoedas() {
    const api = await fetch("https://sistemabl-novo.onrender.com/moedas");
    const apijson = await api.json();
    setCoinList(apijson);
  }

  async function loadCoin(id: number) {
    if(id === 0){
      setSimbolo('');
      return;
    }
    const api = await fetch(`https://sistemabl-novo.onrender.com/moedas/${id}`);
    const apijson = await api.json();
    setSimbolo(apijson.simbolo);
  }

  const filteredData = data.filter((item) =>
    item.rep_nome.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [formData, setFormData] = useState<RepresentadasProps>({
    rep_cod: codValue,
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
    const { name, value, type } = e.target;
    
    setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : value,
    }));
};

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
    setIsModalOpen(false)
    loadData();
  } else {
    console.error("Erro ao enviar dados!", await response.text());
  }
}
const [coinList, setCoinList] = useState([])
  return (
    <div className="p-4">
      <div className=" flex py-4 justify-between">
        <label className="text-2xl font-semibold">Representadas</label>
        <Button className="bg-slate-700" onClick={() => setIsModalOpen(true)}>Inserir</Button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Buscar Representada..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Table className="w-full">
        <TableHeader className="whitespace-nowrap bg-slate-700 text-gray-200">
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Moeda</TableCell>
            <TableCell>Simbolo</TableCell>
            <TableCell>Comissão 1</TableCell>
            <TableCell>Comissão 2</TableCell>
            <TableCell>Comissão 3</TableCell>
            <TableCell>Crit Page</TableCell>
            <TableCell>Tem Contrato</TableCell>
            <TableCell>Contrato Tem Validade</TableCell>
            <TableCell>Data Vencimento do Contrato</TableCell>
            <TableCell>Banking</TableCell>
            <TableCell>Preços</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>Pref Invoice</TableCell>
            <TableCell>Bl Emite Invoice</TableCell>
            <TableCell>Ship Form</TableCell>
            <TableCell>Aceita Cartão</TableCell>
            <TableCell>Descrição Resumida</TableCell>
            <TableCell>Descrição Website</TableCell>
            <TableCell>Descrição Completa</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.rep_nome}</TableCell>
              <TableCell>{item.moeda}</TableCell>
              <TableCell>{item.simbolo}</TableCell>
              <TableCell>{item.rep_com1}</TableCell>
              <TableCell>{item.rep_com2}</TableCell>
              <TableCell>{item.rep_com3}</TableCell>
              <TableCell>{item.rep_crit_page}</TableCell>
              <TableCell>{item.rep_tem_contrato}</TableCell>
              <TableCell>{item.rep_contr_tem_validade}</TableCell>
              <TableCell>{format(item.rep_dat_venc_contr, "dd/MM/yyyy")}</TableCell>
              <TableCell>{item.rep_banking}</TableCell>
              <TableCell>{item.rep_form_precos}</TableCell>
              <TableCell>{item.rep_endereco}</TableCell>
              <TableCell>{item.rep_preff_inv}</TableCell>
              <TableCell>{item.bl_emite_invoice}</TableCell>
              <TableCell>{item.rep_ship_form}</TableCell>
              <TableCell>{item.aeitacarta}</TableCell>
              <TableCell>{item.repr}</TableCell>
              <TableCell>{item.repw}</TableCell>
              <TableCell>{item.repc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Suspense>
        <PaginationWithLinks
            page={currentPage}
            pageSize={itemsPerPage}
            totalCount={filteredData.length}
            pageSizeSelectOptions={{
              pageSizeOptions: [5, 10, 25, 50],
            }}
            
        />
      </Suspense>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} classProps="">
        <form onSubmit={handleAddNewData}>
            <div className="flex p-4 w-full items-center justify-around">
              <div>
                <label className="mr-2" htmlFor="rep_codTxt">
                  Cod
                </label>
                <Input
                  id="rep_codTxt"
                  name="rep_cod"
                  type="text"
                  value={codValue}
                  readOnly={true}
                  className="bg-slate-200"
                />
              </div>
              <div>
                <label className="ml-2 mr-2" htmlFor="dtInclusao">
                  Prefixo Invoice
                </label>
                <Input
                  type="text"
                  name="rep_preff_inv"
                  id="prefixoInvoicesTxt"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex px-16 py-4 w-full items-center justify-around">
              <label htmlFor="nameTxt" className="mr-4">
                Nome:{" "}
              </label>
              <Input type="text" id="nameTxt" name="rep_nome" onChange={handleChange}/>
            </div>
            <div className="flex px-16 py-4 w-full items-center justify-around">
              <label htmlFor="coinSelect" className="mr-3">
                Moeda:{" "}
              </label>
              <select id="coinSelect" name="moeda" className="w-full h-6" onChange={e => loadCoin(Number(e.target.value))}>
                    <option value={"0"}>
                      Selecione
                    </option>
                  {coinList.map((option: MoedasProps) => (
                    <option key={option.mo_cod} value={option.mo_cod}>
                      {option.mo_nome}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex px-16 py-4 w-full items-center justify-around">
              <label htmlFor="symbolTxt" className="mr-1">
                Simbolo:{" "}
              </label>
              <Input type="text" id="symbolTxt" name="simbolo" className="flex-1 h-6" value={simbolo} readOnly/>
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
                <Input
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
                <Input
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
                <Input
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
                  checked={formData.aeitacarta}
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
                checked={formData.rep_tem_contrato}
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
  );
}
