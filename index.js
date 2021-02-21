firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        let l=document.getElementById("log-btn");
        let s=document.getElementById("sign-btn");
        console.log(l,s);
        l.remove();
        s.remove();
        let logout = document.createElement('Button');
        logout.className='btn btn-secondary btn-lg';
        logout.innerText="Log Out";
        logout.onclick=function () {
            bye();
        };
        let container = document.getElementById('registration');
        container.appendChild(logout);
    }
  });

function update(){
    this.innerHTML++;
    this.style.color = "red";
}
function updateadd(){
    db.collection('clicks').get().then(snapshot=>{
        let c = snapshot.docs[0].data().clicks;
        console.log(c);
        db.collection('clicks').doc('global').update({clicks:c+1}).then(function() {
            location.replace("index.html");
        })
    })
}

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