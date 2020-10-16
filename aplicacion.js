$(document).ready(function(){

    $(".regiones").mouseenter(function(){
        $(this).fadeTo("fast", 0.3)
    });
    $(".regiones").mouseleave(function(){
        // $("#hola").text("selecciona una region")
        $(this).fadeTo("fast",1)
    });
    var nombre_r1 = "Región de Tarapacá";
    var nombre_r2 = "Región de Antofagasta";
    var nombre_r3 = "Región de Atacama";
    var nombre_r4 = "Región de Coquimbo";
    var nombre_r5 = "Región de Valparaiso";
    var nombre_r6 = "Región del Libertador Gral. Bernardo O'Higgins";
    var nombre_r7 = "Región del Maule ";
    var nombre_r8 = "Región del Biobío ";
    var nombre_r9 = "Región de La Araucanía";
    var nombre_r10 = "Región de Los Lagos";
    var nombre_r11 = "Región de Aysén del Gral. Carlos Iáñez del Campo";
    var nombre_r12 = "Región de Magallanes y Antártica Chilena" ;
    var nombre_r13 = "Región Metropolitana";
    var nombre_r14 = "Región de Los Ríos";
    var nombre_r15 = "Arica y Parinacota";
    var nombre_r16 = "Región de Ñuble";
// nombre region izquierda
    $("#r1_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r1)
    });
    $("#r1_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r2_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r2)
    });
    $("#r2_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r3_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r3)
    });
    $("#r3_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r4_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r4)
    });
    $("#r4_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r5_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r5)
    });
    $("#r5_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r6_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r6)
    });
    $("#r6_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r7_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r7)
    });
    $("#r7_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r8_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r8)
    });
    $("#r8_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r9_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r9)
    });
    $("#r9_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r10_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r10)
    });
    $("#r10_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r11_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r11)
    });
    $("#r11_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r12_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r12)
    });
    $("#r12_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r13_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r13)
    });
    $("#r13_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r14_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r14)
    });
    $("#r14_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r15_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r15)
    });
    $("#r15_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
    $("#r16_i").mouseenter(function(){
        $("#nombre_region_i").text(nombre_r16)
    });
    $("#r16_i").mouseleave(function(){
        $("#nombre_region_i").text("Selecciona una región")
    });
// nombre region derecha

    $("#r1_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r1)
    });
    $("#r1_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r2_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r2)
    });
    $("#r2_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r3_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r3)
    });
    $("#r3_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r4_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r4)
    });
    $("#r4_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r5_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r5)
    });
    $("#r5_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r6_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r6)
    });
    $("#r6_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r7_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r7)
    });
    $("#r7_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r8_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r8)
    });
    $("#r8_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r9_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r9)
    });
    $("#r9_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r10_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r10)
    });
    $("#r10_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r11_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r11)
    });
    $("#r11_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r12_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r12)
    });
    $("#r12_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r13_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r13)
    });
    $("#r13_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r14_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r14)
    });
    $("#r14_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r15_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r15)
    });
    $("#r15_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    $("#r16_d").mouseenter(function(){
        $("#nombre_region_d").text(nombre_r16)
    });
    $("#r16_d").mouseleave(function(){
        $("#nombre_region_d").text("Selecciona una región")
    });
    // seccion mostrar informacion
    var data_1 = true;
    var ing_1_i = true;
    var nubon_1= true;

    $("#datos_1_i").hide();
    $("#r1_i").click(function(){
        if (data_1 == true) {
            data_1 = false;
            $(".escondido_i").hide();
            $("#datos_1_i").show();    
        }
        else {
            $("#datos_1_i").hide();
            data_1 = true;
        }
    });
    
    $("#ingresos_1_i").hide();
    $("#boton_ingresos_1").click(function(){
       if (ing_1_i == true) {
           ing_1_i = false;
           $("#boton_ingresos_1").hide();
           $(".info_i").hide();
           $("#boton_gas_1_i").show();
           $("#ingresos_1_i").show();    
       }
       else {
           $("#ingresos_1_i").hide();
           ing_1_i = true;
       }
   });

   $("#emisiones_1_i").hide();
   $("#boton_gas_1_i").click(function(){
       if (nubon_1 == true) {
           nubon_1 = false;
           $("#boton_gas_1_i").hide();
           $(".info_i").hide();
           $("#boton_ingresos_1").show();
           $("#emisiones_1_i").show(); 
       }
       else {
           $("#emisiones_1_i").hide();
           nubon_1 = true;
       }
   });
// hasta aca

    var ingre_9 = true;
    $("#ingre9").hide();

    $("#r9_i").click(function(){
        if (ingre_9 == true) {
            ingre_9 = false;
            $(".escondido_i").hide();
            $("#ingre9").show();    
        }
        else {
            $("#ingre9").hide();
            ingre_9 = true;
        }
    });
    
    var cont_9 = true;
    $("#cont9").hide();

   $("#r9_i").click(function(){
       if (cont_9 == true) {
           cont_9 = false;
           $(".info_9").hide();
           $("#cont9").show();    
       }
       else {
           $("#cont9").hide();
           cont_9 = true;
       }
   });

   var nubon_1= true;
   $("#nubon9").hide();

   $("#cont9").click(function(){
       if (nubon_1 == true) {
           nubon_1 = false;
           $(".escondido").hide();
           $("#nubon9").show();    
       }
       else {
           $("#nubon9").hide();
           nubon_1 = true;
       }
   });




    var r13_i = true;
    $("#ingre13").hide();

    $("#r13").click(function(){
        if (r13_i == true) {
            r13_i = false;
            $(".o_i").hide(); 
            $("#ingre13").show();  
        }
        else {
            $("#ingre13").hide();
            r13_i = true;
        }
    });

   // var cont_13 = true;
   // $("#cont13").hide();

    $("#r13").click(function(){
        if (cont_13 == true) {
            cont_13 = false;
            $(".info").hide();
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






// copia de seguridad de martin
// $("#r9").mouseenter(function(){
//     $("#hola").text("region VI")
//     $(this).fadeTo("fast", 0.3)
// });

// $("#r9").mouseleave(function(){
//     $("#hola").text("selecciona una region")
//     $(this).fadeTo("fast",1)
// });

// var ingre_9 = true;
// $("#ingre9").hide();

// $("#r9").click(function(){
//     if (ingre_9 == true) {
//         ingre_9 = false;
//         $(".escondidi").hide();
//         $("#ingre9").show();    
//     }
//     else {
//         $("#ingre9").hide();
//         ingre_9 = true;
//     }
// });

// var cont_9 = true;
// $("#cont9").hide();

// $("#r9").click(function(){
//    if (cont_9 == true) {
//        cont_9 = false;
//        $(".info_9").hide();
//        $("#cont9").show();    
//    }
//    else {
//        $("#cont9").hide();
//        cont_9 = true;
//    }
// });

// var nubon_1= true;
// $("#nubon9").hide();

// $("#cont9").click(function(){
//    if (nubon_1 == true) {
//        nubon_1 = false;
//        $(".escondido").hide();
//        $("#nubon9").show();    
//    }
//    else {
//        $("#nubon9").hide();
//        nubon_1 = true;
//    }
// });



// // region verfde
// $("#r13").mouseenter(function(){
//     $("#r13").fadeTo("fast", 0.3)
//     $("#hola").text("region 9, Araucania")
// });
// $("#r13").mouseleave(function(){
//     $("#r13").fadeTo("fast",1)
//     $("#hola").text("selecciona una region")
// });

// var r13_i = true;
// $("#ingre13").hide();

// $("#r13").click(function(){
//     if (r13_i == true) {
//         r13_i = false;
//         $(".escondidi").hide(); 
//         $("#ingre13").show();  
//     }
//     else {
//         $("#ingre13").hide();
//         r13_i = true;
//     }
// });

// // var cont_13 = true;
// // $("#cont13").hide();

// $("#r13").click(function(){
//     if (cont_13 == true) {
//         cont_13 = false;
//         $(".info").hide();
//         $("#cont13").show();    
//     }
//     else {
//         $("#cont13").hide();
//         cont_13 = true;
//     }
// });

// var nubon_13= true;
// $("#nubon13").hide();

// $("#cont13").click(function(){
//     if (nubon_13 == true) {
//         nubon_13 = false;
//         $(".escondido").hide();
//         $("#nubon13").show();    
//     }
//     else {
//         $("#nubon13").hide();
//         nubon_13 = true;
//     }
// });


// // funciones derecha
// // funciones r9
// $("#r9_d").mouseenter(function(){
//     $("#hola2").text("region 9  poblacion")
//     $(this).fadeTo("fast", 0.3)
// });

// $("#r9_d").mouseleave(function(){
//     $("#hola2").text("selecciona una region")
//     $(this).fadeTo("fast",1)
// });

// var ingre_9d = true;
// $("#ingre9_d").hide();

// $("#r9_d").click(function(){
//     if (ingre_9d == true) {
//         ingre_9d = false;
//         $(".escondide").hide();
//         $("#ingre9_d").show();    
//     }
//     else {
//         $("#ingre9_d").hide();
//         ingre_9d = true;
//     }
// });

// // region verfde
// $("#r13_d").mouseenter(function(){
//     $("#r13_d").fadeTo("fast", 0.3)
//     $("#hola2").text("region color verde  poblacion")
// });
// $("#r13_d").mouseleave(function(){
//     $("#r13_d").fadeTo("fast",1)
//     $("#hola2").text("Selecciona una region")
// });

// var r13_d = true;
// $("#ingre13_d").hide();

// $("#r13_d").click(function(){
//     if (r13_d == true) {
//         r13_d = false;
//         $(".escondide").hide();
//         $("#ingre13_d").show();    
//     }
//     else {
//         $("#ingre13_d").hide();
//         r13_d = true;
//     }
// });
// var r13_ing_d = true;
// $("#todoaraucania").hide();

// $("#boton_ingresos").click(function(){
//     if (r13_ing_d == true) {
//         r13_ing_d = false;
//         $("#boton_ingresos").hide();
//         $(".info").hide();
//         $("#boton_gas").show();
//         $("#todoaraucania").show();    
//     }
//     else {
//         $("#todoaraucania").hide();
//         r13_ing_d = true;
//     }
// });
// var r13_gas_d = true;
// $("#araucania_gas").hide();

// $("#boton_gas").click(function(){
//     if (r13_gas_d == true) {
//         r13_gas_d = false;
//         $("#boton_gas").hide();
//         $(".info").hide();
//         $("#boton_ingresos").show();
//         $("#araucania_gas").show();    
//     }
//     else {
//         $("#araucaniagas").hide();
//         r13_gas_d = true;
//     }
// });
// var r9_ing_d = true;
// $("#todotarapaca").hide();

// $("#boton_ingresos_9").click(function(){
//     if (r9_ing_d == true) {
//         r9_ing_d = false;
//         $("#boton_ingresos_9").hide();
//         $(".info_9").hide();
//         $("#boton_gas_9").show();
//         $("#todotarapaca").show();    
//     }
//     else {
//         $("#todotarapaca").hide();
//         r9_ing_d = true;
//     }
// });
// var r9_gas_d = true;
// $("#tarapaca_gas").hide();

// $("#boton_gas_9").click(function(){
//     if (r9_gas_d == true) {
//         r9_gas_d = false;
//         $("#boton_gas_9").hide();
//         $(".info_9").hide();
//         $("#boton_ingresos_9").show();
//         $("#tarapaca_gas").show();    
//     }
//     else {
//         $("#tarapaca_gas").hide();
//         r9_gas_d = true;
//     }
// });


// // linea divisoria

// });