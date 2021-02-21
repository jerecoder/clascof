firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db.collection("users").doc(user.uid).set({
            name:user.email,
            classes:["class1","class2","class3"]
        })
    }
  });

const signupform = document.getElementById('form-signup');
if(signupform!=null){
    signupform.addEventListener('submit',(e)=>{
        e.preventDefault()
        const email = signupform['inputEmail'].value;
        const psswrd = signupform['inputPassword'].value;
        auth.createUserWithEmailAndPassword(email,psswrd).then(cred =>{
            location.replace("dash.html");
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
            location.replace("dash.html");
        })
    })
}

const Class = document.getElementById('subject');
const create = document.getElementById('create');