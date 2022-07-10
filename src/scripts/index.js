
function F_login() {
    document.getElementById('login_btn').addEventListener('click', (e) => {

        let user_name = document.getElementById('get_name')
        let user_password = document.getElementById('get_password')

        if (user_name.value === "0" && user_password.value === "0") {
            document.querySelector('.adminPopup').style.display = 'none';
            document.querySelector('.adminMenue').style.display = 'flex';
        } else {
            alert("incorrect login or password")
        }
    })
}
F_login()



// let text_redact = document.querySelectorAll('.text_redact');
// text_redact.forEach(text => {
//     text.addEventListener('click', (e) => {
//         text.setAttribute("contenteditable", true);
//     })
// });