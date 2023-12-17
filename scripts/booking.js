/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dayCounter = 0;
let costPerDay = 0;
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const clearDays = document.getElementById("clear-button");
const cost = document.getElementById("calculated-cost");
const half = document.getElementById("half");
const full = document.getElementById("full");
full.classList.remove('clicked');
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


monday.addEventListener("click", function() {
    if (!monday.classList.contains('clicked')) {
        monday.classList.add('clicked');
        dayCounter += 1;
        console.log(dayCounter);
        calculate(dayCounter, costPerDay);
    } else {
        dayCounter -= 1;
        console.log(dayCounter);
        monday.classList.remove('clicked');
        calculate(dayCounter, costPerDay);
    } 
});

tuesday.addEventListener("click", function() {
    if (!tuesday.classList.contains('clicked')) {
        tuesday.classList.add('clicked');
        dayCounter += 1;
        console.log(dayCounter);
        calculate(dayCounter, costPerDay);
    } else {
        dayCounter -= 1;
        console.log(dayCounter);
        tuesday.classList.remove('clicked');
        calculate(dayCounter, costPerDay);
    } 
});

wednesday.addEventListener("click", function() {
    if (!wednesday.classList.contains('clicked')) {
        wednesday.classList.add('clicked');
        dayCounter += 1;
        console.log(dayCounter);
        calculate(dayCounter, costPerDay);
    } else {
        dayCounter -= 1;
        console.log(dayCounter);
        wednesday.classList.remove('clicked');
        calculate(dayCounter, costPerDay);
    } 
});

thursday.addEventListener("click", function() {
    if (!thursday.classList.contains('clicked')) {
        thursday.classList.add('clicked');
        dayCounter += 1;
        console.log(dayCounter);
        calculate(dayCounter, costPerDay);
    } else {
        dayCounter -= 1;
        console.log(dayCounter);
        thursday.classList.remove('clicked');
        calculate(dayCounter, costPerDay);
    } 
});

friday.addEventListener("click", function() {
    if (!friday.classList.contains('clicked')) {
        friday.classList.add('clicked');
        dayCounter += 1;
        console.log(dayCounter);
        calculate(dayCounter, costPerDay);
    } else {
        dayCounter -= 1;
        console.log(dayCounter);
        friday.classList.remove('clicked');
        calculate(dayCounter, costPerDay); 
    } 
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearDays.addEventListener("click", function() {
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    dayCounter = 0;
    cost.innerHTML = 0;
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.addEventListener("click", function() {
    costPerDay = 20;
    half.classList.add("clicked");
    full.classList.remove("clicked");
    calculate(dayCounter, costPerDay);
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", function() {
    costPerDay = 35;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    calculate(dayCounter, costPerDay);
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(days, dailyCost) {
    cost.innerHTML = days * dailyCost;
}
