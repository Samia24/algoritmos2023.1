/*Q24.lista2 - Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const coeficienteA = obter_numero('Informe o valor do coeficiente A: ')
    const coeficienteB = obter_numero('Informe o valor do coeficiente B: ')
    const coeficienteC = obter_numero('Informe o valor do coeficiente C: ')
    
    
    // Processamento
    const result = resultado(coeficienteA, coeficienteB, coeficienteC)
    

    // Saída
    console.log(`\n>>> ${result}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function resultado(coeficienteA, coeficienteB, coeficienteC){
    if (coeficienteA !== 0){
        let raiz_A = Math.sqrt(coeficienteA)
        let raiz_B = Math.sqrt(coeficienteB)
        let raiz_C = Math.sqrt(coeficienteC)
        return `A raiz quadrada de ${coeficienteA} é ${raiz_A.toFixed(2)};\n>>> A raiz quadrada de ${coeficienteB} é ${raiz_B.toFixed(2)};\n>>> A raiz quadrada de ${coeficienteC} é ${raiz_C.toFixed(2)}.`
    }else{
        return 'Informe um valor acima de 0 para o coeficiente A.'
    }
    
}
        
function cabecalho(){
    console.log('####### Q24.lista2 - Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o coeficiente A deve ser diferente de 0 (zero). #######')
    console.log('-------------------')
}

main()