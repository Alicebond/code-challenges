/*

Instructions

Simulate a bank account supporting opening/closing, withdrawals, and deposits of money. Watch out for concurrent transactions!

A bank account can be accessed in multiple ways. Clients can make deposits and withdrawals using the internet, mobile phones, etc. Shops can charge against the account.

Create an account that can be accessed from multiple threads/processes (terminology depends on your programming language).

It should be possible to close an account; operations against a closed account must fail.

*/

export class BankAccount {
  constructor() {
    this.isActive = false;
    this.accountBalance = 0;
  }

  open() {
    if (!this.isActive) this.isActive = true;
    else throw new ValueError();
    this.accountBalance = 0;
  }

  close() {
    if (this.isActive) this.isActive = false;
    else throw new ValueError();
  }

  deposit(num) {
    if (this.isActive && num >= 0) this.accountBalance += num;
    else throw new ValueError();
  }

  withdraw(num) {
    if (this.isActive && this.accountBalance >= num && num >= 0)
      this.accountBalance -= num;
    else throw new ValueError();
  }

  get balance() {
    if (!this.isActive) throw new ValueError();
    return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
