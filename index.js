// Tamayo, Johannes Nikolai Wendellsohn Z.
// CMSC100 C3L 2018-68611

// import statements
import { appendFileSync } from 'node:fs';
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';

export function generateUniqueID(fname, lname) {
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

export function addAccount([fname, lname, email, age]) {

    if (!fname) {
        return false;
    } else if (!lname) {
        return false;
    } else if (!(validator.isEmail(email))) {
        return false;
    } else if (age < 18) {
        return false;
    } else {
        // call id generator
        let uniqueId = generateUniqueID(fname, lname);

        // save data into new line of file
        let exportData = "";
        exportData = exportData + fname + ',' + lname + ',' + email + ',' + age + ',' + uniqueId;
        try {
            appendFileSync('users.txt', exportData);
            console.log('The "data to append" was appended to file!');
        } catch (err) {
            // error catch
            console.log("error could not save");
        }
    }

}


// addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);