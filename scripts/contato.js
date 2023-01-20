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
    }else if (myForm.first_name.value == myForm.last_name.value) {
        alert("O nome e o sobrenome não podem ser iguais")
        document.myForm.last_name.focus()
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
    }else{
        evento.preventDefault()
    }
});


