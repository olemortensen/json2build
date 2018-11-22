$(document).ready(() => {

    $('#submit-button').click((e) => {

    // erase old value
    $('#json-entry').val('');

    // get json as string from field
    var str = $('#java-entry').val();

    try {
	// parse user input as json
        var json = JSON.parse(str);
	
        var java = '';

        // iterate over all json fields
	Object.entries(json).forEach(
            ([k, v]) => {
		// use quote around type string but no quote for number or boolean
                var quote = v != null && (v.constructor === String) ? '"' : '';

		// add new line of java code
                java += `request.put("${k}",  ${quote}${v}${quote});\n`;
	    }
        );

        // display generated java code
        $('#json-entry').val(java);
    
    } catch (error) {
	// in case of errors, display error in the output field
        $('#json-entry').val(error);
    }

   });


    $('#clear-button').click((e) => {
        $('#json-entry').val('');
        $('#java-entry').val('');
    });
});
