var username = document.getElementById('username_access')
var password = document.getElementById('password_access')

form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()

    username.value = username.value.trim()
    password.value = password.value.trim()

    
    if(username.value === 'admin' && password.value === 'admin'){
        
    }else{
        showError(password.parentElement)
    }
})

function showError(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    small.innerText = "Sai tên đăng nhập hoặc mật khẩu"
}