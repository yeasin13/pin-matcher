function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        console
        return getPin;
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById('display-input').value = pin;
}