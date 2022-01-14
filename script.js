/* Variables for the basic info section */

const nameFocus = document.getElementById('name');

/* Variables for the Job Role section */

const jobRole = document.getElementById('title');
const otherJobRoleInpt = document.querySelector('.other-job-role')


/* Variables for the T-Shirt Info section */

const tShirtColor = document.querySelector('#color');
const shirtDesign = document.querySelector('#design');









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
tShirtColor.disabled = true;

/* This function enables the color input once a t shirt design is selected */
shirtDesign.addEventListener('change', (e) => {
    tShirtColor.disable = false;

    if (e.target.value = "js puns") {
        
    }
    
});


/*
if (e.target.value === "js puns" || e.target.value === "heart js" ) {
    tShirtColor.disable = false;
}
*/



