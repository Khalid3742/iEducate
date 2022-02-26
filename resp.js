var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var rightnav = document.querySelector('.rightnav');
var navlist = document.querySelector('.nav-list');

var Name = document.getElementById('name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var text = document.getElementById('text');
var button = document.querySelector('.btnn');
var regX = /\S+@\S+\.\S+/;

burger.addEventListener('click',()=>{
    rightnav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp");
    
}) 

function checkInput() {
    if (Name.value.trim() !=="" && phone.value.trim() !=="" && regX.test(email.value) && text.value.trim() !=="") {
       button.style.backgroundColor = '#fa923f';
       button.disabled = false;
    }
    else{
        button.style.backgroundColor = '#979695';
        button.disabled = true;
    }
}

