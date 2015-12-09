$(function() {

    var keys = {};

    setInterval(function() {

        movehero();


        $(".bullet").each(function() {
            var currentBullet = $(this);

            var bulletPos = $(this).offset();

            var bulletLeft = bulletPos.left;
            var bulletTop = bulletPos.top;

            console.log(bulletTop);


            $(".enemy").each(function() {
                var enemyPos = $(this).offset();


                var dx = bulletPos.left - enemyPos.left;
                var dy = bulletPos.top - enemyPos.top;

                console.log(dx);
                console.log(dy);

                var dist = Math.sqrt(dx * dx + dy * dy);

                console.log(dist);

                if (dist <= 30) {
                    console.log("collision");
                    $(this).css("display", "none");
                    $(this).remove();
                    currentBullet.remove();
                    $("body").animate({

                        backgroundColor: "grey"
                    }, 40, function() {
                        $(this).css("background-color", "black");
                    })




                }

            })


        })





    }, 20);



    // snapshot position of every object on the page along with 
    // 


    setInterval(function() {

        var randomNumber = Math.floor(Math.random() * 900 + 1);

        var enemy = "<div class='enemy'></div>";


        $("body").append(enemy)

        $("body > .enemy:last ").css({

            "left": randomNumber,

        }).animate({
            top: '700px',
        }, 2000, function() {

            $(this).remove()
        })





    }, 200);





    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
        fire(e)
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });



    function fire(e) {

        var bullet = "<div class='bullet'><div>";


        if (e.keyCode === 88) {
            // dynamically create dom element and have it travel vertically

            var heroPos = $("#hero").offset();
            console.log(heroPos);

            $("body").append(bullet);

            $('body > .bullet:last').css({



                "left": heroPos.left + 20,
                "top": heroPos.top
            }).animate({
                top: '0px',
            }, 800, function() {

                $(this).remove()

            })





        }
    }






    function movehero() {
        for (var direction in keys) {

            if (direction == 37) {
                $("#hero").animate({
                    left: "-=5"
                }, 0);
            }
            if (direction == 38) {
                $("#hero").animate({
                    top: "-=5"
                }, 0);
            }
            if (direction == 39) {
                $("#hero").animate({
                    left: "+=5"
                }, 0);
            }
            if (direction == 40) {
                $("#hero").animate({
                    top: "+=5"
                }, 0);
            }
        }


    }








})