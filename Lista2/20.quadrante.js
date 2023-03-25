/*Q20.lista2 - Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.*/
    
    import { question } from "readline-sync"
    
    function main(){
        cabecalho()
    
        // Entrada
        const angulo = obter_numero('Informe a medida do ângulo: ')
        
        // Processamento
        const result = resultado(angulo)
    
        //Saída
        console.log(`\n>>> ${result}`)
    }
    
    function obter_numero(descricao){
        const numero = Number(question(descricao))
        return numero
    }
    
    function resultado(angulo){
        if (angulo >= 0 && angulo <= 90){
            return `O ângulo de ${angulo}º está localizado no primeiro quadrante.`
        }else if (angulo <= 180){
            return `O ângulo de ${angulo}º está localizado no segundo quadrante.`
        }else if (angulo <= 270){
            return `O ângulo de ${angulo}º está localizado no terceiro quadrante.`
        }else if (angulo <= 360){
            return `O ângulo de ${angulo}º está localizado no quarto quadrante.`
        }
    }
    
    function cabecalho(){
        console.log('####### Q20.lista2 - Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro,  segundo, terceiro ou quarto) em que o ângulo se localiza. #######')
        console.log('-------------------')
    }
    
    main()