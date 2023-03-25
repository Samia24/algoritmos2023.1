/*Q19.lista2 - Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/
    
    import { question } from "readline-sync"
    
    function main(){
        cabecalho()
    
        // Entrada
        const altura = obter_numero('Informe sua altura em metros: ')
        const peso = obter_numero('Informe seu peso em quilogramas: ')
        
        // Processamento
        const result = resultado(altura, peso)
    
        //Saída
        console.log(`\n>>> De acordo com seu IMC, você está ${result}.`)
    }
    
    function obter_numero(descricao){
        const numero = Number(question(descricao))
        return numero
    }
    
    function resultado(altura, peso){
        let imc = peso / (altura ** 2)
        console.log(`\n-> Seu IMC é ${imc.toFixed(1)}.`)
        if (imc < 25){
            return 'com peso normal'
        }else if(imc <= 30){
            return 'obeso'
        }else if(imc > 30){
            return 'obesidade mórbida'
        }
    }
    
    function cabecalho(){
        console.log('####### Q19.lista2 - Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o  índice de massa corpórea (IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo  de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). #######')
        console.log('-------------------')
    }
    
    main()