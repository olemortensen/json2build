$(document).ready(function () {

    $('#submit-button').click(function (e) {

    $('#json-entry').val('');

    var str = $('#java-entry').val();

    try {
        var json = JSON.parse(str);
        var java = '';

	Object.entries(json).forEach(
        ([k, v]) => {
            var quote = (v.constructor === String) ? '"' : '';
            java += 'request("' + k + '", ' + quote + v + quote + ');\n'}
        );;

        $('#json-entry').val(java);
    
    } catch (error) {
        $('#json-entry').val(error);
    }

   });
});
