/*Q9.lista - Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const numero1 = obter_numero('Digite o 1º número: ')
    const numero2 = obter_numero('Digite o 2º número: ')
  
    //Saída
    console.log('\n>>> Os números (' + numero1 + ',' + numero2 + ') em ordem inversa é (' + numero2 + ',' + numero1 + ').')
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function cabecalho(){
    console.log('####### Leia 2 números (A, B) e escreva-os em ordem inversa (B, A). #######')
    console.log('-------------------')
}

main()