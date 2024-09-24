// donate from donate button plus it in the balance

document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoney = inputField('donate-money');
    const donateBalance = textField('donate-balance');
    const mainBalance = textField('main-balance');
    if (typeof donateMoney == "number" && isNaN(donateMoney) == false && 0 <= donateMoney && donateMoney <= mainBalance) {
        const newBalance = donateMoney + donateBalance
        document.getElementById('donate-balance').innerText = newBalance;
        // history part
        const div = document.createElement('div')
        let currentTime = new Date()
        div.innerHTML = `
            <div class="px-4 py-2 border-2 rounded-lg"
            <h4 class="text-2xl font-black text-black"> ${donateMoney} Taka is Donated for Flood relief at Noakhali</h4>
            <p>Date : ${currentTime.toLocaleString()}
            </div>
            `
        document.getElementById('history-part').appendChild(div)
        // costomized popup
        const popUp = document.getElementById('my_modal_4')
        popUp.showModal();
    }
    else {
        alert('Insufficiant Balance')
    }
})

// second part
document.getElementById('donate-btn-2').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoneyTwo = inputField('donate-money-2');
    const mainBalance = textField('main-balance');
    const donateBalanceTwo = textField('donate-balance-2');
    if (typeof donateMoneyTwo == "number" && isNaN(donateMoneyTwo) == false && 0 <= donateMoneyTwo && donateMoneyTwo <= mainBalance) {
        const newBalance = donateMoneyTwo + donateBalanceTwo
        document.getElementById('donate-balance-2').innerText = newBalance;
        // history part
        const div = document.createElement('div')
        let currentTime = new Date()
        div.innerHTML = `
            <div class="px-4 py-2 border-2 rounded-lg"
            <h4 class="text-2xl font-black text-black"> ${donateMoneyTwo} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
            <p>Date : ${currentTime.toLocaleString()}
            </div>
            `
        document.getElementById('history-part').appendChild(div)
        // costomized popup
        const popUp = document.getElementById('my_modal_4')
        popUp.showModal();
    }
    else {
        alert('Insufficiant Balance')
    }
})
// third part
document.getElementById('donate-btn-3').addEventListener('click', function (event) {
    event.preventDefault();
    const donateMoneyThree = inputField('donate-money-3');
    const donateBalanceThree = textField('donate-balance-3');
    const mainBalance = textField('main-balance');
    if (typeof donateMoneyThree == "number" && isNaN(donateMoneyThree) == false && 0 <= donateMoneyThree && donateMoneyThree <= mainBalance) {
        const newBalance = donateMoneyThree + donateBalanceThree
        document.getElementById('donate-balance-3').innerText = newBalance;
        // history part
        const div = document.createElement('div')
        let currentTime = new Date()
        div.innerHTML = `
            <div class="px-4 py-2 border-2 rounded-lg"
            <h4 class="text-2xl font-bold text-black"> ${donateMoneyThree} Taka is Donated for Aid for Injured in the Quota Movement</h4>
            <p>Date : ${currentTime.toLocaleString()}
            </div>
            `
        document.getElementById('history-part').appendChild(div)
        // costomized popup
        const popUp = document.getElementById('my_modal_4')
        popUp.showModal();
    }
    else {
        alert('Insufficiant Balance')
    }
})