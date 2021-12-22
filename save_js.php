<?php

$errors = [];
$data = [];
$ac = $_POST['aereo_caracas'];
$an = $_POST['aereo_nacional'];
$mc = $_POST['maritimo_caracas'];
$mn = $_POST['maritimo_nacional'];

// VERIFICACION DE LOS VALORES
// EN CASO DE QUE EL REQUEST NO HAYA PASADO POR EL INDEX.HTML.................

if (empty($_POST['aereo_caracas'])) {
    $errors['aereo_caracas'] = 'Precio a&eacute;reo Caracas es requerido.';
}

if (empty($_POST['aereo_nacional'])) {
    $errors['aereo_nacional'] = 'Precio a&eacute;reo interior es requerido.';
}

if (empty($_POST['maritimo_caracas'])) {
    $errors['maritimo_caracas'] = 'Precio mar&iacute;timo Caracas es requerido.';
}

if (empty($_POST['maritimo_nacional'])) {
    $errors['maritimo_nacional'] = 'Precio mar&iacute;timo interior es requerido.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
  // ARREGLO CON VALORES DEL POST.............................................
    $formdata = array(
      'aereo_caracas'=> (float)$_POST['aereo_caracas'],
      'aereo_nacional'=> (float)$_POST['aereo_nacional'],
      'maritimo_caracas'=> (float)$_POST['maritimo_caracas'],
      'maritimo_nacional'=> (float)$_POST['maritimo_nacional']
    );

    $data['success'] = true;
    $data['message'] = 'Datos procesados!';
}

// ENCODING Y GRABADO DEL JSON Y DE PASO IMPRIME MENSAJE EN LA PAGINA.........
// USA LA FUNCION TIME PARA HACER EL ARCHIVO UNICO............................
    $jsondata = json_encode($formdata, JSON_PRETTY_PRINT);
    $jsondata = "let precios = " . $jsondata;

// ESTA VERSION GRABA LOS DATOS EN ARCHIVO PRECIOS.JS ACORDE CON EXIGENCIA DEL CLIENTE
// EL CUAL QUERÍA LOS DATOS EN ARCHIVO JS EN LUGAR DE JSON....
// EN LA CARPETA LECTURA SE GUARDA LA VERSION PARA GRABAR ARCHIVO JSON....
// EN LA CARPETA LECTURA2 SE GUARDA LA VERSION PARA GRABAR ARCHIVO JS.....
    if(file_put_contents('./lectura2/precios.js', $jsondata)) {
      echo json_encode($data);
    }

?>
