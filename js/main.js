function menuSpin(x) {
    x.classList.toggle("change");
}

function openNav() {
if(document.getElementById("overlay").style.visibility == "visible")
{
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("logo").style.color = "#fff";
    document.getElementById("bar1").style.backgroundColor = "#fff";
    document.getElementById("bar2").style.backgroundColor = "#fff";
    document.getElementById("bar3").style.backgroundColor = "#fff";
    
    if($(window).scrollTop() > 1) {
        $(".headerwrapper").addClass("active");
        $('#header').css('padding', '12px 0');
    } else {
        $(".headerwrapper").removeClass("active");
        $('#header').css('padding', '32px 0');
    }

}
else
{   
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("logo").style.color = "#272d3d";
    document.getElementById("bar1").style.backgroundColor = "#272d3d";
    document.getElementById("bar2").style.backgroundColor = "#272d3d";
    document.getElementById("bar3").style.backgroundColor = "#272d3d";
    $('#header').css('padding', '32px 0');
    $(".headerwrapper").removeClass("active");
}}