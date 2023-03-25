/*Q10.lista2 - Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const dia_atual = obter_numero('Informe o dia atual: ')
    const mes_atual = obter_numero('Informe o mês atual: ')
    const ano_atual = obter_numero('Informe o ano atual: ')
    
    
    // Processamento
    const data_valida = data_atual(dia_atual, mes_atual, ano_atual)
    

    // Saída
    console.log(`\n>>> A data ${dia_atual}/${mes_atual}/${ano_atual} ${data_valida}.`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function data_atual(dia_atual, mes_atual, ano_atual){
    let data_val = 'é válida'
    if (mes_atual < 1 || mes_atual > 12){
        data_val = 'não é válida'
    }else{
        if (dia_atual < 1 || dia_atual > 31){
            data_val = 'não é válida'
        }else if (mes_atual === 4 || mes_atual === 6 || mes_atual === 9 || mes_atual === 11){
            if (dia_atual > 30){
                data_val = 'não é válida'
            }
        }else if (mes_atual === 2){
            if (dia_atual < 1 || dia_atual > 29){
                data_val = 'não é válida'
            }else if (dia_atual === 29){
                if (ano_atual % 4 === 0 && ano_atual % 100 === 0 && ano_atual % 400 === 0){
                    data_val = 'é válida'
                }else if (ano_atual % 4 === 0 && ano_atual % 100 !== 0){
                    data_val = 'é válida'
                }else{
                    data_val = 'não é válida'
                }
            }else if(dia_atual > 1 || dia_atual <= 28){
                data_val = 'é válida'
            }
        }
    }
    return data_val
}
        
function cabecalho(){
    console.log('####### Q10.lista2 - Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida. #######')
    console.log('-------------------')
}

main()