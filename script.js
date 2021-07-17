const toggleTheme = document.getElementById("theme-toggle");
const bodyTag = document.getElementById("body")
const circle = document.getElementById("circle")
console.log(body)
toggleTheme.addEventListener("click",()=>{
bodyTag.classList.toggle("dark")
circle.classList.toggle("clicked")
})