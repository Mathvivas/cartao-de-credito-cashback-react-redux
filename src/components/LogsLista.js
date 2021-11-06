import React from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
const LogsLista = (props) => {
    return (
        <div>
            <h3 className="text-center">Logs</h3>
            {props.logs.map((log, i) => {
                return (
                    <div
                        className='border border-round border-1 border-400 mb-2 p-0'
                        key={i}>
                        <p className="text-center mt-1">{log.tipoTransacao}</p>
                        <p className="text-center">
                            {log.data}: R${log.valor}
                        </p>
                    </div> 
                ) 
            })}
        </div>
    )
}

//tudo ok por aqui, não precisa mexer
//repare que utilizamos a underscore para fazer a ordenação
const mapStateToProps = (state) => {
    return {logs: _.sortBy([...state.pedidosCartao, ...state.pedidosCashback], 'data').reverse()}
}

export default connect(mapStateToProps)(LogsLista)