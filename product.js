//side nav
var sidebar = document.querySelector(".sidebar")
var toggle = document.querySelector(".toggle")
var sideclose = document.querySelector(".sideclose")

toggle.addEventListener("click",function () {
    sidebar.style.right="0px"
})
sideclose.addEventListener("click",function () {
    sidebar.style.right="-100%"
})

// product search 
var productsearch = document.querySelector(".productsearch")
var productcontainer = document.querySelector(".productcontainer")
var productbox = productcontainer.querySelectorAll(".box")


productsearch.addEventListener("keyup",function() {
    var usersearch = productsearch.value.toUpperCase()
    
    for (let i = 0; i < productbox.length; i++) {
        var productname = productbox[i].querySelector("h2").textContent.toUpperCase()
        if (productname.indexOf(usersearch)<0) {
            productbox[i].style.display="none"
        }
        else{
            productbox[i].style.display="block"
        }
    }
})

