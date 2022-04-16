alert("Insira o cartão")
let confCartao = confirm("Cartão inserido?")
let senha = prompt("Digite sua senha")

let saldoatual = 1000
let novoSaldo = saldoatual //novoSaldo é igual a saldo, porque o novo saldo ja é o saldo em seu inicio

let valor

function botao(num){
    valor = document.calc.visor.value = num;
}


function reseta() {
    document.calc.visor.value= '';
}

function anular() {
    document.calc.visor.value = '';
    alert("Programa encerrado, retire seu cartao")
}


function confirmar() {
    document.calc.visor.value = `Operacao confirmada.`
}

function depositar(num) {
    let deposito = document.calc.visor.value += num
    novoSaldo += parseInt(deposito) //novoSaldo soma o deposito e devolve em saldo, pq o novoSaldo é igual ao saldo... <o>jessussss

    document.calc.visor.value = `Confirma?`

    
}

function sacar(num) {
    let saque = document.calc.visor.value += num
    novoSaldo -= parseInt(saque)
    if (novoSaldo < 0) {
        alert("Saldo insuficiente, não é possivel completar o saque")
    } else {
        
        document.calc.visor.value = "Confirma?"
    }

}

function saldo() {
    document.calc.visor.value = novoSaldo.toLocaleString('pt-br')
}

