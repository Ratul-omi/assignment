function inputField(id){
    const inputValue = document.getElementById(id).value 
    const inputNum = parseFloat(inputValue);
    return inputNum
}

function textField(id){
    const textValue = document.getElementById(id).innerText    
    const textNum = parseFloat(textValue)
    return textNum
}


function showSection(id){
    document.getElementById('donate-part').classList.add('hidden')
    document.getElementById('history-part').classList.add('hidden')
   

    document.getElementById(id).classList.remove('hidden')
}

function showPopup(){
    
}