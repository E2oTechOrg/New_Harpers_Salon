// Page loadinmg animation

if ((".loader").length) {
    // show Preloader until the website ist loaded
    $(window).on('load', function () {
    $(".loader").fadeOut("slow");
    });
}

/* Onpage linkng smooth effect */

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});

// Year for copy content
$(function(){
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});


fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    // Call function to set active class after navbar is loaded
    setActiveNav();
  });

  fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
    // Call function to set active class after navbar is loaded
    setActiveNav();
  });

  
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        const answer = parent.querySelector(".faq-answer");

        // Close other FAQ items
        document.querySelectorAll(".faq-item").forEach(item => {
            if(item !== parent){
                item.classList.remove("active");
                const ans = item.querySelector(".faq-answer");
                ans.style.height = 0;
            }
        });

        // Toggle current
        if(parent.classList.contains("active")){
            // Close it
            parent.classList.remove("active");
            answer.style.height = 0;
        } else {
            // Open it smoothly
            parent.classList.add("active");
            answer.style.height = answer.scrollHeight + "px";
        }
    });
});


