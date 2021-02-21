firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        location.replace("dash.html");
    }
  });

const signupform = document.getElementById('form-signup');
if(signupform!=null){
    signupform.addEventListener('submit',(e)=>{
        e.preventDefault()
        const email = signupform['inputEmail'].value;
        const psswrd = signupform['inputPassword'].value;
        auth.createUserWithEmailAndPassword(email,psswrd).then(cred =>{
            location.replace("index.html");
        })
    })
}

const loginform = document.getElementById('form-login');
if(loginform!=null){
    loginform.addEventListener('submit',(e)=>{
        e.preventDefault()
        const email = loginform['inputEmail'].value;
        const psswrd = loginform['inputPassword'].value;
        auth.signInWithEmailAndPassword(email,psswrd).then(cred =>{
            location.replace("index.html");
        })
    })
}

const Class = document.getElementById('subject');
const create = document.getElementById('create');