// Tamayo, Johannes Nikolai Wendellsohn Z.
// CMSC100 C3L 2018-68611

// import statements
import appendFileSync from 'fs';
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';

function generateUniqueID(fname, lname) {
    // empty string
    let uniqueId = "";
    // console.log(uniqueId);
    // get first letter and turn it lowercase
    uniqueId = uniqueId + fname[0].toLowerCase();
    // console.log(uniqueId);
    // take whole lastname and concatenate to first letter
    uniqueId = uniqueId + lname.toLowerCase();
    // console.log(uniqueId);

    // get random string from uuid
    let fromuuid = uuidv4();
    // console.log(fromuuid);
    // loop to concatenate only the first 8 charactesr from uuid
    for (let i = 0; i < 8; i++) {
        uniqueId = uniqueId + fromuuid[i];
    }
    // final print for checking before return
    console.log(uniqueId);
    return uniqueId;
}

function addAccount([fname, lname, email, age]) {

    if (!fname) {
        return false;
    } else if (!lname) {
        return false;
    } else if (!email) {
        return false;
    } else if (age < 18) {
        return false;
    } else {
        // save data into new line of file
    }

}

generateUniqueID("Alan", "Turing");
addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);



