import {obter_texto, obter_num_positivo, mostrar_texto} from './func_aux.js'

function main(){
    // Entrada
    let item_a = obter_num_positivo('Informe um valor correspondente aos dados positivos, comportamento de pagamento, tempo de contrato e tipos de contratos: ')
    let item_b = obter_num_positivo('Informe um valor correspondente a informações de dívidas, histórico de regularização e em aberto: ')
    let item_c = obter_num_positivo('Informe um valor correspondente a consulta para novos contratos de serviço ou crédito: ')
    
    
    // Processamento
    const valor_item_a = calculo_item_a(item_a)
    const valor_item_b = calculo_item_b(item_b)
    const valor_item_c = calculo_item_c(item_c)
        
   }

let score1 = 0
let score2 = 0
let valor_score1 = ''
let valor_score2 = ''

function calculo_item_a(item_a){
    if(item_a < 0 || item_a > 100){
        mostrar_texto('Valor Inválido !')
        item_a = obter_num_positivo('Informe um valor entre 0 e 100: ')
    }
    score1 = (item_a / 100) * 260
    score2 = (item_a / 100) * 620

    if (score1 >= 0 && score1 <= 400){
        valor_score1 = 'Score BAIXO'
    }else if (score1 > 400 && score1 <= 600){
        valor_score1 = 'Score REGULAR'
    }else if (score1 > 600 && score1 <= 800){
        valor_score1 = 'Score BOM'
    }else if (score1 > 800 && score1 <= 1000){
        valor_score1 = 'Score MUITO BOM'
    }

    if (score2 >= 0 && score2 <= 300){
        valor_score2 = 'Score BAIXO'
    }else if (score2 > 300 && score2 <= 500){
        valor_score2 = 'Score REGULAR'
    }else if (score2 > 500 && score2 <= 700){
        valor_score2 = 'Score BOM'
    }else if (score2 > 700 && score2 <= 1000){
        valor_score2 = 'Score MUITO BOM'
    }
    
    mostrar_texto('-----------------------------------')
    mostrar_texto(`>>> ITEM A <<<`)
    mostrar_texto(`Score 1: ${score1} - ${valor_score1}.`)
    mostrar_texto(`Score 2: ${score2} - ${valor_score2}.`)
    mostrar_texto('-----------------------------------')
}

function calculo_item_b(item_b, score_1, score_2){
    if (item_b < 0 || item_b > 100){
        mostrar_texto('Valor Inválido !')
        item_b = obter_num_positivo('Informe um valor entre 0 e 100: ')
    }

    score1 = (item_b / 100) * 260
    score2 = (item_b / 100) * 620

    if (score1 >= 0 && score1 <= 400){
        valor_score1 = 'Score BAIXO'
    }else if (score1 > 400 && score1 <= 600){
        valor_score1 = 'Score REGULAR'
    }else if (score1 > 600 && score1 <= 800){
        valor_score1 = 'Score BOM'
    }else if (score1 > 800 && score1 <= 1000){
        valor_score1 = 'Score MUITO BOM'
    }

    if (score2 >= 0 && score2 <= 300){
        valor_score2 = 'Score BAIXO'
    }else if (score2 > 300 && score2 <= 500){
        valor_score2 = 'Score REGULAR'
    }else if (score2 > 500 && score2 <= 700){
        valor_score2 = 'Score BOM'
    }else if (score2 > 700 && score2 <= 1000){
        valor_score2 = 'Score MUITO BOM'
    }


    mostrar_texto('-----------------------------------')
    mostrar_texto(`>>> ITEM B <<<`)
    mostrar_texto(`Score 1: ${score1} - ${valor_score1}.`)
    mostrar_texto(`Score 2: ${score2} - ${valor_score2}.`)
    mostrar_texto('-----------------------------------')
}

function calculo_item_c(item_c, score_1, score_2){
    if (item_c < 0 || item_c > 100){
        mostrar_texto('Valor Inválido !')
        item_c = obter_num_positivo('Informe um valor entre 0 e 100: ')
    }

    score1 = (item_c / 100) * 260
    score2 = (item_c / 100) * 620
    
    if (score1 >= 0 && score1 <= 400){
        valor_score1 = 'Score BAIXO'
    }else if (score1 > 400 && score1 <= 600){
        valor_score1 = 'Score REGULAR'
    }else if (score1 > 600 && score1 <= 800){
        valor_score1 = 'Score BOM'
    }else if (score1 > 800 && score1 <= 1000){
        valor_score1 = 'Score MUITO BOM'
    }

    if (score2 >= 0 && score2 <= 300){
        valor_score2 = 'Score BAIXO'
    }else if (score2 > 300 && score2 <= 500){
        valor_score2 = 'Score REGULAR'
    }else if (score2 > 500 && score2 <= 700){
        valor_score2 = 'Score BOM'
    }else if (score2 > 700 && score2 <= 1000){
        valor_score2 = 'Score MUITO BOM'
    }
    

    mostrar_texto('-----------------------------------')
    mostrar_texto(`>>> ITEM C <<<`)
    mostrar_texto(`Score 1: ${score1} - ${valor_score1}.`)
    mostrar_texto(`Score 2: ${score2} - ${valor_score2}.`)
    mostrar_texto('-----------------------------------')
}

main()