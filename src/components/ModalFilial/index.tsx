import React from "react";
import "./styles-modal.css";
import { FaTimes } from "react-icons/fa";
import { useFilial } from "../../hooks/FilialContetx";
export const Modal = ({ showModal, setShowModal }: any) => {
  const { nome, setNome } = useFilial();
  const { qtd_employees, setQtd_employees } = useFilial();

  const { id, setId } = useFilial();
  return (
    <>
      {showModal ? (
        <div className="Background">
          <div className="ModalWrapper">
            <div className="container-modal">
              <div className="btn-div">
                <button id="btn-modal" onClick={() => setShowModal(!showModal)}>
                  <FaTimes />
                </button>
              </div>
              <div className="nome">
                <h1>
                  Nome: <strong className="nome1">{nome}</strong>
                </h1>
              </div>
              <div className="email">
                <p>Quantidade de Funcionários:</p>
                <strong>{qtd_employees}</strong>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
