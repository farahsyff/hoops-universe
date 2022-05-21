let totalSlides = 3;
let index = 0;

let width = 1360;

let slide = function(change){
    index += change;
    if(index < 0) index = 2;
    else if(index > 2) index = 0;

    $('.collection').animate(
        {
            left: -width * index,
        }, 1000 //jeda waktu slide dalam milisecond
    );

    if(screen.width <= 1507){
        width = 1200;
    }
    if(screen.width <= 1300){
        width = 1000;
    }
    if(screen.width <= 1050){
        width = 800;
    }
    if(screen.width <= 870){
        width = 600;
    }
    if(screen.width <= 660){
        width = 450;
    }
    if(screen.width <= 480){
        width = 330;
    }
    if(screen.width <= 320){
        width = 240;
    }
}

$('#prev').click(function(){
    if(index !== 0){
        slide(-1);
    }
    else{
        slide(2);
    }
    // slide(-1);
});

$('#next').click(function(){
    if(index < totalSlides){
        slide(1);
    }
    else{
        slide(0);
    }
    // slide(+1);
});