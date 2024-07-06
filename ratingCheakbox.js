
    
function rate(element, n) {
    let rating = element.closest('.rating');
    let stars = rating.getElementsByClassName('star');
    let output = rating.getElementsByClassName('output')[0];

    remove(stars);
    for (let i = 0; i < n; i++) {
        let cls;
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

function remove(stars) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star";
    }
}
    



cheakBox();
function cheakBox(){
    document.addEventListener("DOMContentLoaded", () => {
        const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
        const osCheckboxes = document.querySelectorAll('.os-checkbox');
        const memoryCheckboxes = document.querySelectorAll('.memory-checkbox');
        const priceSlider = document.getElementById('price-slider');
        const priceRangeDisplay = document.getElementById('price-range-display');
        
        function updateFilters() {
        const selectedBrands = [];
        brandCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedBrands.push(checkbox.parentElement.innerText.trim());
            }
        });
        
        const selectedOS = [];
        osCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedOS.push(checkbox.parentElement.innerText.trim());
            }
        });
        
        const selectedMemory = [];
        memoryCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedMemory.push(checkbox.parentElement.innerText.trim());
            }
        });
        
        console.log('Selected Brands:', selectedBrands);
        console.log('Selected OS:', selectedOS);
        console.log('Selected Memory:', selectedMemory);
        }
        
        brandCheckboxes.forEach(checkbox => checkbox.addEventListener('change', updateFilters));
        osCheckboxes.forEach(checkbox => checkbox.addEventListener('change', updateFilters));
        memoryCheckboxes.forEach(checkbox => checkbox.addEventListener('change', updateFilters));
        
        priceSlider.addEventListener('input', () => {
        priceRangeDisplay.innerText = `$${priceSlider.value}`;
        });
        });
    
}    


function alertMegs(){
    let returnOrder= document.querySelector('.Returns-order border').innerText= alert('this page not create yet!');
    let curtPage= document.querySelector('. cart').innerText= alert('this page not create yet!');
    
   
}

