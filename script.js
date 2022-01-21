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


const activityItems = document.querySelector("#activities");
const activityPrice = document.querySelector('#activities-cost');
let totalPrice = 0;

/* Adds total cost of the selected workshops */

activityItems.addEventListener('change', e => {
    let workshopCost = +e.target.getAttribute('data-cost');

    e.target.checked ? (totalPrice += workshopCost) : (totalPrice -=  workshopCost)


    activityPrice.innerText = `Total: $${totalPrice}`;

});

/* Variables for Payment Info section */

const paymentMethod = document.querySelector('#payment');
const paymentMethodMenu = document.querySelector('#payment')
const paymentOptCC = document.querySelector('#credit-card');
const paymentOptPayPal = document.querySelector('#paypal');
const paymentOptBitCoin = document.querySelector('#bitcoin');



/* Hides Paypal and Bitcoin payment box options on page load */
paymentMethod.value = 'credit-card';
paymentOptPayPal.style.display = 'none';
paymentOptBitCoin.style.display = 'none';


/* Displays payment options based on selected choice */
paymentMethodMenu.addEventListener('change', e => {

    paymentMethod.value = e.target.value;


    if (paymentMethod.value === 'credit-card') {

        paymentOptCC.style.display = 'block';
        paymentOptBitCoin.style.display = 'none';
        paymentOptPayPal.style.display = 'none';

    }

   
    if (paymentMethod.value === 'paypal') {

        paymentOptPayPal.style.display = 'block';
        paymentOptCC.style.display = 'none';
        paymentOptBitCoin.style.display = 'none';
    

    }

    if (paymentMethod.value === 'bitcoin') {

        paymentOptBitCoin.style.display = 'block';
        paymentOptPayPal.style.display = 'none';
        paymentOptCC.style.display = 'none';

    }

});

/* Variables for Payment Info section */
