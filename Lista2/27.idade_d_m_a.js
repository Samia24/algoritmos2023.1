/*Q27.lista2 - Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
nascimento e a data (dia, mês e ano) atual.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const dia_atual = obter_numero('Informe o dia atual: ')
    const mes_atual = obter_numero('Informe o mês atual: ')
    const ano_atual = obter_numero('Informe o ano atual: ')
    const dia_nasc = obter_numero('Informe o dia do seu nascimento: ')
    const mes_nasc = obter_numero('Informe o mês do seu nascimento: ')
    const ano_nasc = obter_numero('Informe o ano do seu nascimento: ')
    
    // Processamento
    const idade_anos = idade_atual(dia_atual, mes_atual, ano_atual, dia_nasc, mes_nasc, ano_nasc)
    

    // Saída
    console.log(`\n>>> ${idade_anos}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function idade_atual(dia_atual, mes_atual, ano_atual, dia_nasc, mes_nasc, ano_nasc){
    let idade_a = ano_atual - ano_nasc
    let idade_m = Math.abs(mes_atual - mes_nasc)
    let idade_d = Math.abs(dia_atual - dia_nasc)

    if (mes_atual < mes_nasc && dia_atual < dia_nasc){
        idade_a = idade_a - 1
        return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
    }else if (mes_atual < mes_nasc && dia_atual > dia_nasc){
        idade_a = idade_a - 1
        idade_m = idade_m - 1
        if (mes_atual === 4 || mes_atual === 6 || mes_atual === 9 || mes_atual === 11){
            idade_d = 30 - idade_d
            return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
        }else if(mes_atual === 2){
            if (ano_atual % 4 === 0 && ano_atual % 100 === 0 && ano_atual % 400 === 0){
                idade_d = 29 - idade_d
                return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
            }else if(ano_atual % 4 === 0 && ano_atual % 100 !== 0){
                idade_d = 29 - idade_d
                return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
            }
        }else{
            idade_d = 31 - idade_d
            return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
           }
    }else if (mes_atual === mes_nasc && dia_atual < dia_nasc){
        idade_a = idade_a - 1
        return `Sua idade é de ${idade_a} anos e ${idade_d} dias.`
    }else if (mes_atual === mes_nasc && dia_atual === dia_nasc){
        return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
    }else{
        idade_a = idade_a
        return `Sua idade é de ${idade_a} anos, ${idade_m} meses e ${idade_d} dias.`
    }
}
    
function cabecalho(){
    console.log('####### Q27.lista2 - Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu nascimento e a data (dia, mês e ano) atual. #######')
    console.log('-------------------')
}

main()