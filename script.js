function update_slider(reset=false)
{
    slider_element.style.display = "none";
    if (slider_element.nextElementSibling == null) 
    { 
        slider_element = document.getElementsByClassName("se1");
        slider_element = slider_element[0];
    }
    else slider_element = slider_element.nextElementSibling;
    slider_element.style.display = "block";
    if (reset) 
    {
        clearInterval(slider_interval);
        slider_interval = setInterval(update_slider, 4000);
    }
}
var slider_element = document.getElementsByClassName("se1");
slider_element = slider_element[0];
var slider_interval = setInterval(update_slider, 4000);

function dropdown(item)
{
    var item = item.nextElementSibling;
    item.style.display = "none";
    item.style.display = "block";
    item.style.left = event.clientX;
}
window.onclick = function (event) {
    if (!event.target.matches('h2')) {
        var dropdowns = document.getElementsByClassName("mm_dropdown");
        Array.from(dropdowns).forEach(menu => {
            menu.style.display = "none";
        });
    }
} 