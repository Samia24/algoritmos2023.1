/*Q28.lista2 - Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
não pode ser negativo.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const x = obter_numero('Informe o valor do ponto x (base): ')
    const y = obter_numero('Informe o valor do ponto y (altura): ')
        
    // Processamento
    const result = pontos(x, y)
    

    // Saída
    console.log(`\n>>> ${result}`)
        
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function pontos(x, y){
    if (x >= 0 && y >= 0){
        let area = x * y
        return `A área do retângulo é ${area}cm.`
    }else{
        return 'Informe valores de x e y positivos.'
    }
}
        
function cabecalho(){
    console.log('####### Q28.lista2 - Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de  que o valor da área não pode ser negativo. #######')
    console.log('-------------------')
}

main()