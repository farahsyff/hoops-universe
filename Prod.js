let product = document.getElementById("prodName").textContent;
let price = document.getElementById("prodPrice").textContent;
let form = document.forms['purchaseForm2'];
let size = document.forms['pSize'];
var errorLbl = document.getElementById('errorMsg');
var num = /^[0-9]+$/;
document.getElementById('submitBtn').addEventListener("click", onSubmit);
var sizeError = document.getElementById('sizeError');
document.getElementById('buyBtn').addEventListener("click", toBuy);

function toBuy(event){
    if(!checkSize()){
        event.preventDefault();
        return;
    }else{
        sizeError.innerHTML = "";
        $('html, body').animate({
            scrollTop: $('#purchaseForm').offset().top
        }, 800);
    }
}

function checkSize(){
    if(size['sizeSlc'].value==""){
        sizeError.innerHTML = "You must pick the size.";
        return false;
    }
    return true;
}

function onSubmit(event){
    if(!checkSize2()){
        event.preventDefault();
        return;
    }if(!checkName()){
        event.preventDefault();
        return;
    }if(!checkPN()){
        event.preventDefault();
        return;
    }if(!checkEmail()){
        event.preventDefault();
        return;
    }if(!checkGender()){
        event.preventDefault();
        return;
    }if(!checkAge()){
        event.preventDefault();
        return;
    }if(!checkDistrict()){
        event.preventDefault();
        return;
    }if(!checkAddress()){
        event.preventDefault();
        return;
    }if(!checkPC()){
        event.preventDefault();
        return;
    }
    else{
        errorLbl.innerHTML = "";
        // alert('Form submitted succesfully.');
        confirm('Purchase Confirmation\n\nProduct    :  ' + product +
        `\nSize          :  ${size['sizeSlc'].value}\nPrice         :  ` + price +
        `\n----------------------------------------------\nName                 :  ${form['inputName'].value}\nPhone Number  :  ${form['inputPN'].value}`);
        
    }
}

function checkSize2(){
    if(size['sizeSlc'].value==""){
        errorLbl.innerHTML = "You have not pick the size.";
        return false;
    }
    return true;
}

function checkName(){
    if(form['inputName'].value==""){
        errorLbl.innerHTML = "You need to insert your name.";
        return false;
    }
    if(form['inputName'].value.length < 3){
        errorLbl.innerHTML = "Your name must be at least 3 characters long.";
        return false;
    }
    return true;
}

function checkPN(){
    if(form['inputPN'].value==""){
        errorLbl.innerHTML = "You need to insert your phone number.";
        return false;
    }
    if(!form['inputPN'].value.match(num)){
        errorLbl.innerHTML = "Please insert numeric characters only (Phone Number).";
        return false;
    }
    if(form['inputPN'].value.length < 10 || form['inputPN'].value.length > 15){
        errorLbl.innerHTML = "Your phone number length must be at 10-15 numbers.";
        return false;
    }
    return true;
}

function checkEmail(){
    if(form['inputEmail'].value==""){
        errorLbl.innerHTML = "You need to insert your email.";
        return false;
    }
    if(form['inputEmail'].value.indexOf('@') > form['inputEmail'].value.length || form['inputEmail'].value.indexOf('@') < 0){
        errorLbl.innerHTML = "Your need to insert the correct form of email.";
        return false;
    }
    return true;
}

function checkGender(){
    let male = document.getElementById('genderMale');
    let female = document.getElementById('genderFemale');
    let other = document.getElementById('genderOther');
    let other2 = document.getElementById('genderOther2');

    if(!male.checked && !female.checked && !other.checked && !other2.checked){
        errorLbl.innerHTML = "Your need to choose the gender.";
        return false;
    }
    return true;
}

function checkAge(){
    if(form['inputAge'],value=""){
        errorLbl.innerHTML = "You need to insert your age.";
        return false;
    }
    if(!form['inputAge'].value.match(num)){
        errorLbl.innerHTML = "Please insert numeric characters only (Age).";
        return false;
    }
    return true;
}

function checkDistrict(){
    if(form['inputDistrict'].value==""){
        errorLbl.innerHTML = "You need to insert your district.";
        return false;
    }
    if(form['inputDistrict'].value.length < 3){
        errorLbl.innerHTML = "Please insert your district as detail as possible.";
        return false;
    }
    return true;
}

function checkAddress(){
    if(form['inputAddress'].value==""){
        errorLbl.innerHTML = "You need to insert your address.";
        return false;
    }
    if(form['inputAddress'].value.length < 4){
        errorLbl.innerHTML = "Please insert your address as detail as possible.";
        return false;
    }
    return true;
}

function checkPC(){
    if(form['inputPC'],value=""){
        errorLbl.innerHTML = "You need to insert your postal code.";
        return false;
    }
    if(!form['inputPC'].value.match(num)){
        errorLbl.innerHTML = "Please insert numeric characters only (Postal Code).";
        return false;
    }
    if(form['inputPC'].value.length != 5){
        errorLbl.innerHTML = "Please insert your postal code correctly.";
        return false;
    }
    return true;
}