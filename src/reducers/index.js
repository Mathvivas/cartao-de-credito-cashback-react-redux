import { ACOES } from "../actions"
import { combineReducers } from 'redux'


/*
    Essa função é um reducer
    Ela deve verificar o type da ação e, se for o caso, adicionar seu payload à sua fatia de estado
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
export default combineReducers({
    pedidosCartao: pedidosCartaoReducer,
    pedidosCashback: pedidosCartaoReducer
})