const auth = firebase.auth();
import * as flags from './alert-pass.js';

document.querySelector('.btn').addEventListener('click', (e) => {
    const email = document.getElementById('email_field').value;
    const paswrd = document.getElementById('password_field').value;
    if (flags.emailID.style.border === '2px solid green' && flags.confirmPass.style.border === '2px solid green' && flags.password.style.border === '2px solid green') {
        auth.createUserWithEmailAndPassword(email, paswrd).then(cred => {
            document.getElementById('login_div').style.display = 'none';
            var para = document.createElement('h1');
            para.innerHTML = "Your Account has been made Successfully!!!";
            para.style.color = 'teal';
            para.style.textAlign = 'center'
            document.body.appendChild(para);

            var signIn = document.createElement('a');
            signIn.innerText = "Sign In";
            signIn.className = "btn";
            signIn.style.textAlign = "center";
            signIn.href = '../static/sign-in.html'
            document.body.appendChild(signIn);
        });
    }
})
