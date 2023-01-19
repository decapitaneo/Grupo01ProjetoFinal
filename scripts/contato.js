/*
const primeiroNome = document.getElementById("first_name");
const sobrenome = document.getElementById("last_name");
const email = document.getElementById("email");
const celular = document.getElementById("mobile");
const mensagem = document.getElementById("description");

document.getElementById("webToLeadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    enviarWebToLead(e.target);
  });

function enviarWebToLead(form){

    const primeiroNome = document.getElementById("first_name");
    const sobrenome = document.getElementById("last_name");
    const email = document.getElementById("email");
    const celular = document.getElementById("phone");
    const mensagem = document.getElementById("msg");
    const cidade = document.getElementById("city")
    const estado = document.getElementById("00NDn00000Nf1kl")
    console.log(estado.value)
    const webToLeadUrl = "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
    
    const body = {
        first_name: primeiroNome.value,
        last_name: sobrenome.value
    }
}
*/

let form = document.querySelector("form")

function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true
    }
    return false
}

function validatePhone(phone){
    if (/^(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})$/.test(phone)){
        return true
    }
    return false
}


function validate() {
    let isValid = false
    const myForm = document.myForm
    if (myForm.email.value == "") {
        alert("Forneça um endereço de email")
        document.myForm.email.focus()   
    } else if(!validateEmail(myForm.email.value)) {
        alert("Forneça um endereço de email válido")
        document.myForm.email.focus()
    } else if (myForm.first_name.value == "") {
        alert("Forneça um nome")
        document.myForm.first_name.focus()
    } else if (myForm.last_name.value == "") {
        alert("Forneça um sobrenome")
        document.myForm.last_name.focus()
    } else if (myForm.phone.value == "") {
        alert("Forneça um telefone")
        document.myForm.phone.focus()
    }else if(!validatePhone(myForm.phone.value)){
        alert("Forneça um número de telefone válido!")
        document.myForm.phone.focus()   
    }else if(document.myForm["00NDn00000Nf1kl"].value == ""){
        alert("Selecione um Estado!")
        document.myForm["00NDn00000Nf1kl"].focus()    
    }else if(document.myForm.city.value == ""){
        alert("Selecione uma Cidade!")
        document.myForm.city.focus()
    }else if (document.myForm.msg.value == ""){
        alert("Digite a sua mensagem!")
        document.myForm.msg.focus()
    }
    else {
        isValid = true
    }

    return isValid
}

form.addEventListener("submit", evento=>{
    let isValid = validate()
    if(isValid == true) {
        alert('Dados cadastrados com sucesso!')
        
    }
});


