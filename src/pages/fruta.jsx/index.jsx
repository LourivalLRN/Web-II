import './styles.css'

import cadastrarFrutaImg from '../../assets/cadastrar-fruta.svg'
import { Modal } from '../../components/LayoutComponents/modal'
import { useState } from 'react'

export const Painel = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
    <div className='container-geral'>
       <div className='container-painel'>
        <h1>Painel administrativo</h1>
        <div className='options-container'>
            <button onClick={() => {
                setIsOpenModal(true)
            }} className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Nova fruta</p>
            </button>
            <button className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Meus clientes</p>
            </button>
            <button className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Relatórios</p>
            </button>
            <button className="options">
                <div className='option-img'>
                    <img src={cadastrarFrutaImg} alt="" />
                </div>
                <p>Minhas frutas</p>
            </button>
        </div>
       </div>

       { isOpenModal && <Modal 
        closeModal={closeModal}
       /> }
    </div>
    )
}