/*Q16.lista2 - Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.
Escreva um algoritmo para ler um número e verificar se ele obedece a esta característica.*/

import { question } from "readline-sync"

function main(){
    cabecalho()

    // Entrada
    const nota1 = obter_numero('Digite a primeira nota: ')
    const nota2 = obter_numero('Digite a segunda nota: ')
    
    // Processamento
    const media_final = media(nota1, nota2)

    //Saída
    console.log(`\n>>> O aluno foi ${media_final}.`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function media(nota1, nota2){
    let media = (nota1 + nota2) / 2
    if (media < 7){
        const notaEF = obter_numero('Informe sua nota no exame final: ')
        let media_f = media + notaEF / 2
        if (media_f >= 5){
            return 'Aprovado no EF'
        }else{
            return 'Reprovado no EF'
        }
    }else{
        return 'Aprovado direto'
    }
}

function cabecalho(){
    console.log('####### Q16.lista2 - Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”. Escreva um algoritmo para ler um número e verificar se ele obedece a esta característica. #######')
    console.log('-------------------')
}

main()