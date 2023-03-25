/*Q22.lista2 - Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
seguinte.*/
        
        import { question } from "readline-sync"
        
        function main(){
            cabecalho()
        
            // Entrada
            const hora_inicial = obter_numero('Informe a hora inicial do jogo: ')
            const minutos_iniciais = obter_numero('Informe os minutos que iniciou o jogo: ')
            const hora_final = obter_numero('Informe a hora final do jogo: ')
            const minutos_finais = obter_numero('Informe os minutos em que o jogo terminou: ')
            
            // Processamento
            const result = resultado(hora_inicial, minutos_iniciais, hora_final, minutos_finais)
        
            //Saída
            console.log(`\n>>> ${result}`)
        }
        
        function obter_numero(descricao){
            const numero = Number(question(descricao))
            return numero
        }
        
        function resultado(hora_inicial, minutos_iniciais, hora_final, minutos_finais){
            let tempo_inicial = (hora_inicial * 60) + minutos_iniciais
            let tempo_final = (hora_final * 60) + minutos_finais
            let diferenca = tempo_final - tempo_inicial
            let tempo_jogo_h = Math.trunc(diferenca / 60)
            let tempo_jogo_min = diferenca % 60
            if (tempo_jogo_h < 0 && tempo_jogo_min < 0){
                return `A duração do jogo foi de ${Math.abs(tempo_jogo_h)} horas e ${Math.abs(tempo_jogo_min)} minutos, sendo finalizado no dia seguinte.`
            }else{
                return `A duração do jogo foi de ${tempo_jogo_h} horas e ${tempo_jogo_min} minutos, sendo finalizado no mesmo dia.`
            }
        }
        
        function cabecalho(){
            console.log('####### Q22.lista2 - Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é  composta por 2 variáveis inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos),  sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia seguinte. #######')
            console.log('-------------------')
        }
        
        main()