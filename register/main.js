var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var confirm_pw = document.getElementById('confirm-pw')
var form = document.querySelector('form')

username.onblur = () => checkUsername(username,4,16)
email.onblur = () => checkEmail(email)
password.onblur = () => checkPassword(password,6)

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmpty(listInput){
    let isEmptyError = false
    listInput.forEach(element => {
        element.value = element.value.trim()
        if(!element.value) {
            showError(element, 'Không được để trống trường này')
            isEmptyError = true
        }else {
            showSuccess(element)
        }
    });
    return isEmptyError
}

function checkUsername(username, min, max){
    let nameError = false
    username.value = username.value.trim()

    if(username.value.length < min || username.value.length > max){
        nameError = true
        showError(username, `Tên đăng nhập phải có độ dài từ ${min} đến ${max} kí tự`)
    }else {
        showSuccess(username)
    }
    return nameError
}

function checkEmail(email) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    email.value = email.value.trim()
    let isEmailError = !regexEmail.test(email.value)

    if(isEmailError) {
        showError(email,'Email không hợp lệ')
    }else {
        showSuccess(email)
    }
    return isEmailError
}

function checkPassword(password, min){
    let passwordError = false
    password.value = password.value.trim()

    if(password.value.length < min){
        passwordError = true
        showError(password, `Mật khẩu phải có độ dài từ ${min} kí tự`)
    }else {
        showSuccess(password)
    }
    return passwordError
}

function checkMatchPassword(password, confirm_pw){
    if (password.value !== confirm_pw.value){
        showError(confirm_pw,"Mật khẩu không trùng khớp")
        return true
    }
    return false

}

form.addEventListener('submit', e => {
    e.preventDefault()

    let emptyError = checkEmpty([username,email,password,confirm_pw])
    let emailError = checkEmail(email)
    let nameError = checkUsername(username,4,16)
    let passwordError = checkPassword(password,6)
    let matchPasswordError = checkMatchPassword(password, confirm_pw)

    if(emailError || emptyError || nameError || passwordError || matchPasswordError){
        
    }else{

    }
})

