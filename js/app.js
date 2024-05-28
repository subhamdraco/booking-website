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