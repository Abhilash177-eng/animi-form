document.getElementById("submit-form").addEventListener("click", function Validation(eve){
    eve.preventDefault();
    var name = document.forms["ANIMI-FORMS"]["name1"].value;
    let count = document.forms["ANIMI-FORMS"]["name3"].value;
    const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
    const isSpecialCharsPresent = specialChars.split('').some(char => 
        name.includes(char))
        const space = ` `;
        const isSpacePresent = space.split('').some(char => 
            name.includes(char))
    if (name == "") {
        alert("name cant be empty");
    }
    else if (name.length > 15){
        alert("name size charecter limit exceeds 15");
    } else if (name.length < 8) {
        alert("name size charecter limit is bellow 8");
    } else if (isSpecialCharsPresent){
        alert("special charecters are not allowed");
    } else if (isNaN(count)){
        alert("Episodes should be number")
    } 
    else if (isSpacePresent){
        alert("space should not be allowed")
    } else {
        alert('validation success');
        return true;
    }
});