let user;
setTimeout(async function getDoc(id) {
    let user = auth.currentUser;
    const snapshot = await db.collection('users').doc(user.uid).get();
    const data = snapshot.data();
    data.classes.forEach(c => {
        let cl = document.createElement("div");
        let text = document.createElement("h1");
        text.innerHTML=c;
        cl.appendChild(text);
        cl.className="class";
        let container = document.getElementById("container");
        container.appendChild(cl);
        console.log(c)
    });
  },1000)

  function bye(){
    auth.signOut().then(()=>{
        location.replace("index.html");
    });
}

