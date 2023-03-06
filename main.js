const input = document.querySelector("#name");
const namesubmit = document.getElementById("submit");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const ask = document.querySelector("#ask_name");
const ask2 = document.querySelector("#ask_forget");

namesubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    if (input.value != ""){
        let username = input.value;
        localStorage.setItem("name", `${username}`);
        h1.textContent = `WELCOME, ${username}`;
        h2.textContent = `Welcome, ${username}. We hope you are having fun.`;
        ask.setAttribute('hidden', true);
        ask2.removeAttribute('hidden');
        
    }
});

if(localStorage.getItem("name") != ""){
    const forget = document.querySelector("#forget");
    forget.addEventListener("click", (e)=>{
        e.preventDefault();
        localStorage.clear();
        ask.removeAttribute('hidden');
        ask2.setAttribute('hidden', true);
    })
}
