
//login button event handler
const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('submit-area')
    loginArea.style.display='none';

    //Transaction area
    const TransactionArea =document.getElementById('transaction-area')
    TransactionArea.style.display='block';
});

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    const depositNumber = getInputNumber('depositAmount');

    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    
    // const currentDeposit  = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit =depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText=totalDeposit;

    // balance add
    updateSpanText('currentDeposit',depositNumber);
    updateSpanText('currentBalance',depositNumber);

    document.getElementById('depositAmount').value = "";
}); 
//withdraw and button handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
   const withdrawNumber = getInputNumber('withdrawAmount');

   updateSpanText('currentWithdraw', withdrawNumber);
   updateSpanText('currentBalance', -1 * withdrawNumber);

   document.getElementById("withdrawAmount").value = '';
})

function getInputNumber(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber =parseFloat(withdrawAmount);
    return withdrawNumber;
}

//deposit and balance
function updateSpanText(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber =parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}