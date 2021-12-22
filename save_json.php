<?php
// ESTE SCRIPT NO ES UTILIZADO EN LA VERSION FINAL.
// VER ARCHIVO SAVE_JS.PHP......................

$errors = [];
$data = [];
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
      'aereo_caracas'=> $_POST['aereo_caracas'],
      'aereo_nacional'=> $_POST['aereo_nacional'],
      'maritimo_caracas'=> $_POST['maritimo_caracas'],
      'maritimo_nacional'=> $_POST['maritimo_nacional']
    );
    $data['success'] = true;
    $data['message'] = 'Datos procesados!';
}

// ENCODING Y GRABADO DEL JSON Y DE PASO IMPRIME MENSAJE EN LA PAGINA.........
// USA LA FUNCION TIME PARA HACER EL ARCHIVO UNICO............................
    $jsondata = json_encode($formdata, JSON_PRETTY_PRINT);
    if(file_put_contents('./lectura/precios.json', $jsondata)) {
      echo json_encode($data);
    }

?>
