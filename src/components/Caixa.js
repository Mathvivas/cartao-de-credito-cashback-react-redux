import React from 'react'
import { Card } from 'primereact/card'
import { connect } from 'react-redux'
const Caixa = ({total}) => {


    return (
        <Card
            title="Caixa"
            subTitle="Total incluindo pedidos de cartão e de cashback">
            <p className="text-center text-4xl">R${total}</p> 
        </Card>
    )
}
/*
    Essa função deverá percorrer cada fatia do estado
    Ela deve somar os valores da lista de pedidos de cartão, obtendo um total, digamos CART
    Ela deve somar os valores da lista de pedidos de cashback, obtendo um total, digamos CASH
    Ao final, ela deve devolver um JSON com uma única chave cujo nome você precisará descobrir, associada ao valor CART - CASH
    
    Dica1: Considere usar a função "reduce" do Javascript. Aliás, o nome reducer
    usado no Redux é inspirado nesta função. Veja alguns exemplos da função reduce:
    
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    Dica2: Você pode descobrir o nome da chave a ser utilizada aqui mesmo, neste arquivo.
*/

function getTotal(state ){
    let total = 0
    const {pedidosCartao, pedidosCashback} = state
    const transactions = [...pedidosCartao, ...pedidosCashback]

    transactions.forEach(t => {
        if( t.tipoTransacao === "PEDIR_CARTAO"){
            total += t.valor

        }
         if( t.tipoTransacao === "PEDIR_CASHBACK"){
            total -= t.valor

        }
    })

    return total


}


const mapStateToProps = (state) => {
  return {total: getTotal(state)}
}
    
export default connect(mapStateToProps)(Caixa)