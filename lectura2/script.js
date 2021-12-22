/* constantes de los precios */

const precioMar_nacional = precios.maritimo_nacional;
const precioMar_caracas = precios.maritimo_caracas;
const precioAereo_nacional = precios.aereo_nacional;
const precioAereo_caracas = precios.aereo_caracas;

console.log(precioAereo_caracas, precioAereo_nacional, precioMar_caracas, precioMar_nacional);

       /* funcion para cambiar de calculadora */
       function hideElement() {
           if (document.getElementById("tipo_envio").value === "aereo") {
               document.getElementById("calculo_maritimo").style.display = "none";
               document.getElementById("calculo_aereo").style.display = "block";
           } else {
               document.getElementById("calculo_aereo").style.display = "none";
               document.getElementById("calculo_maritimo").style.display = "block";
           }
       };



       /* funcion para redondear a dos decimales */
       function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
        }

        /* funcion para determinar la region del envio */
        function tipoEnvioAereo() {
            const rbs = document.querySelectorAll('input[name="nacional-caracas-aereo"]');
            var selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            return selectedValue;
        };

       /* funcion para calcular el precio de los envios aereos */
       function calculatePrice() {
         /*variables del calculo */
        let alto = document.getElementById('alto').value;
        let ancho = document.getElementById('ancho').value;
        let largo = document.getElementById('largo').value;
        let libras = document.getElementById('libras').value;

        /* calculo librasAproximadas */
        let librasAproximadas = (alto*ancho*largo)/166;

        /* funcion para requerir que los campos de datos esten llenos */
        function sucessAereo() {
           if ($("#calculo_aereo_form")[0].checkValidity()) {
               return 'sucess'
           } else {
               $('#calculo_aereo_form')[0].reportValidity()
           };
        };
        var sucess = sucessAereo();

        /* funcion y variables para determinar la region del envio */
        var value = tipoEnvioAereo();
        if (value === "caracas") {
                var precio_calcular_aereo = precioAereo_caracas;
                console.log(precio_calcular_aereo, precioAereo_caracas);
            } else {
                var precio_calcular_aereo = precioAereo_nacional;
                console.log(precio_calcular_aereo, precioAereo_nacional);
            };

        document.getElementById('libras_calculadas').innerHTML = 'Libras estimadas: ' + librasAproximadas

        /* if statements para mostrar el precio */
        if (sucess === 'sucess') {
           if (librasAproximadas > libras) {
            document.getElementById("resultado_total").innerHTML = roundToTwo(librasAproximadas*precio_calcular_aereo) + "$";
            console.log(librasAproximadas*precio_calcular_aereo);
         } else {
            document.getElementById("resultado_total").innerHTML = libras*precio_calcular_aereo + "$";
            console.log(libras*precio_calcular_aereo);
            };
          };
        };


        /* funcion region del envio maritimo */
        function tipoEnvioMar() {
         const rbs_mar = document.querySelectorAll('input[name="nacional-caracas-mar"]');
         var selectedValueMar;
         for (const rb_mar of rbs_mar) {
             if (rb_mar.checked) {
              selectedValueMar = rb_mar.value;
              break;
                }
            }
         return selectedValueMar;
        };

        /* funcion para calcular el precio de los envios maritimos */
        function calculatePriceMar() {
            /*variables del calculo */
            let alto = document.getElementById('alto_maritimo').value;
            let ancho = document.getElementById('ancho_maritimo').value;
            let largo = document.getElementById('largo_maritimo').value;

            /* funcion para requerir que los campos esten llenos */
            function sucessMar() {
                if ($("#calculo_maritimo_form")[0].checkValidity()) {
                    return 'sucess'
                } else {
                    $('#calculo_maritimo_form')[0].reportValidity()
                };
            };
            var sucess_mar = sucessMar();

            /* funcion y variable region envios maritimos */
            var value_mar = tipoEnvioMar()
            if (value_mar === 'caracas') {
                precio_calcular_mar = precioMar_caracas;
            } else {
                precio_calcular_mar = precioMar_nacional;
            }

            /* calculo ft3 */
            let ft3 = (alto*ancho*largo)/1728;

            /* mostrar precio total */
            if (sucessMar = 'sucess') {
                document.getElementById('ft3').innerHTML = roundToTwo(ft3);
                document.getElementById('resultado_total_mar').innerHTML = roundToTwo(ft3 * precio_calcular_mar) + '$';
                console.log(ft3*precio_calcular_mar);
            };
        };
