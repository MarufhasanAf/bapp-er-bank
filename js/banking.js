// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const depositNewAmountText = depositInput.value;
    const depositNewAmount = parseFloat(depositNewAmountText);

    // update deposite total 
    const depositTotal = document.getElementById('deposit-total');
    const depositCurrentAmountText = depositTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentAmountText);
    const depositTotalBalance = depositCurrentAmount + depositNewAmount;
    depositTotal.innerText = depositTotalBalance;

    // update account balance  
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previousTotalBalance + depositNewAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deopsit input field 
    depositInput.value = '';
})


// handle withdraw button event handeler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get the amount withdraw
    const withdrawAmount = document.getElementById('withdraw-input')
    const withdrawNewAmount = parseFloat(withdrawAmount.value);

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawCurrentTotal = parseFloat(withdrawTotal.innerText);
    const withdrawNewTotal = withdrawCurrentTotal + withdrawNewAmount;
    withdrawTotal.innerText = withdrawNewTotal;

    // update account balance 
    const balanceTotal = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousTotalBalance - withdrawNewAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the withdraw input field 
    withdrawAmount.value = '';
})