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
            headers: {
                'X-Api-Key': return_value16764(7)},
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


function return_value16763(index){

    a16222 = '1/IM/Lmf6TebQhklcoTpiQ==pHCkkzz1m4vHjTJR'
    a19888 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz133vHjTJR'
    a16754 = '1/IM/Lmf6TebQHklcoTpiQ==sHCkkzz1m4vHjTJR'
    a12388 = '1/IM/LmfvvbQhklcoTpiQ==sHCkkzz133vHjTJR'
    a23040 = '1/IM/Lmf6debQhklcoTpiQ==sHCkkzz133vHjTJR'
    a13941 = '1/IM/Lmf6TebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a23489 = '1/IM/Lmf6TebceyklcoTpiQ==sHCkkzz133vHjTR'
    a12398 = '1/IM/Lmf6TebQeeklcoTpiQ==sHCkkzz133vHjTR'
    a02347 = '1/IM/Lmf6TebQeyklaCTpiQ==sHCkkzz133vHjTR'
    a14082 = '1/IM/Lmf6TnNQeyklcoTpiQ==sHCkkzz133vHjTR'
    a13948 = '1/IM/LmaoTebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a12408 = '1/IM/Lmf6TebQeyzOcoTpiQ==sHCkkzz133vHjTR'

    
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

function return_value16769(index){

    a16222 = '1/IM/Lmf6TebQhklcoTpiQ==pHCkkzz1m4vHjTJR'
    a19888 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz133vHjTJR'
    a12388 = '1/IM/LmfvvbQhklcoTpiQ==sHCkkzz133vHjTJR'
    a23040 = '1/IM/Lmf6debQhklcoTpiQ==sHCkkzz133vHjTJR'
    a16754 = '1/IM/Lmf6zebQhklcoTpiQ==sHCkkzz1m4vHjTJR'
    a13941 = '1/IM/Lmf6TebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a23489 = '1/IM/Lmf6TebceyklcoTpiQ==sHCkkzz133vHjTR'
    a12398 = '1/IM/Lmf6TebQeeklcoTpiQ==sHCkkzz133vHjTR'
    a02347 = '1/IM/Lmf6TebQeyklaCTpiQ==sHCkkzz133vHjTR'
    a14082 = '1/IM/Lmf6TnNQeyklcoTpiQ==sHCkkzz133vHjTR'
    a13948 = '1/IM/LmaoTebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a12408 = '1/IM/Lmf6TebQeyzOcoTpiQ==sHCkkzz133vHjTR'

    
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

function return_value16764(index){

    a16222 = '1/IM/Lmf6TebQhklcoTpiQ==pHCkkzz1m4vHjTJR'
    a19888 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz133vHjTJR'
    a12388 = '1/IM/LmfvvbQhklcoTpiQ==sHCkkzz133vHjTJR'
    a23040 = '1/IM/Lmf6debQhklcoTpiQ==sHCkkzz133vHjTJR'
    a13941 = '1/IM/Lmf6TebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a23489 = '1/IM/Lmf6TebceyklcoTpiQ==sHCkkzz133vHjTR'
    a16754 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJR'
    a12398 = '1/IM/Lmf6TebQeeklcoTpiQ==sHCkkzz133vHjTR'
    a02347 = '1/IM/Lmf6TebQeyklaCTpiQ==sHCkkzz133vHjTR'
    a14082 = '1/IM/Lmf6TnNQeyklcoTpiQ==sHCkkzz133vHjTR'
    a13948 = '1/IM/LmaoTebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a12408 = '1/IM/Lmf6TebQeyzOcoTpiQ==sHCkkzz133vHjTR'

    
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

function return_value16768(index){

    a16222 = '1/IM/Lmf6TebQhklcoTpiQ==pHCkkzz1m4vHjTJR'
    a19888 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz133vHjTJR'
    a12388 = '1/IM/LmfvvbQhklcoTpiQ==sHCkkzz133vHjTJR'
    a23040 = '1/IM/Lmf6debQhklcoTpiQ==sHCkkzz133vHjTJR'
    a13941 = '1/IM/Lmf6TebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a23489 = '1/IM/Lmf6TebceyklcoTpiQ==sHCkkzz133vHjTR'
    a12398 = '1/IM/Lmf6TebQeeklcoTpiQ==sHCkkzz133vHjTR'
    a02347 = '1/IM/Lmf6TebQeyklaCTpiQ==sHCkkzz133vHjTR'
    a14082 = '1/IM/Lmf6TnNQeyklcoTpiQ==sHCkkzz133vHjTR'
    a16754 = '1/IM/Lmf6TebQhklcoTpiq==sHCkkzz1m4vHjTJR'
    a13948 = '1/IM/LmaoTebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a12408 = '1/IM/Lmf6TebQeyzOcoTpiQ==sHCkkzz133vHjTR'

    
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

function return_value16768(index){

    a16222 = '1/IM/Lmf6TebQhklcoTpiQ==pHCkkzz1m4vHjTJR'
    a19888 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz133vHjTJR'
    a12388 = '1/IM/LmfvvbQhklcoTpiQ==sHCkkzz133vHjTJR'
    a23040 = '1/IM/Lmf6debQhklcoTpiQ==sHCkkzz133vHjTJR'
    a13941 = '1/IM/Lmf6TebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a23489 = '1/IM/Lmf6TebceyklcoTpiQ==sHCkkzz133vHjTR'
    a12398 = '1/IM/Lmf6TebQeeklcoTpiQ==sHCkkzz133vHjTR'
    a02347 = '1/IM/Lmf6TebQeyklaCTpiQ==sHCkkzz133vHjTR'
    a14082 = '1/IM/Lmf6TnNQeyklcoTpiQ==sHCkkzz133vHjTR'
    a16754 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJr'
    a13948 = '1/IM/LmaoTebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a12408 = '1/IM/Lmf6TebQeyzOcoTpiQ==sHCkkzz133vHjTR'

    
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

function return_value16765(index){

    a16222 = '1/IM/Lmf6TebQhklcoTpiQ==pHCkkzz1m4vHjTJR'
    a19888 = '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz133vHjTJR'
    a16754 = '1/IM/Lmf6TebQhklcoTpiQ==SHCkkzz1m4vHjTJR'
    a12388 = '1/IM/LmfvvbQhklcoTpiQ==sHCkkzz133vHjTJR'
    a23040 = '1/IM/Lmf6debQhklcoTpiQ==sHCkkzz133vHjTJR'
    a13941 = '1/IM/Lmf6TebQeyklcoTpiQ==SHCkkzz133vHjTR'
    a23489 = '1/IM/Lmf6TebceyklcoTpiQ==sHCkkzz133vHjTR'
    a12398 = '1/IM/Lmf6TebQeeklcoTpiQ==sHCkkzz133vHjTR'
    a02347 = '1/IM/Lmf6TebQeyklaCTpiQ==sHCkkzz133vHjTR'
    a14082 = '1/IM/Lmf6TnNQeyklcoTpiQ==sHCkkzz133vHjTR'
    a13948 = '1/IM/LmaoTebQeyklcoTpiQ==sHCkkzz133vHjTR'
    a12408 = '1/IM/Lmf6TebQeyzOcoTpiQ==sHCkkzz133vHjTR'

    
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