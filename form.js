$(document).ready(function () {
  $('form').submit(function (event) {
    $('.form-group').removeClass('has-error');
    $('.help-block').remove();
    var formData = {
      aereo_caracas: $('#aereo_caracas').val(),
      aereo_nacional: $('#aereo_nacional').val(),
      maritimo_caracas: $('#maritimo_caracas').val(),
      maritimo_nacional: $('#maritimo_nacional').val(),
    };

    $.ajax({
      type: 'POST',
      url: 'save_js.php',
      data: formData,
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      console.log(data);
      if (!data.success) {
        if (data.errors.aereo_caracas) {
          $('#aereo_caracas-group').addClass('has-error');
          $('#aereo_caracas-group').append(
            '<div class="help-block">' + data.errors.aereo_caracas + '</div>'
          );
        }

        if (data.errors.aereo_nacional) {
          $('#aereo_nacional-group').addClass('has-error');
          $('#aereo_nacional-group').append(
            '<div class="help-block">' + data.errors.aereo_nacional + '</div>'
          );
        }

        if (data.errors.maritimo_caracas) {
          $('#maritimo_caracas-group').addClass('has-error');
          $('#maritimo_caracas-group').append(
            '<div class="help-block">' + data.errors.maritimo_caracas + '</div>'
          );
        }

        if (data.errors.maritimo_nacional) {
          $('#maritimo_nacional-group').addClass('has-error');
          $('#maritimo_nacional-group').append(
            '<div class="help-block">' + data.errors.maritimo_nacional + '</div>'
          );
        }
      } else {
        $('form').html(
          '<div class="alert alert-success">' + data.message + '</div>'
        );
      }
    });

    event.preventDefault();
  });
});
