const contact = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', bas);

function bas() {
    let searchName = input.value.toLowerCase();
    /*
     We store the value entered into the text input in a variable called searchName, 
     before then emptying the text input and focusing it again, ready for the next search.  
     */
    input.value = '';
    input.focus();
    for (let i = 0; i < contact.length; i++) {
        let splitContact = contact[i].split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}. ID number is ${i+1}`;
            console.log(i);
            break;
        } else {
            para.textContent = 'Contact not found.'
        }   
    }
}
