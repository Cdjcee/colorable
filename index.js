

//init_____________________________________________

widthCont = rangeContainer.offsetWidth
sizeCont = sizeContainer.offsetWidth
margin= rangeContainer.offsetLeft
step360=widthCont/360
step100=widthCont/100
color= "hsla(180deg, 50%, 50%, 100%)"

hueAngle = 180
satur=50
lumi=50
alph=100
nb= gradientNumber.value
nbC= chordsNumber.value
colorable="box"
hidden=1
rotation=1
document.querySelector(".formOp").addEventListener("change" , (e) => {
colorable = e.target.value

})
colorParameter()




