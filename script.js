const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')
const body = document.body

function isLampBroken (){
  return lamp.src.indexOf ('quebrada') > -1
}


function lampOn (){
  if (!isLampBroken()){
  lamp.src = './img/ligada.jpg' 
  body.style.backgroundColor = 'white'
}
  
}


function lampOff (){
  if (!isLampBroken() ){
    lamp.src = './img/desligada.jpg'
    body.style.backgroundColor = 'black'
  }
}

function lampBroken (){
  lamp.src = './img/quebrada.jpg'
}

function lampOnOff (){
  if (turnOnOff.textContent === 'Ligar'){
    lampOn()
    turnOnOff.textContent = 'Desligar'
  }else {
    lampOff()
    turnOnOff.textContent = 'Ligar'
  }
}


turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('dblclick',lampBroken)