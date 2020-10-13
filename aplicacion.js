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
            $(".escondidi").hide();
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
            $(".escondidi").hide(); 
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
    var r13_ing_d = true;
    $("#todoaraucania").hide();

    $("#boton_ingresos").click(function(){
        if (r13_ing_d == true) {
            r13_ing_d = false;
            $("#boton_ingresos").hide();
            $("#boton_gas").show();
            $("#todoaraucania").show();    
        }
        else {
            $("#todoaraucania").hide();
            r13_ing_d = true;
        }
    });
    var r13_gas_d = true;
    $("#araucaniagas").hide();

    $("#boton_gas").click(function(){
        if (r13_gas_d == true) {
            r13_gas_d = false;
            $("#boton_gas").hide();
            $("#boton_ingresos").show();
            $("#araucaniagas").show();    
        }
        else {
            $("#araucaniagas").hide();
            r13_gas_d = true;
        }
    });
    // no actualizada no trabajar antes de descargar
    $(".regiones").click(function(){
        if ($(this) == "#r09") {
            $("#hola").text("region 9")   
        }
        
    });
});