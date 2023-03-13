/* O Índice de Adiposidade Corporal (IAC) - é um método utilizado para medir a gordura corporal. 
Para o cálculo desse índice são utilizadas medidas antropométricas, como circunferência do quadril e altura. */

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const quadril = obter_quadril('Informe sua medida de quadril em centímetros: ')
    const altura = obter_altura('Informe sua altura em centímetros: ')
    
    // Processamento
    const indice = iac(quadril, altura)
    const tamanho_min = quadril_normal_min(altura)
    const tamanho_max = quadril_normal_max(altura)

    //Saída
    console.log(`\n>>> Seu Índice de Adiposidade Corporal (IAC) é de ${indice.toFixed(1)}.\n\n Se o IAC estiver entre 0 e 8,9 a pessoa tá "Magra". \n Se o IAC estiver entre 9 e 20,9 tá "Normal".\n Se o IAC estiver entre 21 e 25,9, tá com "Sobrepeso".\n E por fim, se o IAC estiver entre 26 e 29,9, está em "Obesidade grau 1".\n \n--> O tamanho mínimo e máximo de quadril para um indivíduo na faixa normal é de ${tamanho_min.toFixed(1)} - ${tamanho_max.toFixed(1)} cm.\n`)
}

function obter_quadril(descricao){
    const numero = Number(question(descricao))
    return numero
}

function obter_altura(descricao){
    const num = Number(question(descricao))
    return num
}

function iac(quadril, altura){
    let form_iac = (quadril / ((altura * Math.sqrt(altura)) / 1000)) - 18
    return form_iac
}

function quadril_normal_min(altura){
    let tam_quad_min = ((altura * Math.sqrt(altura) / 1000)) * (9 + 18)
    return tam_quad_min
}

function quadril_normal_max(altura){
    let tam_quad_max = ((altura * Math.sqrt(altura)) / 1000) * (20.9 + 18)
    return tam_quad_max
}

function cabecalho(){
    console.log('####### Cálculo do Índice de Adiposidade Corporal (IAC) #######')
    console.log('-------------------')
}

main()