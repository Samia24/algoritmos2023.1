import {obter_texto, obter_num_positivo, mostrar_texto} from './func_aux.js'

function main(){
    // Entrada
    const qtd_compras = obter_num_positivo('Informe o número de compras realizadas: ')
    
    // Processamento
    const dados_compra = cashback(qtd_compras)
    perc_cashback = cashback_total / faturamento_total * 100

    //Saída
    mostrar_texto(`\n------------------------------------`)
    mostrar_texto(`Faturamento Total: R$ ${faturamento_total.toFixed(2)}`)
    mostrar_texto(`Cashback Total: R$ ${cashback_total.toFixed(2)}`)
    mostrar_texto(`Percentual de Cashback: ${perc_cashback.toFixed(2)}%`)
    mostrar_texto(`Maior valor pago em cashback: R$${maiorCashback.toFixed(2)}`);
    mostrar_texto(`Menor valor pago em cashback: R$${menorCashback.toFixed(2)}`);
    mostrar_texto(`Valor médio de Cashback: R$ ${valor_medio_cashback.toFixed(2)}`)
    mostrar_texto(`------------------------------------`)

}

let faturamento_total = 0
let cashback_total = 0
let perc_cashback = 0
let maiorCashback = 0
let menorCashback = Infinity
let valor_medio_cashback = 0

function cashback(qtd_compras){
    let contador = 0
    
    while (qtd_compras > contador){
        let nome_cliente = obter_texto('Informe o nome do Cliente: ')
        let valor_compra = obter_num_positivo('Informe o valor da sua compra: R$ ')

        let desc_cashback = 0
        if (valor_compra <= 250){
            contador++
            desc_cashback = valor_compra * 0.05
            
        }else if(valor_compra > 250 && valor_compra <= 500){
            contador++
            desc_cashback = valor_compra * 0.07
            
        }else if(valor_compra > 500 && valor_compra <= 750){
            contador++
            desc_cashback = valor_compra * 0.08
            
        }else{
            contador++
            let excedente = valor_compra - 750
            desc_cashback = (valor_compra * 0.08) + (excedente * 0.25)
        }

        if (desc_cashback > maiorCashback){
            maiorCashback = desc_cashback
        }
        if (desc_cashback < menorCashback){
            menorCashback = desc_cashback
        }

        cashback_total += desc_cashback
        faturamento_total += valor_compra
        valor_medio_cashback = cashback_total / qtd_compras
        mostrar_texto(`Cliente ${nome_cliente}: Cashback de R$ ${desc_cashback.toFixed(2)}\n`)
    }
}

main()