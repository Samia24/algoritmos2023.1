/*Q21.lista2 - Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.*/
        
        import { question } from "readline-sync"
        
        function main(){
            cabecalho()
        
            // Entrada
            const num = obter_numero('Informe um número com parte fracionária: ')
            
            // Processamento
            const result = resultado(num)
        
            //Saída
            console.log(`\n>>> O número ${num} arredondado é ${result}.`)
        }
        
        function obter_numero(descricao){
            const numero = Number(question(descricao))
            return numero
        }
        
        function resultado(num){
            let num_int = Math.trunc(num)
            let num_frac = num - num_int
            console.log(`\n-> O número inteiro é ${num_int} e sua parte fracionária é ${num_frac}.`)
            if(num_frac < 0.5){
                return num_int
            }else{
                num_int = num_int + 1
                return num_int
            }
        }
        
        function cabecalho(){
            console.log('####### Q21.lista2 - Realize arredondamentos de números utilizando a regra usual da matemática:  se a parte fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente  superior, caso contrario, é arredondado para o inteiro imediatamente inferior. #######')
            console.log('-------------------')
        }
        
        main()