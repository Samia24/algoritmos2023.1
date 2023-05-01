import {obter_texto, obter_num_positivo, mostrar_texto} from './func_aux.js'

function main(){
// Entrada
let leituraAtual = 0
let leituraAnterior = 0

while (leituraAtual <= leituraAnterior) {
  leituraAtual = obter_num_positivo('Digite a leitura atual do medidor de energia: ')
  leituraAnterior = obter_num_positivo('Digite a leitura anterior do medidor de energia: ')
}

//Processamento
const consumo_energia = consumo_KWh(leituraAtual, leituraAnterior)
const faturado = valor_fat(valorFaturado, consumo_energia)
const bandeira_ver = bandeira_vermelha(consumo_energia)
const valor_do_icms = valor_icms(faturado)
const pis = valor_pisConfins(faturado)
const iluminacao = valor_taxa(consumo_energia, faturado)

//Saída
mostrar_texto('\n-----------------------------------')
mostrar_texto(`> Consumo: ${consumo_energia} KWh.`)
mostrar_texto(`> Valor Faturado: R$${faturado.toFixed(2)}`)
mostrar_texto(`> Bandeira: R$${bandeira_ver.toFixed(2)}`)
mostrar_texto(`> ICMS: R$${valor_do_icms.toFixed(2)}`)
mostrar_texto(`> PIS/CONFIS: R$${pis.toFixed(2)}`)
mostrar_texto(`> Taxa Iluminação: R$${iluminacao.toFixed(2)}`)
mostrar_texto('-----------------------------------\n')

}

let consumo = 0
let taxaIluminacao = 0
let valorFaturado = 0
let bandeira = 0


function consumo_KWh(leituraAtual, leituraAnterior){
    let consumo = leituraAtual - leituraAnterior
    return consumo
}


function valor_fat(valorFaturado, consumo_KWh){
    if (consumo_KWh > 0 && consumo_KWh <= 30) {
        valorFaturado = 0
    } else if (consumo_KWh > 30 && consumo_KWh <= 100) {
        valorFaturado = (consumo_KWh - 30) * 0.59
    } else if (consumo_KWh > 100) {
        valorFaturado = 70.70 + ((consumo_KWh - 100) * 0.75)
    }
    return valorFaturado
}

// cálculo da bandeira vermelha patamar 2
function bandeira_vermelha(consumo_KWh){
    if (consumo_KWh > 0){
        bandeira = (consumo_KWh / 100) * 8
    }
    return bandeira
}

// cálculo do ICMS
function valor_icms(valorFaturado){
    let icms = valorFaturado * 0.25
    return icms
}

// cálculo do PIS/CONFIS
function valor_pisConfins(valorFaturado){
    let pisConfis = valorFaturado * 0.15
    return pisConfis
}

// cálculo da taxa de iluminação pública
function valor_taxa(consumo_KWh, valorFaturado){
    if (consumo_KWh > 80){
        taxaIluminacao = valorFaturado * 0.06
    }
    return taxaIluminacao
}

main()