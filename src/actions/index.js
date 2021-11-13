export const ACOES = {
    pedirCartao: "PEDIR_CARTAO",
    pedirCashback: "PEDIR_CASHBACK"
}

/*
    Essa função deve ser uma criadora de ação
    O type da ação construída deve ser obtido do objeto ACOES acima
    Seu payload deve incluir: 
        cpf, 
        nome, 
        tipoTransacao (veja os prints no enunciado),
        data (é a data atual do sistema. Lembre-se da classe Date. Ela é suficiente)
        valor (varia em função do tipo do cartão escolhido)
*/
export const pedirCartao = (cpf, nome, cartaoEscolhido) => {
    const dataAtual = Date.now()
    const tipoTransacao = ACOES.pedirCartao
    let valor

    cartaoEscolhido === 'gold' ? valor = 50 : valor = 100

    return {
        type: "PEDIR_CARTAO",
        payload: {
            cpf,
            nome,
            tipoTransacao,
            dataAtual,
            valor
        }
    }
}

/*
    Essa função deve ser uma criadora de ação
    O type da ação construída deve ser obtido do objeto ACOES acima
    Seu payload deve incluir: 
        cpf, 
        valor (é o próprio valor de cashback),
        tipoTransacao (veja os prints no enunciado),
        data (é a data atual do sistema. Lembre-se da classe Date. Ela é suficiente)
*/
export const pedirCashback = (cpf, valor) => {
    const dataAtual = Date.now()
    const tipoTransacao = ACOES.pedirCashback

    return {
        type: "PEDIR_CASHBACK",
        payload: {
            cpf,
            valor,
            tipoTransacao,
            dataAtual
        }
    }
}