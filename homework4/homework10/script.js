document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault()
 const username = document.getElementById("username").value
 const password = document.getElementById("password").value
user = [
    {
        username:"abraham",
        password:"1234"
    },
    {
        username:"george",
        password:"1234"
    },
    {
        username:"richard",
        password:"1234"
    },
    {
        username:"luke",
        password:"1234"
    },
    {
        username:"donald",
        password:"1234"
    },
    {
        username:"joe",
        password:"1234"
    },
]
 if(username === "name@gmail.com" && password === "password"){
    const token = Math.random().toString(36).substr(2)
    console.log(token)
    localStorage.setItem("token", token)
    window.location.href = "./home.html"
 } else {
    alert("Wrong username or password")
 }
 
})
