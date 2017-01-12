function menuSpin(x) {
    x.classList.toggle("change");
}

function openNav() {
if(document.getElementById("overlay").style.visibility == "visible")
{
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
    
    if($(window).scrollTop() > 1) {
        $(".headerwrapper").addClass("active");
        $('#header').css('padding', '12px 0');
        $(".headerwrapper").style.backgroundColor("#141618");
    } else {
        $(".headerwrapper").removeClass("active");
        $('#header').css('padding', '32px 0');
    }

}
else
{   
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("overlay").style.opacity = "1";
    $('#header').css('padding', '32px 0');
    $(".headerwrapper").style.backgroundColor("transparent");
}}