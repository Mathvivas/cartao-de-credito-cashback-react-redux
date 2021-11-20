/* index.js -> actions : Utilizando este nome, podemos importar o conteúdo especificando
somente a pasta em que ele reside, não sendo necessário especificar o nome do
arquivo
*/
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
    //essa função cria uma ação
export const pedirCartao = (cpf, nome, cartaoEscolhido) => {
    const data = new Date()
    let valor

    cartaoEscolhido === 'gold' ? valor = 50 : valor = 100
    const tipoTransacao = "PEDIR_CARTAO"
    //esse JSON é a ação criada, A ação é um simples objeto JSON contendo tipo e os dados de interesse
    return {
        type: "PEDIR_CARTAO",
        payload: {
            cpf,
            nome,
            tipoTransacao,
            data,
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
    const data = new Date()
    const tipoTransacao = "PEDIR_CASHBACK"
    const parsedValue = Number.parseInt(valor)
    return {
        type: "PEDIR_CASHBACK",
        payload: {
            cpf,
            valor: parsedValue,
            tipoTransacao,
            data
        }
    }
}