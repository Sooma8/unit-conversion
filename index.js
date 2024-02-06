const convertBtn = document.getElementById('convert-btn')


convertBtn.addEventListener('click', function(){
    
    const inputEl = document.getElementById('input-el').value
    const lengthResult = document.getElementById('length')
    const volumeResult = document.getElementById('volume')
    const massResult = document.getElementById('mass')


    lengthResult.textContent = inputEl + " metres " + " = " + (inputEl * 3.28).toFixed(2) + " feet"
                            + " | " + inputEl + " feet" + " = " + (inputEl / 3.28).toFixed(2) + " metres" 
                             

    volumeResult.textContent = inputEl + " litres" + " = " + (inputEl * 0.264).toFixed(2) + " gallons" 
                            + " | " + inputEl + " gallons " + " = " + (inputEl * 2.785).toFixed(2) + " litres"

    massResult.textContent = inputEl + " kilograms" + " = " + (inputEl * 2.204).toFixed(2) + " pounds" 
                            + " | " + inputEl + " pounds " + " = " + (inputEl / 2.205).toFixed(2) + " kilograms"   
    
})


