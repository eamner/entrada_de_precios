var json = $.getJSON({'url': 'precios.json', 'async': false});
var precios = JSON.parse(json.responseText);
