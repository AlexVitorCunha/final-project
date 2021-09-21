$(function(){
    $("#navigation").load("navigation.html");
  });

$(function(){
    $("#footer").load("footer.html");
});

function menu() {
    var arrow = document.getElementById("menu-arrow");
    var dropdown = document.getElementById("menu");
    if(dropdown.classList.contains('show')){
        dropdown.classList.remove('show');
        arrow.classList.remove('rotated-arrow');
    }
    else{
        dropdown.setAttribute("class", "show");
        arrow.setAttribute("class", "rotated-arrow");
    }   
}
