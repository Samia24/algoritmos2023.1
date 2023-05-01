import {obter_texto, obter_num_positivo, mostrar_texto} from './func_aux.js'

function main(){
    // Entrada
    const objetivo = obter_texto('Informe seu objetivo: ')
    const qnt_precisa = obter_num_positivo('Informe quanto você precisa para atingir seu objetivo: R$ ')
    const salario = obter_num_positivo('Informe o seu salário: R$ ')
    const percentual_investido = obter_num_positivo('Informe o percentual investido (até 30%): ')
    const juros = obter_num_positivo('Informe o valor dos juros a ser acrescido (0,01 a 1%): ')

    
    // Processamento
    const investi_m = invest_mens(salario, percentual_investido)
    const investimento_total = investimento(investi_m, juros, qnt_precisa)

    
   }

let investimento_mensal = 0
let valor_final = 0
let valor = 0
let mes = 0
let ano = 0

function invest_mens(salario, percentual_investido){
    investimento_mensal = salario * (percentual_investido / 100)
    return investimento_mensal
}

function investimento(investimento_mensal, juros, qnt_precisa){

    while (valor_final < qnt_precisa){
        valor = valor_final + investimento_mensal
        valor_final = valor + (valor_final * (juros / 100))
        mes++
    }
    
    if (mes > 12){
        ano = Math.trunc(mes / 12)
        mes = mes % 12
        mostrar_texto(`\n>>>> Seu objetivo será atingido em ${ano} ano(s) e ${mes} meses. \nO valor final com juros será de R$ ${valor_final.toFixed(2)}.`)
    }else{
        mostrar_texto(`\n>>>> Seu objetivo será atingido em ${mes} meses. \nO valor final com juros será de R$ ${valor_final.toFixed(2)}.`)
    }
    
}


main()