import React, { useEffect, useState } from "react";
import Modal from "../../components/ModalFilial";

import api from "../../services/api";
import { useHistory, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import "./styles-filiais.css";
import { useAuth } from "../../hooks/AuthContext";
import { useFilial } from "../../hooks/FilialContetx";
import { useSHow } from "../../hooks/ShowContext";
interface IFiliais {
  name: string;
  qtd_employees: number;
  id: number;
}
function CreateFiliais() {
  const { signOut, user } = useAuth();
  const { username, setUserName } = useSHow();
  const { nome, setNome } = useFilial();
  const { id, setId } = useFilial();
  const { qtd_employees, setQtd_employees } = useFilial();
  const [showModal, setShowModal] = useState(false);
  const [filiais, setFiliais] = useState<IFiliais[]>([]);
  const history = useHistory();
  useEffect(() => {
    api.get(`filiais`).then((response) => {
      console.log(response.data);
      setFiliais(response.data);
      console.log("aqui", filiais);
    });
  }, []);

  function updateFiliais(id: number) {
    setId(id);
    setNome(nome);
    setQtd_employees(qtd_employees);

    history.push("/atualizar");
  }
  function seeFiliais(id: number) {
    setId(id);
    setNome(nome);
    setQtd_employees(qtd_employees);
  }

  async function deleteFiliais(id: number) {
    try {
      const response = await api.delete(`filiais/${id}`);
      setFiliais((oldFiliais) =>
        oldFiliais.filter((oldFiliais) => oldFiliais.id !== id)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const OpenModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <body>
      <div className="container-filial">
        <div className="box-filial">
          <div className="btn-adicionar-filial">
            <a onClick={signOut} id="sair-filial">
              <FaAngleLeft />
              Sair
            </a>
            <a href="/cadastro" id="adicionar-filial">
              <FaPlus />
              Adicionar
            </a>
          </div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <table className="table-filial">
          <thead>
            <th>Nome</th>
            <th>Quantidade</th>

            <th>Editar</th>
            <th>Visualizar</th>
            <th>Deletar</th>
          </thead>
          <tbody>
            {filiais.map((filiais) => (
              <tr>
                <td data-label="Nome">{filiais.name}</td>
                <td data-label="Quantidade">{filiais.qtd_employees}</td>

                <td data-label="Editar">
                  {" "}
                  <button
                    id="bnt-editar"
                    onClick={() => {
                      updateFiliais(filiais.id);
                      setNome(filiais.name);
                      setQtd_employees(filiais.qtd_employees);
                    }}
                  >
                    Editar
                  </button>
                </td>
                <td data-label="Vizualizar">
                  {" "}
                  <button
                    onClick={() => {
                      OpenModal();
                    }}
                    id="btn-visualizar"
                  >
                    Visualizar
                  </button>
                </td>
                <td data-label="Deletar">
                  {" "}
                  <button
                    id="btn-deletar"
                    onClick={() => deleteFiliais(filiais.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="welcome-filial">
          <h1>Bem-Vindo! </h1>
          <h1> {username}</h1>
        </div>
      </div>
    </body>
  );
}

export default CreateFiliais;
