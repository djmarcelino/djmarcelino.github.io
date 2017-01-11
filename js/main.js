function menuSpin(x) {
    x.classList.toggle("change");
}

function openNav() {
if(document.getElementById("overlay").style.visibility == "initial")
{
    document.getElementById("overlay").style.visibility = "hidden";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("header").style.position = "absolute";
}
else
{
    document.getElementById("overlay").style.visibility = "initial";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("header").style.position = "fixed";
}}