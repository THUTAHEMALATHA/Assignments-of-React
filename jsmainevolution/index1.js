function createBankAccount(){
    let balance =0;
    let history = [];

    function depoist(amount){
        if(amount <=0) return "Invalid deposit balance";
        balance +=amount;
        history.push({type : "deposit",amount});
        return balance;
            
    }
    function withdraw(amount){
        if(amount <=0)return "Invalid withdraw deposit";
        if(amount >balance) return "Insufficient-balance"
        balance -=amount;
        history.push({type : "withdraw",amount});
        return balance;

    }
    function getBalance(){
        return balance;
    }
    function getTransactionHistroy(){
        return history;
    }

    return { depoist, withdraw, getBalance, getTransactionHistroy};
}