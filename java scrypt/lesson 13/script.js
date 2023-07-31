function circles(event){
    event.preventDefault();

    let data = new FormData(document.getElementById("form"));

    let circles_html = "";
    let diametr = data.get("radius") * 2;

    for (let i = 0; i < data.get("amount"); i++){
        let random_background = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
        
        circles_html += '<div class="circle" style="height: '+ diametr +'px; width: '+ diametr +'px; background: '+random_background+'"></div>';
    }

    document.getElementById("all_circles").innerHTML = circles_html;
}

function delete_circle(event){
    event.target.remove();
}

document.getElementById("form").addEventListener("submit", circles);
document.getElementById("all_circles").addEventListener("click", delete_circle)


/*function parallax(event){
console.log(event)
document.getElementById("circle").style.transform = "translate("
+event.clientX+"px, "+event.clientY+"px)";
}
document.addEventListener("mousemove", parallax);*/