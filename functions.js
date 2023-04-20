//_Add Colors______________________________________________
function printColor()
{
    exportPallet.value += color+' + '

    color = "hsla("+hueAngle+"deg, "+satur+"%, "+lumi+"%, "+alph+"%)"
    historyContainer.insertAdjacentHTML("beforeend",
    `<div class="historyNuancer" style ="background:${color}" 
    id="${hueAngle},${satur},${lumi},${alph}">
    </div>`
    )
    hslaName.innerHTML = `<span class="textInfo">HSLA: ${hueAngle}deg ${satur}% ${lumi}% ${alph}%</span>
    <br><div style ="background:${color}" class="colorSelected"><span style="color:#FFF">##</span>##</div>`
title_one.innerHTML = `HSLa: ${hueAngle}deg ${satur}% ${lumi}% ${alph}%`
} 



//color transformation Functions_____________________________ 

function invertH(){
    if (hueAngle < 180){hueAngle = hueAngle +180}
    else{hueAngle = hueAngle - 180}
    range.style.left = hueAngle*step360+"px"
    } 
   function invertS(){
    satur=100-satur
    rangeSat.style.left = satur*step100+"px"
}
function invertL(){
    lumi=100-lumi
    rangeLum.style.left =lumi*step100+"px"
}
function medium_alpha(){
    alph=50
    rangeAlp.style.left =alph*step100+"px"
}
function alpha_none(){
    alph=100
    rangeAlp.style.left =alph*step100+"px"
}
     /**/
function sameGrayLevel(){
    satur=0
    rangeSat.style.left =satur*step100+"px"
}
function pureColorSaturation(){
    satur=100
    rangeSat.style.left = satur*step100+"px"  
}
function mediumLS(){
    satur=50
    lumi=50
    rangeSat.style.left = satur*step100+"px" 
    rangeLum.style.left = lumi*step100+"px"
}
function mediumGray(){
    satur=0
    lumi=50
   
    rangeSat.style.left = satur*step100+"px"
    rangeLum.style.left = lumi*step100+"px"
}
function _black(){
    lumi=0 
    alph=100
    rangeLum.style.left =lumi*step100+"px"
    rangeAlp.style.left = alph*step100+"px"
}
function _white(){
    lumi=100 
    alph=100
    rangeLum.style.left = lumi*step100+"px"
    rangeAlp.style.left = alph*step100+"px"
}
function _lambda(){
    lumi=Math.floor(Math.random() * 101);
    satur=Math.floor(Math.random() * 101);
    hueAngle=Math.floor(Math.random() * 360);
    rangeLum.style.left = lumi*step100+"px"
    rangeSat.style.left = satur*step100+"px"
    range.style.left = hueAngle*step360+"px"
}

//Chords_________________________________________________

function showChords(){
CorlorString = `${hueAngle}`
stepColor = parseInt(CorlorString);
affHue=hueAngle
    
if (o==2){stepHue=parseInt(limitAngle);rotation=parseInt(rotation)}
if (o==3){stepHue =360/nbC;rotation=1}
max= 360
nbC++
for (let i =1; i < nbC; i++) {
         affHue = (i*stepHue)+(stepColor)*rotation
        if(affHue<stepHue*nbC && rotation==-1){affHue=max-affHue} //Born
        if(affHue<0){affHue=max+affHue*-1}//Born <0
        if(affHue>360){affHue-=max}//Born <360

    affHue=Math.round(affHue)
    chordsColor =  `hsla(${affHue}deg, ${satur}%, ${lumi}%, ${alph}%)`
    
        chordsContainer.insertAdjacentHTML('beforeend',
        `<div class="historyNuancer historyGradient" style ="background:${chordsColor}" 
        id="${affHue},${satur},${lumi},${alph}">
       ${affHue}° </div>`
        
        )
      }
    }

//gradients______________________________

function showGradient(nb,o){
stepLum = 100/nb
affLum=lumi
x=stepLum*lumi/100
max=100
if (o==0) {max = 100} 
if (o==1){ 
    max=0
    x=x*-1}

for (let i =0; i < nb; i++) {
  
    affLum = max- (i*x)
    
affLum=Math.round(affLum)
gradientColor =  `hsla(${hueAngle}deg, ${satur}%, ${affLum}%, ${alph}%)`

    gradientContainer.insertAdjacentHTML('afterbegin',
    `<div class="historyNuancer historyGradient" style ="background:${gradientColor}" 
    id="${hueAngle},${satur},${affLum},${alph}">
   ${affLum}% </div>`
    
    )
  }
}
//Gradients off HSL TOOL PICKER ___________________________________
function degradContainer(){
    rangeSaturation.style.background = "linear-gradient(to right, hsl(" + hueAngle + "deg, 0%, 50%), hsl("+ hueAngle + "deg, 100%, 50%)"
    rangeLuminosity.style.background = "linear-gradient(to right, hsl(" + hueAngle + "deg, 50%, 0%), hsl(" + hueAngle + "deg, 50%, 50%), hsl("+ hueAngle + "deg, 50%, 100%)"
    
}
    
 //OUTPUT for cursors repositionables
    function colorParameter()
    {   
        widthCont = rangeContainer.offsetWidth  
        step360=widthCont/360
        step100=widthCont/100
    range.style.left = hueAngle*step360+"px"
    rangeSat.style.left = satur*step100+"px" 
    rangeLum.style.left = lumi*step100+"px"
    rangeAlp.style.left = alph*step100+"px"
    
    }

    //
    function palletEvent(){
        if (colorID[0]  != "")
         {
            
                hueAngle = colorID[0]
                satur= colorID[1]
                lumi= colorID[2]
                alph= colorID[3]
                color = "hsla("+hueAngle+"deg, "+satur+"%, "+lumi+"%, "+alph+"%)"
                title_one.innerHTML = `HSLa: ${hueAngle}deg ${satur}% ${lumi}% ${alph}%`
                hslaName.innerHTML = `<span class="textInfo">HSLA: ${hueAngle}deg ${satur}% ${lumi}% ${alph}%</span>
                <div style ="background:${color}" class="colorSelected"><span style="color:#FFF">##</span>##</div>`
            
            
            degradContainer()
            colorParameter()
        
        }
        } 
      