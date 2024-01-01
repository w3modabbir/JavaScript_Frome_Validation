var fname = document.getElementById ('fullname');
var nm_err = document.getElementById ('name_eror');


var email = document.getElementById ('email_address');
var eml_err = document.getElementById ('email_eror');
var regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


var password = document.getElementById ('password');
var pass_err = document.getElementById ('pass_eror');
var upper = /[A-Z]/;
var lower = /[a-z]/;
var number = /[0-9]/;

var con_password = document.getElementById ('confirm_password');
var con_pass_err = document.getElementById ('confirm_pass_eror');

var massage = document.getElementById ('massge');
var mass_err = document.getElementById ('massage_eror');

var gender1 = document.getElementById ('gender1');
var gender2 = document.getElementById ('gender1');
var gender3 = document.getElementById ('gender1');
var gen_err = document.getElementById ('gender_eror');


function sub(){
    if(fname.value == ''){
       nm_err.innerHTML = 'plz your full name';
       fname.style.border = '1px solid red';
       fname.focus();
       return false;

    }
    else if(email.value == ''){
        eml_err.innerHTML = 'plz your email';
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }
    else if(!regex.test(email.value)){
        eml_err.innerHTML = 'plz chack your email';
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }
    else if(password.value == ''){
        pass_err.innerHTML = 'plz your password';
        password.style.border = '1px solid red';
        password.focus();
        return false;
    }
    else if(!upper.test(password.value) || !lower.test(password.value) || !number.test(password.value) || password.value.length < 8){
        pass_err.innerHTML = 'plz chack your password';
        password.style.border = '1px solid red';
        password.focus();
        return false;
    }
    else if(con_password.value == ''){
        con_pass_err.innerHTML = 'plz your confirm password';
        con_password.style.border = '1px solid red';
        con_password.focus();
        return false;
    }
    else if(password.value != con_password.value){
        con_pass_err.innerHTML = ' your password not mach';
        con_password.style.border = '1px solid red';
        con_password.focus();
        return false;
    }
    else if(massage.value == ''){
        mass_err.innerHTML = 'plz your massage';
        massage.style.border = '1px solid red';
        massage.focus();
        return false;
    }
    else if(gender1.checked == false && gender2.checked == false && gender3.checked == false){
        gen_err.innerHTML = 'plz your gender';
        return false;
    }
}


function showpass(){
    var m = document.getElementById ('password');
    if(m.type === 'password'){
        m.type = 'text';
    }

    else{
        m.type = 'password';
    } 
}

function errvalid(){
    if(fname.value != ''){
        nm_err.innerHTML = '';
        fname.style.border = '1px solid #3498DB';
    }
    if(email.value != ''){
        eml_err.innerHTML = '';
        email.style.border = '1px solid #3498DB';
    }
    if(password.value != ''){
        pass_err.innerHTML = '';
        password.style.border = '1px solid #3498DB';
    }
    if(con_password.value != ''){
        con_pass_err.innerHTML = '';
        con_password.style.border = '1px solid #3498DB';
    }
    if(massage.value != ''){
        mass_err.innerHTML = '';
        massage.style.border = '1px solid #3498DB';
    }
    if(gender1.checked == true && gender2.checked == true && gender3.checked == true){
        gen_err.innerHTML = '';
    }
}

fname.addEventListener('blur', errvalid);
email.addEventListener('blur', errvalid);
password.addEventListener('blur', errvalid);
con_password.addEventListener('blur', errvalid);
massage.addEventListener('blur', errvalid);
gender1.addEventListener('blur', errvalid);
gender2.addEventListener('blur', errvalid);
gender3.addEventListener('blur', errvalid);