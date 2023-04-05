import { question } from "readline-sync";

function main(){
    //Entrada
    const perc_tab_fipe = obter_numero('Informe o percentual da FIPE do Argo: ')
    const qtd_meses_parc = obter_numero('Informe a quatidade de meses que deseja parcelar (36, 48 ou 60 meses): ')
    const taxa_juros = obter_numero('Informe a taxa de juros: ')
    const taxa_adm = obter_numero('Informe a taxa de administração do consórcio: ')
    
    //Processamento
    const valor_bem = valor_argo(perc_tab_fipe)
    const valor_cdc = cdc(taxa_juros, valor_bem, qtd_meses_parc)
    const valor_cons = consorcio(taxa_adm)
    const parcela_cdc = parc_cdc(valor_bem, valor_cdc, qtd_meses_parc)
    const valor_total_cdc = total_cdc(parcela_cdc, qtd_meses_parc)
    const parcela_cons = parc_cons(valor_bem, valor_cons, qtd_meses_parc)
    const valor_total_cons =  total_cons(parcela_cons, qtd_meses_parc)


    //Saída
    console.log(`\n ----- Financiamento CDC -----`)
    console.log(`> Valor Bem: R$ ${valor_bem.toFixed(2)}`)
    console.log(`> Valor a ser parcelado: R$ ${(185000 - valor_bem).toFixed(2)} `)
    console.log(`> Juros Totais: R$ ${valor_cdc.toFixed(2)} (${(taxa_juros * qtd_meses_parc).toFixed(1)}%)`)
    console.log(`> Parcelamento: ${qtd_meses_parc} prestações de R$ ${parcela_cdc.toFixed(2)}`)
    console.log(`> Total a pagar (Entrada + Prestações): R$ ${valor_total_cdc.toFixed(2)}`)

    console.log(`\n ----- Financiamento Consórcio -----`)
    console.log(`> Valor Bem: R$ ${valor_bem.toFixed(2)}`)
    console.log(`> Valor a ser parcelado: R$ ${(185000 - valor_bem).toFixed(2)} `)
    console.log(`> Juros Totais: R$ ${valor_cons.toFixed(2)}`)
    console.log(`> Parcelamento: ${qtd_meses_parc} prestações de R$ ${parcela_cons.toFixed(2)}`)
    console.log(`> Total a pagar (Entrada + Prestações): R$ ${valor_total_cons.toFixed(2)}`)

    if(valor_total_cdc > valor_total_cons){
        console.log('\n >>>> O financiamento por consórcio é mais vantajoso !')
    }else{
        console.log('\n >>>> O financiamento por crédito direto ao consumidor (CDC) é mais vantajoso !')
    }
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function valor_argo(perc_tab_fipe){
    let argo = 89000 * (perc_tab_fipe/100)
    return argo
}

function cdc(taxa_juros, valor_argo, qtd_meses_parc){
    let juros_simples = (185000 - valor_argo) * (taxa_juros / 100) * qtd_meses_parc
    return juros_simples
}

function consorcio(taxa_adm){
    let val_cons = 185000 * (taxa_adm / 100)
    return val_cons
}

function parc_cdc(valor_argo, cdc, qtd_meses_parc){
    let parcelamento_cdc = ((185000 - valor_argo) + cdc) / qtd_meses_parc
    return parcelamento_cdc
}

function total_cdc(parc_cdc, qtd_meses_parc){
    let total = parc_cdc * qtd_meses_parc
    return total
}

function parc_cons(valor_argo, consorcio, qtd_meses_parc){
    let parcelamento_cons = ((185000 - valor_argo) + consorcio) / qtd_meses_parc
    return parcelamento_cons
}

function total_cons(parc_cons, qtd_meses_parc){
    let total = parc_cons * qtd_meses_parc
    return total
}

main()