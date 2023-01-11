

// Task 1. Design a bank application, using closures.

function createBankAccount(name){
    let balance = 10000;
    console.log("Hi, " + name + ". You have " + balance + " left in your Bank account.");  
    function depositAmount(amount){
        balance = balance + amount;
        console.log("You deposited " + amount + " in your Bank Account and the new balance on your account is " + balance);     
    }
    function withdrawnAmount(amount1){        
        if(amount1 > balance){
            console.log("Not possible to withdraw " + amount1)
        }
        else if(amount1 <= balance){
            console.log("Successfully withdrawn " + amount1)
        } 
        else {
            console.log("Type again!")
        }
        balance = balance - amount1;              
    }
    function checkBalance(amount2){
        amount2 = balance;
        console.log("Balance check " + amount2)
    }
    return {
        depositAmount,
        withdrawnAmount,
        checkBalance
    };
}
const x = createBankAccount("David");
x.depositAmount(8000);
x.withdrawnAmount(17999);
x.checkBalance();


