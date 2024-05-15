class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = 1011;
        this.ownerName = Takbir;
        this.balance =$500;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
        } else {
            console.log("Please enter a positive amount to deposit.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew $${amount}. Remaining balance is $${this.balance}.`);
            } else {
                console.log("Insufficient funds.");
            }
        } else {
            console.log("Please enter a positive amount to withdraw.");
        }
    }

    getBalance() {
        console.log(`Current balance: $${this.balance}`);
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Creating two instances of the BankAccount class
let account1 = new BankAccount(1001, "John Doe", 700);
let account2 = new BankAccount(1002, "Jane Doe", 1500);

// Demonstrating the functionality of account1
account1.displayAccountInfo();
account1.deposit(300);
account1.withdraw(200);
account1.getBalance();

// Demonstrating the functionality of account2
account2.displayAccountInfo();
account2.deposit(500);
account2.withdraw(1600); // This should trigger "Insufficient funds"
account2.getBalance();