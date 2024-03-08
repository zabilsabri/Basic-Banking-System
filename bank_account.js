class BankAccount {

    constructor(saldo){
        this.saldo = saldo;
    }

    deposit(amount){
        return new Promise((resolve, reject) => {
            if(amount != null && amount != "" && Number.isInteger(parseInt(amount))){
                const currentSaldo = this.saldo += parseInt(amount)
                setTimeout(() => {
                    resolve("Saldo berhasil ditambah menjadi Rp." + currentSaldo)
                }, 2000);         
            } else {
                setTimeout(() => {
                    reject("Input tidak valid");
                }, 1000);
            }
        })
    }

    withdraw(amount){
        return new Promise((resolve, reject) => {
            if(amount != null && amount != "" && Number.isInteger(parseInt(amount))){
                if (parseInt(amount) > this.saldo) {
                    setTimeout(() => {
                        reject("Saldo tidak mencukupi")
                    }, 1000);
                } else {
                    const currentSaldo = this.saldo -= parseInt(amount)
                    setTimeout(() => {
                        resolve("Saldo berhasil dikurangkan menjadi Rp." + currentSaldo)
                    }, 2000);
                }
            } else {
                setTimeout(() => {
                    reject("Input tidak valid");
                }, 1000);
            }
        })
    }
}