const sliders = document.querySelectorAll('.form__input-slider');

let fillColor = "#B5A08D",
    emptyColor = "transparent";

sliders.forEach(el => {
    el.addEventListener("input", (event) => {
        const tempSliderValue = event.target.value; 
        
        el.parentElement.querySelectorAll('input')[0].textContent = tempSliderValue;
        
        const progress = (100 * (el.value - el.min)) / (el.max - el.min) + "%"
       

        el.style.backgroundImage = `linear-gradient( to right, ${fillColor}, 
            ${fillColor} ${progress}, ${emptyColor} ${progress})`;
        el.style.background = `linear-gradient(to right, #B5A08D ${progress}%, transparent ${progress}%)`;
      })
      el.dispatchEvent(new Event('input'));
})

// замучилась со слайдером, через css только не получилось. Взяла решение из интернета, немного переделала под этот случай