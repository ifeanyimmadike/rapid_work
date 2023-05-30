// email verification
var theEmail=document.getElementById("email");
var theErrorEmail=document.getElementById('errorMessage');
var thePassword=document.getElementById('password')
function eEmail(){ 
    if(theEmail.value==''){
        theEmail.style.borderColor='red';
        theErrorEmail.innerHTML='please enter valid email'}
    else if(!theEmail.value.includes('@') && !theEmail.value.includes('.com') ){
        theEmail.style.borderColor='red';
        theErrorEmail.innerHTML='please enter valid email'}
    else
    theEmail.style.borderColor='green';
    theErrorEmail.innerHTML='';
}

function ePassword(){
    if (thePassword.length < '6'){
        alert('password must be more than 6');
        thePassword.style.borderColor='red'
    }
}   
