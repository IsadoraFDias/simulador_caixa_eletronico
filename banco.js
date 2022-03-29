alert("Insira o cartão")
let confCartao = confirm("Cartão inserido?")
let senha = prompt("Digite sua senha")
let chEspecial = 300
let saldo = 1000
let novoSaldo = saldo

    for (let opcao = 1; opcao <= 3; opcao++) {

        do {
            opcao = prompt("O que deseja fazer?\n\n1- Depositar\n2- Sacar\n3- Ver saldo\n4- Sair ")
            switch (opcao) {
                case "1":
                    let deposito = prompt("Qual valor do deposito?")
                    confirm("Voce confirma o depósito de R$" + deposito + "?")
                    novoSaldo+= parseInt(deposito)
                    alert("Seu saldo atual é " + novoSaldo)
                    break;
                case "2":
                    let saque = prompt("Qual o valor do saque?")
                    confirm("Voce confirma o saque de R$" + saque + "?")
                    novoSaldo -=  parseInt(saque)
                    if (novoSaldo <-300) {
                        alert("Saldo insuficiente, não é possivel completar o saque")
                    }else if (novoSaldo <= -1){
                        alert("Voce entrará no saldo do cheque especial")
                        alert("Seu saldo atual é " + novoSaldo)
                    }else{
                    alert("Seu saldo atual é " + novoSaldo)}
                    break;
                case "3":
                    alert("Seu saldo atual é R$" + novoSaldo +"\nValor do cheque especial é R$ "+chEspecial)
                    break;
                case "4":
                    alert("Programa encerrado")
                    break;
                default:
                    break;
            }
        } while (opcao != 4)
    }
