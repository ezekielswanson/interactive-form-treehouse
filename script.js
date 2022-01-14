/* Variables for the basic info section */

const nameFocus = document.getElementById('name');

/* Variables for the Job Role section */

const jobRole = document.getElementById('title');
const otherJobRoleInpt = document.querySelector('.other-job-role')




nameFocus.focus();


otherJobRoleInpt.style.display = 'none';
    

jobRole.addEventListener('change', e => {
    if (e.target.otherJobRoleInpt.classList('other-job-role')) {
        otherJobRoleInpt.style.display = 'block';
    }


});



