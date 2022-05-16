var elementsToShow; 

var scroll = window.requestAnimationFrame || 
            function(callback) { window.setTimeout(callback,1000/60)};

// adds or removes a class depending of the visibility of an element
function loop(){
    // loops through each element checking if it's visible
    elementsToShow.forEach(function (element){
        if( isElementInViewport(element)){
            element.classList.add('is-visible');
        }else{
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

// checks if an element is on the viewport
function isElementInViewport(el){
    var rect = el.getBoundingClientRect();
    
    return(
        (rect.top <= 0 &&
            rect.bottom >=0) ||

        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <=(window.innerHeight || document.documentElement.clientHeight)) ||
        
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        )
    )
}

// loads the domain
document.addEventListener("DOMContentLoaded", function () {
    // requests all elements with .animation-scroll
    elementsToShow = document.querySelectorAll('.animation-scroll');
    // starts the loop
    loop();
});