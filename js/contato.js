
function validate() {
    const erroNome = document.getElementById("erroNome")  
    const erroEmail = document.getElementById("erroEmail")
    const erroTelefone = document.getElementById("erroTelefone")
    const erroMsg = document.getElementById("erroMsg")
    const telcamp = document.getElementById("tel").value.length
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const tel = document.getElementById("tel")
    const msg = document.getElementById("mensagem")
    
    if( nome.value == "" ) {        
        erroNome.style.display = "block";  
        erroNome.focus(); 
        nome.style.border="4px solid red";
        return false; }
    else{
        nome.style.border="4px solid rgb(0, 255, 0)";
        erroNome.style.display= "none"
    }

              
    if( email.value == "") {        
        erroEmail.style.display = "block";
        erroEmail.focus() ;
        email.style.border="4px solid red";
        return false;
    }
    else{
        email.style.border="4px solid rgb(0, 255, 0)";
        erroEmail.style.display= "none"
    }

    if( tel.value == "" || telcamp < 14) {        
        erroTelefone.style.display = "block"
        erroTelefone.focus();
        tel.style.border="4px solid red";
        return false;
    }
    else{
        tel.style.border="4px solid rgb(0, 255, 0)";
        erroTelefone.style.display= "none"
    }

    if( msg.value == "" ) {       
        erroMsg.style.display = "block"
        erroMsg.focus();
        msg.style.border="4px solid red";
        return false;
    }
    else{
        msg.style.border="4px solid rgb(0, 255, 0)"
        erroMsg.style.display= "none"
    }
     
    return true;
}

function irnome(){
    document.getElementById("nome").focus() ;
}
function iremail(){
    document.getElementById("email").focus() ;
}
function irtelefone(){
    document.getElementById("tel").focus() ;
}
function irmensagem(){
    document.getElementById("mensagem").focus() ;
}

function inputNome(){
    const nome = document.getElementById("nome")
    if( nome.value == "" ) {        

        nome.style.border="4px solid red";
        return false; }
    else{
        nome.style.border="4px solid rgb(0, 255, 0)";
    }
}
function inputEmail(){
    const email = document.getElementById("email")
    if( email.value == "") {        

        email.style.border="4px solid red";
        return false; }
    else{
        email.style.border="4px solid rgb(0, 255, 0)";
    }
}
function inputTel(){
    const tel = document.getElementById("tel")
    const telcamp = document.getElementById("tel").value.length
    if ( tel.value == "" || telcamp < 14) {        

        tel.style.border="4px solid red";
        return false; }
    else{
        tel.style.border="4px solid rgb(0, 255, 0)";
    }
}
function inputMsg(){
    const msg = document.getElementById("mensagem")
    if( msg.value == "" ) {        

        msg.style.border="4px solid red";
        return false; }
    else{
        msg.style.border="4px solid rgb(0, 255, 0)";
    }
}
