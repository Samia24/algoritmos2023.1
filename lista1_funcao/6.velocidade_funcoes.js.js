/*Q6.lista1 - Leia uma velocidade em km/h, calcule e 
escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    //Entrada
    const velocidade_kmh = obter_vel('Velocidade (km/h): ')

    //Processamento
    const veloc_ms = vel(velocidade_kmh)
    
    //Saída
    console.log('\n>>>'+ velocidade_kmh, 'km/h equivale a', veloc_ms.toFixed(1), 'm/s.')
}

function obter_vel(descricao){
    const velocidade = Number(question(descricao))
    return velocidade
}


//Processamento
function vel(velocidade_kmh){
    const velocidade_ms = velocidade_kmh / 3.6
    return velocidade_ms
}

function cabecalho(){
    console.log('####### Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6) #######')
    console.log('-------------------')
}

main()