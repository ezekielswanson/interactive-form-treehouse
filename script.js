/* Variables for the basic info section */

const nameField = document.getElementById('name');

/* Variables for the Job Role section */

const jobRole = document.getElementById('title');
const otherJobRoleInpt = document.querySelector('.other-job-role')


/* Variables for the T-Shirt Info section */

const shirtDesign = document.querySelector('#design');
const tShirtColor = document.querySelector('#color');




nameField.focus();

/* This function displays the other job role input if other is selected */
otherJobRoleInpt.style.display = 'none';
    
/* This function displays the other job role input if other is selected */


jobRole.addEventListener('change', e => {
    if (e.target.value === 'other')  {
        otherJobRoleInpt.style.display = 'block';
    }
});


/* Disables Color input on page load*/

tShirtColor.disabled = true;



/* This function enables the color input once a t shirt design is selected */

shirtDesign.addEventListener('change', (e) => {
    tShirtColor.disabled = false;
    const tShirtColorOpt = tShirtColor.children;

    for (let i = 0; i < tShirtColorOpt.length; i++) {
        tShirtOptValue = e.target.value;
        tShirtTheme = tShirtColorOpt[i].getAttribute('data-theme');


        if (tShirtOptValue ===  tShirtTheme) {
            tShirtColorOpt[i].hidden = false;
            tShirtColorOpt[i].setAttribute('selected', true);
        }

        else {
            tShirtColorOpt[i].hidden = true;
            tShirtColorOpt[i].setAttribute('selected');

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

/* Variables for form validation */


const email = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cv = document.querySelector('#cvv');
const form = document.querySelector("form");



/* Functions For Form Validation */

function nameValidator () {
    const nameInput =  nameField.value;
    return /^[a-zA-Z]+\s?[a-zA-z]+?\s?[a-zA-z]+?$/.test(nameInput);

}

function emailValidator () {

    const emailInput = email.value;
    if (emailInput === '' ) {
        return  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(emailInput);
    }


}

function activitiesValidator () {
    const selectedActivites = activitiesTotal > 0;
    return selectedActivites;
}

function ccValidator () {

    const ccInput = cardNumber.value;
    return /^\d{13,16}$/.test(ccInput);


}

function zipValidator () {
    const zipInput = zip.value;
    return /^\d{5}$/.test(zipInput);

}

function cvValidator () {
    const cvInput = cv.value;
    return /^\d{3}$/.test(cvValidator);

}


/* Validates form field on submission */



form.addEventListener('submit', e => {

    if(!nameValidator(nameInput)); {

        e.preventDefault();
        alert('Input is invalid');
    }

    if(!emailValidator(emailInput)); {

        e.preventDefault();
        alert('Input is invalid');
    }

    if(!activitiesValidator(selectedActivites)); {

        e.preventDefault();
        alert('Input is invalid');
    }

    if(!zipValidator(zipInput)); {

        e.preventDefault();
        alert('Input is invalid');
    }

    if(! ccValidator(ccInput)); {

        e.preventDefault();
        alert('Input is invalid');
    }

    if(! cvValidator(cvInput)); {

        e.preventDefault();
        alert('Input is invalid');
    }


});



/* Variables for Activities error messages */

const checkBox = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkBox.length; i++ ) {
    checkBox[i].addEventListener('focus', e => {
        const checkBoxFocus = e.target.parentNode;
        checkBoxFocus.classList.add('focus');


    });

    checkBox[i].addEventListener('blur', e => {

        const checkBoxBlur = e.target.parentNode;
        checkBoxBlur.classList.remove('focus');

    });

}



/* Variables for form error messages */

/* add form inputs validation */

function makeInvalid (element) {

    element.parentNode.classList.add('not-valid');
    element.parentNode.classList.remove('valid');
    element.parentNode.lastElementChild.style.display = 'block';

};

function makeValid (element) {

    element.parentNode.classList.add('valid');
    element.parentNode.classList.remove('not-valid');
    element.parentNode.lastElementChild.style.display = 'none';

}
















