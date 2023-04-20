
///Chords Event///////////////////////////////////////
chordsNumber.addEventListener("mousemove", () => {
    chordsNumberX.innerHTML=chordsNumber.value
    })
    chordsNumber.addEventListener("click", () => {
        chordsNumberX.innerHTML=chordsNumber.value
    })
    limit.addEventListener("mousemove", () => {
        limitNumberX.innerHTML=limit.value+"°"
    })
    limit.addEventListener("click", () => {
        limitNumberX.innerHTML=limit.value+"°"
    })
///tactil screen 
chordsNumber.addEventListener("touchmove", () => {
    chordsNumberX.innerHTML=chordsNumber.value
})
limit.addEventListener("touchmove", () => {
    limitNumberX.innerHTML=limit.value+"°"
})

    chordsBtn.addEventListener("click" , () =>{
    o=2
    nbC= chordsNumber.value
    limitAngle=limit.value
    rotation=rotation
  
        showChords(nbC,o,limitAngle)

    
    })
    hueRotationX.addEventListener("click" , () =>{
        o=2
        nbC= chordsNumber.value
        limitAngle=limit.value
        rotation=-1
        
            showChords(nbC,o,limitAngle,rotation)
        
        })
        hueRotationY.addEventListener("click" , () =>{
            o=2
            nbC= chordsNumber.value
            limitAngle=limit.value
            rotation=1
            
                showChords(nbC,o,limitAngle,rotation)
            
            })
    chordsBtnSym.addEventListener("click" , () =>{
    o=3 
    nbC= chordsNumber.value
    
        showChords(nbC,o)
        })

///Gradients ///////////////////////////////////////////////
gradientNumber.addEventListener("mousemove", () => {
gradientNumberX.innerHTML=gradientNumber.value
})
gradientNumber.addEventListener("click", () => {
    gradientNumberX.innerHTML=gradientNumber.value
    })
    //for tactil screen
    gradientNumber.addEventListener("touchmove", () => {
        gradientNumberX.innerHTML=gradientNumber.value
        })
gradientBtn.addEventListener("click" , () =>{
o=1
nb=gradientNumber.value

    showGradient(nb,o)

})
gradientBtnLight.addEventListener("click" , () =>{
o=0  
nb=gradientNumber.value

    showGradient(nb,o)
    })


//DELETE______________________________________________
deleteGradient.addEventListener("click" , () =>{
    gradientContainer.innerHTML = ("")
})
deletePallet.addEventListener("click" , () =>{
   historyContainer.innerHTML = ("")
   exportColors=''
   exportPallet.value=''
})
deleteChords.addEventListener("click" , () =>{
    chordsContainer.innerHTML = ("")
 })

 deleteCharter.addEventListener("click" , () =>{
    boxModel.forEach((box) => {
   box.style.background="#fff"
    })

    textBoxAll.forEach((textBox) => {
        textBox.style.color="#ccc"
        
    })
    
    colorableContainer.style.background="#eee"
   
    
 })



// Accordion menu utilty++++++++++++++++++++++++++++++++++++++++++++++
 showColorpicker.addEventListener("click" , () =>{
    sizeContainer.classList.toggle("visibility")  
    imgColorPicker.classList.toggle("liRotation")  
   
    hidden+=1//resizing utility when the menu state is "none"
    if (hidden%2){
        colorParameter()
        hiddden=1
    }
})
colorOptions.addEventListener("click", () =>{
   options.classList.toggle("visibility")  
   imgColorOptions.classList.toggle("liRotation")  
})   
pallet.addEventListener("click", () =>{
    historyContainer.classList.toggle("visibility")  
    palletTool.classList.toggle("visibility")
    imgPallet.classList.toggle("liRotation")  
 })  
 gradient.addEventListener("click", () =>{
    gradientContainerTool.classList.toggle("visibility")
    gradientContainer.classList.toggle("visibility")  
    imgGradient.classList.toggle("liRotation")  
 })  
 chords.addEventListener("click", () =>{
    chordsContainerTool.classList.toggle("visibility")
    chordsContainer.classList.toggle("visibility")  
    imgChords.classList.toggle("liRotation")  
 }) 
 charter.addEventListener("click", () =>{
    charterContainer.classList.toggle("visibility")
    imgCharter.classList.toggle("liRotation")  
 }) 
 //Export utility
 exportPalletIcon.addEventListener("click", () =>{
    exportTool.classList.toggle("visibility")
    }) 

    exportPalletBtn.addEventListener("click", () =>{

        exportPallet.select()



        }) 

// Resize window event 
window.addEventListener("resize", () => {
    colorParameter()
    }
    ) 
//Click in Colors palette Event
historyContainer.addEventListener ("click" , (e) => {
colorID = e.target.id.split(',')
    palletEvent()
})

gradientContainer.addEventListener ("click" , (e) => {
colorID = e.target.id.split(',')
    palletEvent()
})

chordsContainer.addEventListener ("click" , (e) => {
    colorID = e.target.id.split(',')
        palletEvent()
    })
 
//Colorable boxes ___________________________________________
boxModel.forEach((box) => {
    box.addEventListener("click" , () =>{
    
      if(colorable=='box') {return box.style.background = color}

 })
 }) 
 textBoxAll.forEach((boxText) => {
    boxText.addEventListener("click" , (e) =>{
     

     if(colorable=='text'){return e.target.style.color = color}
  

 })
 }) 

 boxContainer.forEach((container) => {
    container.addEventListener("click" , () =>{
     

     if(colorable=='text'){return container.style.color = color}
      if(colorable=='container') {return container.style.background = color}

 })
 }) 
  
// Color picker events _______________________________________
    rangeContainer.addEventListener("click" , (e) => {
    
    hueAngle = Math.round(e.offsetX/step360)
    range.style.left = hueAngle*step360+"px"
    printColor()
    degradContainer()
   
})



rangeSaturation.addEventListener("click" , (e) => {
    
    
    satur = Math.round(e.offsetX/step100 )
    rangeSat.style.left = satur*step100+"px"
    printColor()
    degradContainer()
    
})


rangeLuminosity.addEventListener("click" , (e) => {
    
   
    lumi = Math.round(e.offsetX/step100 )
    rangeLum.style.left = lumi*step100+"px"
    printColor()
    degradContainer()
})



rangeAlpha.addEventListener("click" , (e) => {
    
    
    alph = Math.round(e.offsetX/step100 )
    rangeAlp.style.left = alph*step100+"px"
    printColor()
    degradContainer()
  
}) 
//Color transform events ____________________________________
invertHSL.addEventListener("click", () => {
    invertH()
    invertL()
    printColor()
    degradContainer()
 })
 onlyH.addEventListener("click", () => {
     invertH()
     printColor()
     degradContainer()
 })
 onlyS.addEventListener("click", () => {
    invertS()
    printColor()
    degradContainer()
})
onlyL.addEventListener("click", () => {
    invertL()
    printColor()
    degradContainer()
})
mediumAlpha.addEventListener("click", () => {
    medium_alpha()
    printColor()
    degradContainer()

})
alphaNone.addEventListener("click", () => {
    alpha_none()
    printColor()
    degradContainer()

})

sameGray.addEventListener("click", () => {
    sameGrayLevel()
    printColor()
    degradContainer()
})
pureColor.addEventListener("click", () => {
    pureColorSaturation()
    printColor()
    degradContainer()
})
medium_LS.addEventListener("click", () => {
    mediumLS()
    printColor()
    degradContainer()
})
medium_Gray.addEventListener("click", () => {
    mediumGray()
    printColor()
    degradContainer()
})
black.addEventListener("click", () => {
    _black()
    printColor()
    degradContainer()
})
white.addEventListener("click", () => {
    _white()
    printColor()
    degradContainer()
})
lambda.addEventListener("click", () => {
    _lambda()
    printColor()
    degradContainer()
})

