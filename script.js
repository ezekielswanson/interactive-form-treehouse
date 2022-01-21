/* Variables for the basic info section */

const nameFocus = document.getElementById('name');

/* Variables for the Job Role section */

const jobRole = document.getElementById('title');
const otherJobRoleInpt = document.querySelector('.other-job-role')


/* Variables for the T-Shirt Info section */

const shirtDesign = document.querySelector('#design');
const tShirtColor = document.querySelector('#color');










nameFocus.focus();

/* This function displays the other job role input if other is selected */
otherJobRoleInpt.style.display = 'none';
    
/* This function displays the other job role input if other is selected */
jobRole.addEventListener('change', e => {
    if (e.target.value = 'other')  {
        otherJobRoleInpt.style.display = 'block';
    }
});


/* Disables Color input on page load*/

tShirtColor[0].disabled = true;



/* This function enables the color input once a t shirt design is selected */

shirtDesign.addEventListener('change', (e) => {
    tShirtColor[0].disabled = false;
    const tShirtColorOpt = tShirtColor.children;

    for (let i = 0; i < tShirtColorOpt.length; i++) {
        tShirtOptValue = e.target.value;
        tShirtTheme = tShirtColorOpt[i].getAttribute('data-theme');

        if (tShirtOptValue ===  tShirtTheme) {
            tShirtColorOpt[i].hidden = false;
        }

        else {
            tShirtColorOpt[i].hidden = true;
        }

    }
    
});




/* Variables for the Register for activities section section */

/* The total cost of the selected activities in the "Register for Activities" 
section should be totaled and displayed for the user.

steps
1. crt var register for actv 
and act cost

2. set var for total price = 0

3. add event list on reg for actve element 
inside the element 
-create a var that holds the value of the price of the activity cost 
this This will provide the cost of the activity that was just clicked.

5. inside the event listener, create a conditional 
to determine if the event.target was just checked or unchecked.



*/

const activityItems = document.querySelector("#activities");
const activityPrice = document.querySelector('#activities-cost');
let totalPrice = 0;


activityItems.addEventListener('change', e => {
    let workshopCost = +e.target.getAttribute('data-cost');

    e.target.checked ?  (workshopCost += totalPrice) : (totalPrice -=  workshopCost)


    activityPrice.innerText = `Total: $${totalPrice}`;


});