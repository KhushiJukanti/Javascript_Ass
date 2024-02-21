class BankAccount{
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit(amount){
        if(amount>0){
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`)
        }else{
            console.log('invalid deposit amount')
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount
            console.log(`withdraw ${amount}, New balance:${this.balance}`)
        }else{
            console.log('Invalid withDrawal amout or insufficient balance')
        }
    }
    getBalance(){
        return this.balance;
    }
}
let account = new BankAccount('123456789',1000)
account.deposit(5000)
account.withdraw(2000)
console.log(account.getBalance())