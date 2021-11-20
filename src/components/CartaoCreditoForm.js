import React, { useState }from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { RadioButton } from 'primereact/radiobutton'
import { connect, useDispatch } from 'react-redux'
import { pedirCartao } from '../actions'



const CashbackForm = (props) => {
    // Hooks, dispatch -> retorna uma referencia ao dispatch do redux store usado para dar dispatch em ações como usado a seguir:
    const dispatch = useDispatch()
    // useState é um hook para definir o estado inicial do "cpf" no caso e o set 
    // state usando mais tarde para setar este cpf para outro valor usando hook e não precisando usar o setState de classes
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [cartaoEscolhido, setCartoEscolhido] = useState('')

    const enviar = (e) => {
        //Previne o comportamento padrão do react
        e.preventDefault()
        //faça o dispatch de uma ação de pedido de cartão aqui
        if(cpf.length>0 && nome.length >0 &&cartaoEscolhido.length>0 ){
        //pedirCartao é a função criadora de ação que retorna o json
        //usando o hook useDispatch para desparar uma ação "pedirCartao"
        dispatch(pedirCartao(cpf, nome, cartaoEscolhido))
        setCpf('')
        setNome('')
        setCartoEscolhido('')
        // O component CartaoCreditoForm utiliza a action pedirCartao para dar um 
        // dispatch/envio da ação para possível mudança de estado, clicando em um button "Enviar", com os dados de um formulário de cartão de crédito.
        }

    }
    return (
        <Card>
            <div className="field">
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf" 
                    type="text" 
                    className="inputfield w-full p-3"
                    value={cpf}
                    onChange={e => {setCpf(e.target.value)}}
                />
            </div>
            <div className="field">
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome" 
                    type="text" 
                    value={nome}
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