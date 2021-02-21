db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        const cls = doc.data().classes;
        cls.forEach((c)=>{
            let cl = document.createElement("div");
            cl.innerHTML=c;
            let container = document.getElementById("container");;
            container.appendChild(cl);
        })
    });
});
const chatform = document.getElementById('chat-form');
if(chatform!=null){
}