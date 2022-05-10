/*Atividade- Conta bancária- simula a criação de diversos tipos de contas bancárias e operações disponíveis em cda uma*/

class contaBancaria {
    constructor(agencia , numero, tipo){
        this.agencia = agencia;
        this.numero= numero;
        this.tipo= tipo;
        this._saldo= 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        
        if (valor <= this._saldo){
            this._saldo = this._saldo - valor;
        } else return "Saldo insuficiente";

        return this._saldo;

    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class contaPoupanca extends contaBancaria {
    constructor(agencia , numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria{
        constructor(agencia , numero, saldo){
            super(agencia, numero, saldo);
            this.tipo = 'universitaria';  
        }
        sacar(valor){
            if(valor > 500){
                return "Operação negada"
            } 
            this._saldo = this._saldo - valor;
            return this._saldo;

        }
    }