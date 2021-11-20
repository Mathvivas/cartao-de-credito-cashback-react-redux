// REDUX => GERENCIADOR DE ESTADO
/*
    Um reducer é
    uma simples função que recebe partes do estado atual que lhe sejam de interesse e
    a ação a ser tratada. Cabe a ela devolver o estado atualizado de acordo com os
    parâmetros recebidos
*/
import { ACOES } from "../actions"
// Aqui importamos o componente combineReducers da biblioteca do redux. 
// Para combinar os reducers para facilitar o trabalho de exportação ao Provider em src/index.js
import { combineReducers } from 'redux'


/*
    Essa função é um reducer
    Ela deve verificar o type da ação e, se for o caso, adicionar seu payload à sua fatia de estado
*/
/*
    A seguir, definimos o reducer para “pedidos cartão”. Ele recebe o pedido de cartão
    selecionada e uma ação. Se a ação for do tipo adequado, apenas devolve seu objeto
    “payload” da ação e o spread de pedidos de cartão.Caso contrário, devolve o pedidoCartao
    previamente selecionada
*/

const pedidosCartaoReducer = (pedidosCartao = [], acao) => {
    if ( acao.type === "PEDIR_CARTAO" ) {
        return [
            ...pedidosCartao,
            acao.payload
        ]
    }
    return pedidosCartao
}


/*
    Essa função é um reducer
    Ela deve verificar o type da ação e, se for o caso, adicionar seu payload à sua fatia de estado
*/
const pedidosCashbackReducer = (pedidosCashback = [], acao) => {
   if ( acao.type === "PEDIR_CASHBACK" ) {
       return [
           ...pedidosCashback,
           acao.payload
       ]
   }
   return pedidosCashback
}

/* 
    Utilize um mecanismo próprio do Redux para "combinar" os dois reducers
    e devolver um único objeto que os contém.
    Os nomes das chaves não devem incluir o sufixo "reducer"
*/
// Exportamos o objeto resultante da combinação do combineReducer na linha 3
export default combineReducers({
    pedidosCartao: pedidosCartaoReducer,
    pedidosCashback: pedidosCashbackReducer
})