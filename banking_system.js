const saldo = new BankAccount(0);

function updateSaldo() {
    document.getElementById("saldo").innerHTML = saldo.saldo;
}

async function tambahSaldo() {
    try {
        const tambah = window.prompt("Masukkan jumlah saldo yang ingin ditambahkan: ")
        if (tambah) {
            const depositMessage = await saldo.deposit(parseInt(tambah)); // Pakai await untuk menunggu hasil dari promise
            alert(depositMessage);
            updateSaldo();
        } else {
            alert("Masukkan nominal yang valid!");
        }
    } catch (error) {
        alert(error);
    }
}

async function kurangiSaldo() {
    try {
        const kurang = window.prompt("Masukkan jumlah saldo yang ingin dikurangkan: ")
        if (kurang) {
            const depositMessage = await saldo.withdraw(parseInt(kurang)); // Pakai await untuk menunggu hasil dari promise
            alert(depositMessage);
            updateSaldo();
        } else {
            alert("Masukkan nominal yang valid!");
        }
    } catch (error) {
        alert(error);
    }
}