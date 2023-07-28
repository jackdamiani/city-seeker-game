function get_api_call(api_url){
    /* 
        Get Api Call -> Returns API response dictionary
        Input: API URL to call
    */

    // have to make and update global variable
    var response_dict
    function updateResult(data) {
        response_dict = data[0];
    }

    // gets dictionary object if api successful
    try{
        $.ajax({
            method: 'GET',
            url: api_url,
            headers: { 'X-Api-Key': '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJR'},
            contentType: 'application/json',
            async: !1,
            success: function(result) {
                // if successful updates here
                updateResult(result)
                console.log(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
    catch{
        // failed
        return "api_call_failed"
    }

    return response_dict
}


