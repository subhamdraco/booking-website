const inputs = document.querySelectorAll(".book-input");

inputs.forEach((ipt) =>{
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    
    ipt.addEventListener("blur", () => {
        ipt.parentNode.classList.remove("focus");
        if(ipt.value == ""){
            ipt.parentNode.classList.remove("not-empty");
        }
    });
});

const nav_inputs = document.querySelectorAll(".nav-link");

nav_inputs.forEach((ipt)=>{
    ipt.addEventListener("click",()=>{

        nav_inputs.forEach(function(nav) {nav.classList.remove("active");});
        ipt.classList.add("active");
    });
    
    
});