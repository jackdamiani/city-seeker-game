function get_initial_city(starting_range){
    // TODO set values
    var base_pop = 0
    var multiple = 20000
    var rand_num = 0

    var looking_for_city = true
    while( looking_for_city == true){
        if (starting_range == 'tenk'){
            base_pop = 10000
            multiple = 20000
            // TODO: have to update random number
            rand_num = getRandomInt(45)
        }
        else if (starting_range == 'hundredk'){
            base_pop = 100000
            multiple = 20000
            rand_num = getRandomInt(45)
        }
        else if (starting_range == 'onemil'){
            base_pop = 1000000
            multiple = 20000
            rand_num = getRandomInt(235)
        }

        var min_pop = base_pop + multiple * rand_num
        var max_pop = min_pop + multiple
        // TODO: change country
        var api_url = 'https://api.api-ninjas.com/v1/city?country=US&min_population=' + min_pop + '&max_population=' + max_pop + '&limit=1';

        

        

        // API call. If fails goes back to start of loop
        response_dict = get_api_call(api_url)


        if (response_dict == 'api_call_failed' || response_dict == undefined) {
            continue
        }

        // If successful breaks loop
        looking_for_city = false
        return response_dict
    
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function get_api_call(api_url){

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


function get_lat_lon(api_dict, type){
    if (type == 'lat'){
        return api_dict['latitude']
    }
    else if (type == 'lon'){
        return api_dict['longitude']
    }
}

function calcDist(lat1, lon1, lat2, lon2, unit) {
    // TODO: add miles/kilo filter
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return Math.round(dist);
    }
}

function guess_button_onclick(){
    act_dict = game.return_answer.call(game)
    guess_dict = validate_guess()
    document.getElementById('city_guess').value = "";

    if (guess_dict == 'api_call_failed' || guess_dict == undefined) {
        alert('Try again. Check Spelling')
        return false
    }


    
    act_name = act_dict['name']
    guess_name = guess_dict['name']

    act_lat = get_lat_lon(act_dict, "lat")
    act_lon = get_lat_lon(act_dict, "lon")
    guess_lat = get_lat_lon(guess_dict, "lat")
    guess_lon = get_lat_lon(guess_dict, "lon")

    
    _winner = check_if_answer(act_dict, guess_dict)
    if (_winner){
        winner()
    }
    distance = calcDist(act_lat, act_lon, guess_lat, guess_lon, 'M')


    game.add_guesses_dict(guess_name, distance)
    guesses_dict = game.return_guesses_dict.call(game)

    str = JSON.stringify(guesses_dict);
    // alert(str)

    var sorted_guesses_list = Object.keys(guesses_dict).map(function(key) {
        return [key, guesses_dict[key]];
    });

    // Sort the array based on the second element
    sorted_guesses_list.sort(function(first, second) {
        return first[1] - second[1];
    });

    // alert('Items sorted\n' + sorted_guesses_list)



    make_guess_table(sorted_guesses_list)

    // TODO: Integrate other code

    
    return false

    
}

function validate_guess(){
    var city_guess = document.getElementById("city_guess").value;
    var api_url = "https://api.api-ninjas.com/v1/city?country=US&name=" + city_guess

    return get_api_call(api_url)
}

function check_if_answer(act_dict, guess_dict){
    return (act_dict['name'] == guess_dict['name'])
}

function make_guess_table(sorted_guesses_list) {
    var cols = [];
     
    for (var i = 0; i < sorted_guesses_list.length; i++) {
        for (var k in sorted_guesses_list[i]) {
            if (cols.indexOf(k) === -1) {
                 
                // Push all keys to the array
                cols.push(k);
            }
        }
    }
     
    // Create a table element
    var table = document.createElement("table");
     
    // Create table row tr element of a table
    var tr = table.insertRow(-1);
     
    table_headers = ["City", "Distance"]
    for (var i = 0; i < table_headers.length; i++) {
         
        // Create the table header th element
        var theader = document.createElement("th");
        theader.innerHTML = table_headers[i];
         
        // Append columnName to the table row
        tr.appendChild(theader);
    }
     
    // Adding the data to the table
    for (var i = 0; i < sorted_guesses_list.length; i++) {
         
        // Create a new row
        trow = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var cell = trow.insertCell(-1);
             
            // Inserting the cell at particular place
            cell.innerHTML = sorted_guesses_list[i][cols[j]];
        }
    }
     
    // Add the newly created table containing json data
    var el = document.getElementById("guess_table");
    el.innerHTML = "";
    el.appendChild(table);
}   

function winner(){
    // TODO: make winner page
    alert('YOU WINNNN answer was ' + act_dict['name'])
}

function reset(){
    window.location.reload();
}


function game_class(act_dict) {
    // Attributes
    this._act_dict = act_dict;
    this._guesses_dict = {};
    
    // Methods
    this.get_answer = function(){
        // TODO: make play again page
        alert("Answer was: " + this._act_dict['name'])
        return this._act_dict
    }

    this.return_answer = function(){
        return this._act_dict
    }

    this.add_guesses_dict = function(key, value){
        this._guesses_dict[key] = value                
    }

    this.return_guesses_dict = function(){
        return this._guesses_dict
    }

    this.reset_guesses_dict = function(){
        this._guesses_dict = {}
    }
}


// MAIN CODE
act_dict = get_initial_city("hundredk")
game = new game_class(act_dict)

str = JSON.stringify(act_dict);

 
