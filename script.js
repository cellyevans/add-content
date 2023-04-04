// for loop
const accordion = document.getElementsByClassName("card");
const accordionQuestionHead = document.querySelectorAll(".faqs-heading");

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function(e){
        const target = e.target;
        if (target.matches("h4.faqs-title")) {
            target.classList.toggle("active");
            accordion[i].querySelector(".faqs-desc").classList.toggle("active");
            target.parentElement.classList.add("active");

            removeTarget(accordionQuestionHead, "active", target);
        }
    })
}

document.body.addEventListener("click", function(e) {
    const target = e.target;
    removeTarget(accordionQuestionHead, "active", target);
    
})

function removeTarget(removedNode, className, targetElement) {
    removedNode.forEach(function(heading){
        if(heading.classList.contains(className) && targetElement.parentElement !== heading) {
            heading.classList.remove(className);
        }
    })
}