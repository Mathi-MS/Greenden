var sidebar = document.querySelector(".sidebar")
var toggle = document.querySelector(".toggle")
var sideclose = document.querySelector(".sideclose")

toggle.addEventListener("click",function () {
    sidebar.style.right="0px"
})
sideclose.addEventListener("click",function () {
    sidebar.style.right="-100%"
})