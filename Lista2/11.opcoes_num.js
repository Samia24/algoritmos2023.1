/*Q11.lista2 - Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const opcao = obter_numero('Informe a opção desejada (1, 2 ou 3): ')
    const num1 = obter_numero('Informe o valor do primeiro número: ')
    const num2 = obter_numero('Informe o valor do segundo número: ')
    const num3 = obter_numero('Informe o valor do terceiro número: ')
    
    // Processamento
    const retorno_valor = retorno(opcao, num1, num2, num3)
    
    // Saída
    if (retorno_valor){
        console.log(`\n>>> Você escolheu a opção ${opcao}, o valor para tal é ${retorno_valor}.`)
    }else{
       console.log('\n>>> Escolha uma opção entre 1 e 3 !')
    }
    
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function retorno(opcao, num1, num2, num3){
    if (opcao === 1){
        return num1
    }else if (opcao === 2){
        return num2
    }else if (opcao === 3){
        return num3
    }
}
    
function cabecalho(){
    console.log('####### Q11.lista2 - Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3. #######')
    console.log('-------------------')
}

main()