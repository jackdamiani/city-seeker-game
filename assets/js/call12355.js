function get_api_call(api_url){
    /* 
        Get Api Call -> Returns API response dictionary
        Input: API URL to call
    */
    alert('getting api call')

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
            headers: {
                'X-Api-Key': get_api_call232424()},
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


function get_api_call26763(index){

    a16222 = 'VQbo00rwqftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a19888 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarwhUe9h'
    a12388 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a23040 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a13941 = 'VQbo00rWQft49tI8c9OEJIbLymAzJmfzarWhUe9h'
    a23489 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a16754 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhue9h'
    a12398 = 'VQbo00rWQftS9tI8d9OEJIbLymAzJmgzarWhUe9h'
    a02347 = 'VQbo0OrWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a14082 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgAZrWhUe9h'
    a13948 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJMgzarWhUe9h'
    a12408 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhue9h'

    
    list_values = []
    
    list_values.push(a12388)
    list_values.push(a19888)
    list_values.push(a02347)
    list_values.push(a14082)
    list_values.push(a23489)
    list_values.push(a23040)
    list_values.push(a13941)
    list_values.push(a16754)
    list_values.push(a19888)
    list_values.push(a16222)
    list_values.push(a23489)
    list_values.push(a16222)
    list_values.push(a02347)
    list_values.push(a19888)
    list_values.push(a12388)
    list_values.push(a12408)
    list_values.push(a12388)
    list_values.push(a02347)
    
    return list_values[index]

}

function get_api_call26769(index){

    a16222 = 'VQbo00rwqftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a19888 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarwhUe9h'
    a12388 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a23040 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a13941 = 'VQbo00rWQft49tI8c9OEJIbLymAzJmfzarWhUe9h'
    a23489 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a16754 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhue9h'
    a12398 = 'VQbo00rWQftS9tI8d9OEJIbLymAzJmgzarWhUe9h'
    a02347 = 'VQbo0OrWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a14082 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgAZrWhUe9h'
    a13948 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJMgzarWhUe9h'
    a12408 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhue9h'

    
    list_values = []
    
    list_values.push(a12388)
    list_values.push(a19888)
    list_values.push(a02347)
    list_values.push(a14082)
    list_values.push(a23489)
    list_values.push(a23040)
    list_values.push(a13941)
    list_values.push(a16754)
    list_values.push(a19888)
    list_values.push(a16222)
    list_values.push(a23489)
    list_values.push(a16222)
    list_values.push(a02347)
    list_values.push(a19888)
    list_values.push(a12388)
    list_values.push(a12408)
    list_values.push(a12388)
    list_values.push(a02347)
    
    return list_values[index]

}

function get_api_call26764(index){

    a16222 = 'VQbo00rwqftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a19888 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarwhUe9h'
    a12388 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a23040 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a13941 = 'VQbo00rWQft49tI8c9OEJIbLymAzJmfzarWhUe9h'
    a23489 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a16754 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhue9h'
    a12398 = 'VQbo00rWQftS9tI8d9OEJIbLymAzJmgzarWhUe9h'
    a02347 = 'VQbo0OrWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a14082 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgAZrWhUe9h'
    a13948 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJMgzarWhUe9h'
    a12408 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhue9h'

    
    list_values = []
    
    list_values.push(a12388)
    list_values.push(a19888)
    list_values.push(a02347)
    list_values.push(a14082)
    list_values.push(a23489)
    list_values.push(a23040)
    list_values.push(a13941)
    list_values.push(a16754)
    list_values.push(a19888)
    list_values.push(a16222)
    list_values.push(a23489)
    list_values.push(a16222)
    list_values.push(a02347)
    list_values.push(a19888)
    list_values.push(a12388)
    list_values.push(a12408)
    list_values.push(a12388)
    list_values.push(a02347)
    
    return list_values[index]

}

function get_api_call26768(index){

    a16222 = 'VQbo00rwqftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a19888 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarwhUe9h'
    a12388 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a23040 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a13941 = 'VQbo00rWQft49tI8c9OEJIbLymAzJmfzarWhUe9h'
    a23489 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a16754 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhue9h'
    a12398 = 'VQbo00rWQftS9tI8d9OEJIbLymAzJmgzarWhUe9h'
    a02347 = 'VQbo0OrWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a14082 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgAZrWhUe9h'
    a13948 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJMgzarWhUe9h'
    a12408 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhue9h'

    
    list_values = []
    
    list_values.push(a12388)
    list_values.push(a19888)
    list_values.push(a02347)
    list_values.push(a14082)
    list_values.push(a23489)
    list_values.push(a23040)
    list_values.push(a13941)
    list_values.push(a16754)
    list_values.push(a19888)
    list_values.push(a16222)
    list_values.push(a23489)
    list_values.push(a16222)
    list_values.push(a02347)
    list_values.push(a19888)
    list_values.push(a12388)
    list_values.push(a12408)
    list_values.push(a12388)
    list_values.push(a02347)
    
    return list_values[index]

}

function get_api_call26768(index){

    a16222 = 'VQbo00rwqftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a19888 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarwhUe9h'
    a12388 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a23040 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a13941 = 'VQbo00rWQft49tI8c9OEJIbLymAzJmfzarWhUe9h'
    a23489 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a16754 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhue9h'
    a12398 = 'VQbo00rWQftS9tI8d9OEJIbLymAzJmgzarWhUe9h'
    a02347 = 'VQbo0OrWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a14082 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgAZrWhUe9h'
    a13948 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJMgzarWhUe9h'
    a12408 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhue9h'

    
    list_values = []
    
    list_values.push(a12388)
    list_values.push(a19888)
    list_values.push(a02347)
    list_values.push(a14082)
    list_values.push(a23489)
    list_values.push(a23040)
    list_values.push(a13941)
    list_values.push(a16754)
    list_values.push(a19888)
    list_values.push(a16222)
    list_values.push(a23489)
    list_values.push(a16222)
    list_values.push(a02347)
    list_values.push(a19888)
    list_values.push(a12388)
    list_values.push(a12408)
    list_values.push(a12388)
    list_values.push(a02347)
    
    return list_values[index]

}

function get_api_call26765(index){

    a16222 = 'VQbo00rwqftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a19888 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarwhUe9h'
    a12388 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a23040 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a13941 = 'VQbo00rWQft49tI8c9OEJIbLymAzJmfzarWhUe9h'
    a23489 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhUe9g'
    a16754 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmfzarWhue9h'
    a12398 = 'VQbo00rWQftS9tI8d9OEJIbLymAzJmgzarWhUe9h'
    a02347 = 'VQbo0OrWQftS9tI8c9OEJIbLymAzJmgzarWhUe9h'
    a14082 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgAZrWhUe9h'
    a13948 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJMgzarWhUe9h'
    a12408 = 'VQbo00rWQftS9tI8c9OEJIbLymAzJmgzarWhue9h'
    
    list_values = []
    
    list_values.push(a12388)
    list_values.push(a19888)
    list_values.push(a02347)
    list_values.push(a14082)
    list_values.push(a23489)
    list_values.push(a23040)
    list_values.push(a13941)
    list_values.push(a16754)
    list_values.push(a19888)
    list_values.push(a16222)
    list_values.push(a23489)
    list_values.push(a16222)
    list_values.push(a02347)
    list_values.push(a19888)
    list_values.push(a12388)
    list_values.push(a12408)
    list_values.push(a12388)
    list_values.push(a02347)
    
    return list_values[index]

}