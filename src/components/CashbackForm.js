import React, { useState }from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { connect, useDispatch } from 'react-redux'
import { pedirCashback } from '../actions'


const CashbackForm = (props) => {
    const dispatch = useDispatch()
    const [cpf, setCpf] = useState('')
    const [valor, setValor] = useState(0)

    const enviar = (e) => {
        e.preventDefault()
        //faça o dispatch de uma ação de pedido de cashback aqui
        if(cpf.length>0 && valor >0){
            //pedirCashback é a função criadora de ação que retorna o json
            dispatch(pedirCashback(cpf, valor))
            setCpf("")
            setValor(0)
        }

 
    }

    return (
        <Card>
            <div className="field">
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf" 
                    value={cpf}
                    type="text" 
                    className="inputfield w-full p-3"
                    onChange={e => {setCpf(e.target.value)}}
                />
            </div>
            <div className="field">
                <label htmlFor="valor">Valor</label>
                <input
                    id="valor" 
                    value={valor}
                    type="number" 
                    className="inputfield w-full p-3"
                    onChange={e => setValor(e.target.value)}
                />
            </div>
                     
            <Button 
                label="OK"
                className="w-full mt-4"
                onClick={enviar}
            />
        </Card>
    )
}

//essa função está ok, não precisa mexer
const mapStateToProps = (state) => (state)

//como segundo parâmetro da função connect, você precisará passar um JSON contendo a criadora de ação importada neste arquivo
export default connect(mapStateToProps, {pedirCashback})(CashbackForm)