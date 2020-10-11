$(document).ready(function(){
    
// funciones r9
    $("#r9").mouseenter(function(){
        $("#hola").text("region 9  poblacion")
        $(this).fadeTo("fast", 0.3)
    });

    $("#r9").mouseleave(function(){
        $("#hola").text("selecciona una region")
        $(this).fadeTo("fast",1)
    });

    var ingre_9 = true;
    $("#ingre9").hide();

    $("#r9").click(function(){
        if (ingre_9 == true) {
            ingre_9 = false;
            $(".escondido").hide();
            $("#ingre9").show();    
        }
        else {
            $("#ingre9").hide();
            ingre_9 = true;
        }
    });

// region verfde
    $("#r13").mouseenter(function(){
        $("#r13").fadeTo("fast", 0.3)
        $("#hola").text("region color verde  poblacion")
    });
    $("#r13").mouseleave(function(){
        $("#r13").fadeTo("fast",1)
        $("#hola").text("selecciona una region")
    });

    var r13_i = true;
    $("#ingre13").hide();

    $("#r13").click(function(){
        if (r13_i == true) {
            r13_i = false;
            $(".escondido").hide(); 
            $("#ingre13").show();  
        }
        else {
            $("#ingre13").hide();
            r13_i = true;
        }
    });
    // funciones derecha
    // funciones r9
    $("#r9_d").mouseenter(function(){
        $("#hola2").text("region 9  poblacion")
        $(this).fadeTo("fast", 0.3)
    });

    $("#r9_d").mouseleave(function(){
        $("#hola2").text("selecciona una region")
        $(this).fadeTo("fast",1)
    });

    var ingre_9d = true;
    $("#ingre9_d").hide();

    $("#r9_d").click(function(){
        if (ingre_9d == true) {
            ingre_9d = false;
            $(".escondide").hide();
            $("#ingre9_d").show();    
        }
        else {
            $("#ingre9_d").hide();
            ingre_9d = true;
        }
    });

    // region verfde
    $("#r13_d").mouseenter(function(){
        $("#r13_d").fadeTo("fast", 0.3)
        $("#hola2").text("region color verde  poblacion")
    });
    $("#r13_d").mouseleave(function(){
        $("#r13_d").fadeTo("fast",1)
        $("#hola2").text("selecciona una region")
    });

    var r13_d = true;
    $("#ingre13_d").hide();

    $("#r13_d").click(function(){
        if (r13_d == true) {
            r13_d = false;
            $(".escondide").hide();
            $("#ingre13_d").show();    
        }
        else {
            $("#ingre13_d").hide();
            r13_d = true;
        }
    });
});