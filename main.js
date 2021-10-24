var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('my Canvas');
ctx = canvas.getElementById("2d");

color = "black";
width_of_ line = 1;
canvas.addEventListner("mousedown", my_mousedown);
function my_mousedown(e)

}

color = documenet.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;

mouseEvent = "mouseDown";

}

canvas.addEventListner("mousemove", my_mousemove);
function my_mousemove(e)
{
    curent_postion_of_mouse_x = e.clientX - canvas.offsetleft;
    curent_postion_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = width_of_line;
    
    console.log("last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x " y + " last_position_of_y);
    ctx.moveTo(last_position_of_x, last_postion_of_y)
    
    console.log("Current position of x and y coordinates = ");
     console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); 
     ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
     ctx.stroke(); 
    }
    last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y; 
    }
    
    canvas.addEventListener("mouseup", my_mouseup); function my_mouseup(e) { mouseEvent = "mouseUP"; 
    } 
    canvas.addEventListener("mouseleave", my_mouseleave); function my_mouseleave(e) { mouseEvent = "mouseleave";
 } 
 //Additional Activity 
 function clearArea()
  { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}