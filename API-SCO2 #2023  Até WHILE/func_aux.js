import {question} from 'readline-sync'

export function obter_numero(descricao){
    let numero = obter_texto(descricao)

    while (isNaN(Number(numero)) || numero === ''){
        mostrar_texto('Valor inválido !')
        numero = (question(descricao))
    }
    return Number(numero)
}

export function obter_num_positivo(descricao = 'Digite um número positivo: '){
    let numero = obter_numero(descricao)

    while (numero <= 0){
        mostrar_texto('Informe um número positivo !')
        numero = obter_numero(descricao)
    }
    return numero
}

export function obter_texto(descricao = 'Digite um texto: '){
    const texto = question(descricao)
    return texto
}

export function mostrar_texto(texto = `Olá`){
    console.log(texto)
}

