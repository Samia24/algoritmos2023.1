/*Q23.lista2 - Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const dia1 = obter_numero('Informe o primeiro dia: ')
    const mes1 = obter_numero('Informe o primeiro mês: ')
    const ano1 = obter_numero('Informe o primeiro ano: ')
    const dia2 = obter_numero('Informe o segundo dia: ')
    const mes2 = obter_numero('Informe o segundo mês: ')
    const ano2 = obter_numero('Informe o segundo ano: ')
    
    
    // Processamento
    const data_recente = data_rec(dia1, mes1, ano1, dia2, mes2, ano2)
    

    // Saída
    console.log(`\n>>> A data mais recente é ${data_recente}.`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function data(dia, mes, ano){
    return (`${dia}/${mes}/${ano}`)
}

function data_rec(dia1, mes1, ano1, dia2, mes2, ano2){
    if (ano1 > ano2){
        return data(dia1, mes1, ano1)
    }else if (ano2 > ano1){
        return data(dia2, mes2, ano2)
    }else{
        if (mes1 > mes2){
            return data(dia1, mes1, ano1)
        }else if (mes2 > mes1){
            return data(dia2, mes2, ano2)
        }else{
            if (dia1 > dia2){
                return data(dia1, mes1, ano1)
            }else if (dia2 > dia1){
                return data(dia2, mes2, ano2)
            }else{
                return data(dia1, mes1, ano1)
            }
        }
    }

}
        
function cabecalho(){
    console.log('####### Q23.lista2 - Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e  escreva qual delas é a mais recente. #######')
    console.log('-------------------')
}

main()