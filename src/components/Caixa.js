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

/*
A função mapStateToProps tem como finalidade
fazer com que o estado gerenciado pelo Redux seja entregue aos componentes via
props
trata-se de uma convenção e seu nome pode ser qualquer um
*/
const mapStateToProps = (state) => {
  return {total: getTotal(state)}
}
/*
Para que o componente tenha acesso aos recursos do Redux, utilizamos
a função connect. Quando chamada, ela devolve uma função que, então, colocamos
em execução entregando-lhe como parâmetro o nome do componente (Caixa)
*/
//A função connect é chamada
//Ela recebe mapStateToProps como parâmetro
//a expressão connect(mapStateToProps) resulta em uma função
//ela é chamada com Caixa como parâmetro
//O props de Caixa passa a ter acesso ao estado
export default connect(mapStateToProps)(Caixa)

