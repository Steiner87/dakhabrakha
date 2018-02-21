jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
        jQuery('.lang').toggleClass('active');
        e.preventDefault();
    });
});

var menu = document.getElementsByClassName('menu');
menu.appendChild("div");
// <div class="toggle-nav">
// <div></div>
// <div></div>
// <div></div>
// </div>