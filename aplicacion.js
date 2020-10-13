$(document).ready(function(){
    
// funciones r9
    $("#r9").mouseenter(function(){
        $("#hola").text("region VI")
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
    
//    var cont_9 = true;
//    $("#cont9").hide();
//
//    $("#r9").click(function(){
//        if (cont_9 == true) {
//            cont_9 = false;
//            $(".escondidi").hide();
//            $("#cont9").show();    
//        }
//        else {
//            $("#cont9").hide();
//            cont_9 = true;
//        }
//    });
//
//    var nubon_1= true;
//    $("#nubon9").hide();
//
//    $("#cont9").click(function(){
//        if (nubon_1 == true) {
//            nubon_1 = false;
//            $(".escondido").hide();
//            $("#nubon9").show();    
//        }
//        else {
//            $("#nubon9").hide();
//            nubon_1 = true;
//        }
//    });



// region verfde
    $("#r13").mouseenter(function(){
        $("#r13").fadeTo("fast", 0.3)
        $("#hola").text("region 9, Araucania")
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

    var cont_13 = true;
    $("#cont13").hide();

    $("#r13").click(function(){
        if (cont_13 == true) {
            cont_13 = false;
            $(".escondidi").hide();
            $("#cont13").show();    
        }
        else {
            $("#cont13").hide();
            cont_13 = true;
        }
    });

    var nubon_13= true;
    $("#nubon13").hide();

    $("#cont13").click(function(){
        if (nubon_13 == true) {
            nubon_13 = false;
            $(".escondido").hide();
            $("#nubon13").show();    
        }
        else {
            $("#nubon13").hide();
            nubon_13 = true;
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
        $("#hola2").text("Selecciona una region")
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
            $(".info").hide();
            $("#boton_gas").show();
            $("#todoaraucania").show();    
        }
        else {
            $("#todoaraucania").hide();
            r13_ing_d = true;
        }
    });
    var r13_gas_d = true;
    $("#araucania_gas").hide();

    $("#boton_gas").click(function(){
        if (r13_gas_d == true) {
            r13_gas_d = false;
            $("#boton_gas").hide();
            $(".info").hide();
            $("#boton_ingresos").show();
            $("#araucania_gas").show();    
        }
        else {
            $("#araucaniagas").hide();
            r13_gas_d = true;
        }
    });
    var r9_ing_d = true;
    $("#todotarapaca").hide();

    $("#boton_ingresos_9").click(function(){
        if (r9_ing_d == true) {
            r9_ing_d = false;
            $("#boton_ingresos_9").hide();
            $(".info_9").hide();
            $("#boton_gas_9").show();
            $("#todotarapaca").show();    
        }
        else {
            $("#todotarapaca").hide();
            r9_ing_d = true;
        }
    });
    var r9_gas_d = true;
    $("#tarapaca_gas").hide();

    $("#boton_gas_9").click(function(){
        if (r9_gas_d == true) {
            r9_gas_d = false;
            $("#boton_gas_9").hide();
            $(".info_9").hide();
            $("#boton_ingresos_9").show();
            $("#tarapaca_gas").show();    
        }
        else {
            $("#tarapaca_gas").hide();
            r9_gas_d = true;
        }
    });
    

    // linea divisoria

});