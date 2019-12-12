{
    console.log("file opened")

    $(document).ready(function(){
        console.log("started")

        var controller = new ScrollMagic.Controller();

        var ourScene = new ScrollMagic.Scene({
            triggerElement : '#trigger01',
            triggerHook: 0,
            offset:-8,
        })
        .setPin('#pin2')
         
        .addTo(controller);

        var anotherScene = new ScrollMagic.Scene({
            triggerElement : '#trigger01',
            triggerHook: 0,
            offset:-8,
        })
        .setPin('#menu')
        //  
        .addTo(controller);

        var seeif1 = new ScrollMagic.Scene({
            triggerElement: '#content1',
            offset: 0,
            duration:'50%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c1').css({"color": "white","margin-left":"3rem" });
            } else {
                $('#c1').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif2 = new ScrollMagic.Scene({
            triggerElement: '#content2',
            offset: 0,
            duration:'50%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c2').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c2').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif3 = new ScrollMagic.Scene({
            triggerElement: '#content3',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c3').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c3').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif4 = new ScrollMagic.Scene({
            triggerElement: '#content4',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c4').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c4').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif5 = new ScrollMagic.Scene({
            triggerElement: '#content5',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c5').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c5').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif6 = new ScrollMagic.Scene({
            triggerElement: '#content6',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c6').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c6').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif7 = new ScrollMagic.Scene({
            triggerElement: '#content7',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#7').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c7').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif8 = new ScrollMagic.Scene({
            triggerElement: '#content8',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c8').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c8').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

        var seeif9 = new ScrollMagic.Scene({
            triggerElement: '#content9',
            offset: 0,
            duration:'100%',
        }).addTo(controller)
        .on("enter leave", function (e) {
            var enter = e.type == "enter" ? "inside" : "outside";
            if(enter === "inside"){
                $('#c9').css({"color": "white","margin-left":"3rem"  });
            } else {
                $('#c9').css({"color":"#c1c9d2","margin-left":"2rem"});
            }
        }) ;

    });
}