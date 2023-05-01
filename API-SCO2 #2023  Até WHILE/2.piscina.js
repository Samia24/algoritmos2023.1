import {obter_texto, obter_num_positivo, mostrar_texto} from './func_aux.js'

function main(){
    // Entrada
    const valor_litro = obter_num_positivo('Informe o valor para cada 1000L de água: R$ ')
    const largura = obter_num_positivo('Informe a largura da piscina em centímetros: ')
    const comprimento = obter_num_positivo('Informe o comprimento da piscina em centímetros: ')
    const profundidade = obter_num_positivo('Informe a profundidade da piscina em centímetros: ')
    
    
    // Processamento
    const capacidade_pis = capacidade(largura, comprimento, profundidade)
    const volume_recom = volume_recomendado(capacidade_pis)
    const valor_encher = valor_encher_total(volume_recom, valor_litro)
    const volume_i = volume_ideal(valor_litro, volume_recom)

    //Saída
    mostrar_texto('-----------------------------------')
    mostrar_texto(`A capacidade máxima da piscina é de ${capacidade_pis} litros.`)
    mostrar_texto(`A capacidade de volume ideal da piscina é de ${volume_recom} litros.`)
    mostrar_texto(`O valor pago para encher a piscina foi de: R$ ${valor_encher}.`)
    mostrar_texto(`O valor gasto mensalmente para manter a piscina no nível ideal é de R$ ${volume_i}.`)
    mostrar_texto('-----------------------------------')
    
   }

let capacidade_piscina = 0
let volume = 0
let volume_utilizado = 0
let valor_pago = 0
let volume_mensal = 0
let gasto_mensal = 0

function capacidade(largura, comprimento, profundidade){
    capacidade_piscina = (largura * comprimento * profundidade) / 1000
    return capacidade_piscina
}

function volume_recomendado(capacidade){
    volume = capacidade * (85 / 100)
    return volume
}

function valor_encher_total(volume_recomendado, valor_litro){
    while(volume_utilizado < volume_recomendado){
        volume_utilizado += 1000
        valor_pago += valor_litro
    }
    return valor_pago
}

function volume_ideal(valor_litro, volume_recomendado){
    volume_mensal = volume_recomendado * (10 / 1000)
    gasto_mensal = volume_mensal / 1000 * valor_litro 
    return gasto_mensal
}

main()