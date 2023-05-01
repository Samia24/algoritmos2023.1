import {obter_num_positivo, mostrar_texto} from './func_aux.js'

function main(){
    // Entrada
    const renda_mensal = obter_num_positivo('Informe sua renda mensal: R$ ')
    const valor_emprestimo = obter_num_positivo('Informe o valor do empréstimo: R$ ')
    let prazo_desejado = obter_num_positivo('Informe o prazo desejado para pagamento: ')
        
    // Processamento
    const prazo_des = prazo(prazo_desejado)
    const valor_iof = iof(valor_emprestimo, prazo_des)
    const juros = juros_a_pagar(prazo_des)
    const valor_total = selic(valor_emprestimo, valor_iof, juros)
    const valor_parcela = parcela(valor_total, prazo_des)
    const situacao_emprestimo = emprestimo(valor_parcela, renda_mensal)

    //Saída
    mostrar_texto(`\n------------------------------------`)
    mostrar_texto(`Valor Pedido: R$ ${valor_emprestimo.toFixed(2)}`)
    mostrar_texto(`Valor do IOF: R$ ${valor_iof.toFixed(2)}`)
    mostrar_texto(`Valor dos Juros a pagar: ${(juros * 100).toFixed(1)}%`)
    mostrar_texto(`Valor Total a pagar: R$ ${valor_total.toFixed(2)}`);
    mostrar_texto(`Valor da Parcela Mensal: R$ ${valor_parcela.toFixed(2)}`);
    mostrar_texto(`Comprometimento da Renda Mensal: ${(((valor_parcela * 100)/renda_mensal)).toFixed(1)}%`)
    mostrar_texto(`>>> Empréstimo ${situacao_emprestimo}! <<<`)
    mostrar_texto(`------------------------------------`)
    
   }

   let juros_pagar = 0
   let total_pagar = 0
   let valor_parcela = 0
   
   function prazo(prazo_desejado){
    while (prazo_desejado < 2 || prazo_desejado > 24){
        mostrar_texto(`Prazo inválido !`)
        prazo_desejado = obter_num_positivo('Informe um prazo maior/igual a 2 ou menor/igual a 24: ')
    }
    return prazo_desejado
   }

   function iof(valor_emprestimo, prazo){
    let prazo_dias = prazo * 30
    let valor_iof = (0.0038 * valor_emprestimo) + (0.000082 * prazo_dias)
    return valor_iof
   }

   function juros_a_pagar(prazo){
    if (prazo <= 6){
        juros_pagar = (0.50 * 0.1375)
    }else if (prazo >= 7 && prazo <= 12){
        juros_pagar = (0.75 * 0.1375)
    }else if (prazo > 12 && prazo <= 18){
        juros_pagar = (1 * 0.1375)
    }else{
        juros_pagar = (1.3 * 0.1375)
    }
    return juros_pagar

   }

   function selic(valor_emprestimo, iof, juros_a_pagar){
    total_pagar = ((juros_a_pagar) * (valor_emprestimo + iof)) + valor_emprestimo
    return total_pagar
   }

   function parcela(selic, prazo){
    valor_parcela = (selic / prazo)
    return valor_parcela
   }

   function emprestimo(parcela, renda_mensal){
    let max_parcela = 0.40 * renda_mensal
    if (parcela <= max_parcela){
        return 'APROVADO'
    }else{
        return 'NEGADO'
    }
   }

main()