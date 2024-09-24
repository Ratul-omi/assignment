document.getElementById('donate-btn').addEventListener('click', function (event){
    event.preventDefault();
    const mainBalance = textField('main-balance');
    const donateMoney = inputField('donate-money');
    if (typeof donateMoney == "number" && isNaN(donateMoney) == false && 0 <= donateMoney && donateMoney <= mainBalance) {
        const newBalance = mainBalance - donateMoney
        document.getElementById('main-balance').innerText = newBalance;
        return
    }
    // else{
    //     alert('Insufficient Balance')
    // }
})
// second part
document.getElementById('donate-btn-2').addEventListener('click', function (event){
    event.preventDefault();
    const mainBalance = textField('main-balance');
    const donateMoneyTwo = inputField('donate-money-2');
    if (typeof donateMoneyTwo == "number" && isNaN(donateMoneyTwo) == false && 0 <= donateMoneyTwo && donateMoneyTwo <= mainBalance) {
        const newBalance = mainBalance - donateMoneyTwo
        document.getElementById('main-balance').innerText = newBalance;
        
    }
})
// Third part
document.getElementById('donate-btn-3').addEventListener('click', function (event){
    event.preventDefault();
    const mainBalance = textField('main-balance');
    const donateMoneyThree = inputField('donate-money-3');
    if (typeof donateMoneyThree == "number" && isNaN(donateMoneyThree) == false && 0 <= donateMoneyThree && donateMoneyThree <= mainBalance) {
        const newBalance = mainBalance - donateMoneyThree
        document.getElementById('main-balance').innerText = newBalance;
        
    }
})
