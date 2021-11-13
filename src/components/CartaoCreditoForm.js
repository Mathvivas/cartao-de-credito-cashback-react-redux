import React, { useState }from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { RadioButton } from 'primereact/radiobutton'
import { connect } from 'react-redux'
import { pedirCartao } from '../actions'

const CashbackForm = (props) => {
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [cartaoEscolhido, setCartoEscolhido] = useState('')

    const enviar = (e) => {
        e.preventDefault()
        //faça o dispatch de uma ação de pedido de cartão aqui
        store.dispatch(pedirCartao(cpf, nome, cartaoEscolhido))
    }
    return (
        <Card>
            <div className="field">
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf" 
                    type="text" 
                    className="inputfield w-full p-3"
                    onChange={e => {setCpf(e.target.value)}}
                />
            </div>
            <div className="field">
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome" 
                    type="text" 
                    className="inputfield w-full p-3"
                    onChange={e => setNome(e.target.value)}
                />
            </div>
            <div className="flex justify-content-around">
                <div className="field-radio">
                    <RadioButton
                        value="gold"
                        name="tipoCartao"
                        inputId="cartaoGold"
                        onChange={(e) => setCartoEscolhido(e.target.value)}
                        checked={cartaoEscolhido === 'gold'}

                    />
                    <label htmlFor="cartaoGold">Gold(R$50)</label>
                </div>
                <div className="field-radio">
                    <RadioButton
                        value="platinum"
                        name="tipoCartao"
                        inputId="cartaoPlatinum"
                        onChange={(e) => setCartoEscolhido(e.target.value)}
                        checked={cartaoEscolhido === 'platinum'}

                    />
                    <label htmlFor="cartaoPlatinum">Platinum(R$100)</label>
                </div>
            </div>
            
            
            <Button 
                label="OK"
                className="w-full mt-4"
                onClick={enviar}
            />
        </Card>
    )
}

//tudo ok por aqui, não precisa mexer
const mapStateToProps= (state) => (state)
export default connect(mapStateToProps, {pedirCartao})(CashbackForm)