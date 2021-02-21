let user;
setTimeout(async function getDoc(id) {
    let user = auth.currentUser;
    const snapshot = await db.collection('users').doc(user.uid).get();
    const data = snapshot.data();
    data.classes.forEach(c => {
        let cl = document.createElement("div");
        cl.innerHTML=c;
        let container = document.getElementById("container");;
        container.appendChild(cl);
    });
  },1000)

