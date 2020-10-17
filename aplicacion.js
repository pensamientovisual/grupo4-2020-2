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
    //    intento de funcion
    function pasar_mouse(region, hola, nombre ) {
        region.mouseenter(function(){
            hola.text(nombre)
        });
        region.mouseleave(function(){
            hola.text("Selecciona una región")
        });
    }
    pasar_mouse($("#r1_i"), $("#nombre_region_i"), nombre_r1);
    pasar_mouse($("#r2_i"), $("#nombre_region_i"), nombre_r2);
    pasar_mouse($("#r3_i"), $("#nombre_region_i"), nombre_r3);
    pasar_mouse($("#r4_i"), $("#nombre_region_i"), nombre_r4);
    pasar_mouse($("#r5_i"), $("#nombre_region_i"), nombre_r5);
    pasar_mouse($("#r6_i"), $("#nombre_region_i"), nombre_r6);
    pasar_mouse($("#r7_i"), $("#nombre_region_i"), nombre_r7);
    pasar_mouse($("#r8_i"), $("#nombre_region_i"), nombre_r8);
    pasar_mouse($("#r9_i"), $("#nombre_region_i"), nombre_r9);
    pasar_mouse($("#r10_i"), $("#nombre_region_i"), nombre_r10);
    pasar_mouse($("#r11_i"), $("#nombre_region_i"), nombre_r11);
    pasar_mouse($("#r12_i"), $("#nombre_region_i"), nombre_r12);
    pasar_mouse($("#r13_i"), $("#nombre_region_i"), nombre_r13);
    pasar_mouse($("#r14_i"), $("#nombre_region_i"), nombre_r14);
    pasar_mouse($("#r15_i"), $("#nombre_region_i"), nombre_r15);
    pasar_mouse($("#r16_i"), $("#nombre_region_i"), nombre_r16);

    pasar_mouse($("#r1_d"), $("#nombre_region_d"), nombre_r1);
    pasar_mouse($("#r2_d"), $("#nombre_region_d"), nombre_r2);
    pasar_mouse($("#r3_d"), $("#nombre_region_d"), nombre_r3);
    pasar_mouse($("#r4_d"), $("#nombre_region_d"), nombre_r4);
    pasar_mouse($("#r5_d"), $("#nombre_region_d"), nombre_r5);
    pasar_mouse($("#r6_d"), $("#nombre_region_d"), nombre_r6);
    pasar_mouse($("#r7_d"), $("#nombre_region_d"), nombre_r7);
    pasar_mouse($("#r8_d"), $("#nombre_region_d"), nombre_r8);
    pasar_mouse($("#r9_d"), $("#nombre_region_d"), nombre_r9);
    pasar_mouse($("#r10_d"), $("#nombre_region_d"), nombre_r10);
    pasar_mouse($("#r11_d"), $("#nombre_region_d"), nombre_r11);
    pasar_mouse($("#r12_d"), $("#nombre_region_d"), nombre_r12);
    pasar_mouse($("#r13_d"), $("#nombre_region_d"), nombre_r13);
    pasar_mouse($("#r14_d"), $("#nombre_region_d"), nombre_r14);
    pasar_mouse($("#r15_d"), $("#nombre_region_d"), nombre_r15);
    pasar_mouse($("#r16_d"), $("#nombre_region_d"), nombre_r16);
    
    function botones(datos, region, escondido, boton_ingresos, boton_gas, info, ingresos, emisiones, nubes_x, boton_industria) {
        var data = true;
        var ing_1_i = true;
        var gases= true;
        var nubon= true;
        datos.hide();
        region.click(function(){
            if (data == true) {
                data = false;
                escondido.hide();
                datos.show();    
            }
            else {
                datos.hide();
                data = true;
            }
        });
        ingresos.hide();
        boton_ingresos.click(function(){
           if (ing_1_i == true) {
               ing_1_i = false;
               boton_ingresos.hide();
               info.hide();
               boton_gas.show();
               ingresos.show();    
           }
           else {
               ingresos.hide();
               ing_1_i = true;
           }
        });
        emisiones.hide();
        boton_gas.click(function(){
           if (gases == true) {
               gases = false;
               boton_gas.hide();
               info.hide();
               boton_ingresos.show();
               emisiones.show(); 
           }
           else {
               emisiones.hide();
               gases = true;
           }
        });  
        nubes_x.hide();
        boton_industria.click(function(){
            if (nubon == true) {
               nubon = false;
               nubes_x.show();    
            }
            else {
               nubes_x.hide();
               nubon = true;
            }
        });  
    }
    // botones(datos, region, escondido, boton_ingresos, boton_gas, info, ingresos, emisiones, nubes_x, boton_industria, nubes_escondidas)
    botones($("#datos_1_i"), $("#r1_i"), $(".escondido_i"), $("#boton_ingresos_1_i"), $("#boton_gas_1_i"), $(".info_i"), $("#ingresos_1_i"), $("#emisiones_1_i"), $("#nubes_1_i"), $("#boton_industria_1_i"))
    botones($("#datos_2_i"), $("#r2_i"), $(".escondido_i"), $("#boton_ingresos_2_i"), $("#boton_gas_2_i"), $(".info_i"), $("#ingresos_2_i"), $("#emisiones_2_i"), $("#nubes_2_i"), $("#boton_industria_2_i"))
    botones($("#datos_3_i"), $("#r3_i"), $(".escondido_i"), $("#boton_ingresos_3_i"), $("#boton_gas_3_i"), $(".info_i"), $("#ingresos_3_i"), $("#emisiones_3_i"), $("#nubes_3_i"), $("#boton_industria_3_i"))
    botones($("#datos_4_i"), $("#r4_i"), $(".escondido_i"), $("#boton_ingresos_4_i"), $("#boton_gas_4_i"), $(".info_i"), $("#ingresos_4_i"), $("#emisiones_4_i"), $("#nubes_4_i"), $("#boton_industria_4_i"))
    botones($("#datos_5_i"), $("#r5_i"), $(".escondido_i"), $("#boton_ingresos_5_i"), $("#boton_gas_5_i"), $(".info_i"), $("#ingresos_5_i"), $("#emisiones_5_i"), $("#nubes_5_i"), $("#boton_industria_5_i"))
    botones($("#datos_6_i"), $("#r6_i"), $(".escondido_i"), $("#boton_ingresos_6_i"), $("#boton_gas_6_i"), $(".info_i"), $("#ingresos_6_i"), $("#emisiones_6_i"), $("#nubes_6_i"), $("#boton_industria_6_i"))
    botones($("#datos_7_i"), $("#r7_i"), $(".escondido_i"), $("#boton_ingresos_7_i"), $("#boton_gas_7_i"), $(".info_i"), $("#ingresos_7_i"), $("#emisiones_7_i"), $("#nubes_7_i"), $("#boton_industria_7_i"))
    botones($("#datos_8_i"), $("#r8_i"), $(".escondido_i"), $("#boton_ingresos_8_i"), $("#boton_gas_8_i"), $(".info_i"), $("#ingresos_8_i"), $("#emisiones_8_i"), $("#nubes_8_i"), $("#boton_industria_8_i"))
    botones($("#datos_9_i"), $("#r9_i"), $(".escondido_i"), $("#boton_ingresos_9_i"), $("#boton_gas_9_i"), $(".info_i"), $("#ingresos_9_i"), $("#emisiones_9_i"), $("#nubes_9_i"), $("#boton_industria_9_i"))
    botones($("#datos_10_i"), $("#r10_i"), $(".escondido_i"), $("#boton_ingresos_10_i"), $("#boton_gas_10_i"), $(".info_i"), $("#ingresos_10_i"), $("#emisiones_10_i"), $("#nubes_10_i"), $("#boton_industria_10_i"))
    botones($("#datos_11_i"), $("#r11_i"), $(".escondido_i"), $("#boton_ingresos_11_i"), $("#boton_gas_11_i"), $(".info_i"), $("#ingresos_11_i"), $("#emisiones_11_i"), $("#nubes_11_i"), $("#boton_industria_11_i"))
    botones($("#datos_12_i"), $("#r12_i"), $(".escondido_i"), $("#boton_ingresos_12_i"), $("#boton_gas_12_i"), $(".info_i"), $("#ingresos_12_i"), $("#emisiones_12_i"), $("#nubes_12_i"), $("#boton_industria_12_i"))
    botones($("#datos_13_i"), $("#r13_i"), $(".escondido_i"), $("#boton_ingresos_13_i"), $("#boton_gas_13_i"), $(".info_i"), $("#ingresos_13_i"), $("#emisiones_13_i"), $("#nubes_13_i"), $("#boton_industria_13_i"))
    botones($("#datos_14_i"), $("#r14_i"), $(".escondido_i"), $("#boton_ingresos_14_i"), $("#boton_gas_14_i"), $(".info_i"), $("#ingresos_14_i"), $("#emisiones_14_i"), $("#nubes_14_i"), $("#boton_industria_14_i"))
    botones($("#datos_15_i"), $("#r15_i"), $(".escondido_i"), $("#boton_ingresos_15_i"), $("#boton_gas_15_i"), $(".info_i"), $("#ingresos_15_i"), $("#emisiones_15_i"), $("#nubes_15_i"), $("#boton_industria_15_i"))
    botones($("#datos_16_i"), $("#r16_i"), $(".escondido_i"), $("#boton_ingresos_16_i"), $("#boton_gas_16_i"), $(".info_i"), $("#ingresos_16_i"), $("#emisiones_16_i"), $("#nubes_16_i"), $("#boton_industria_16_i"))
    

});

