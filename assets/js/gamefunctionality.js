  function start_game(){
    /*
        Starts Game -> Returns Nothing

        Hides start menu
        Sets Game Variables For the Map
        Gets initial city value
        Initializes Map
    
    */

    // gets starting parameters
    var countrySel = document.getElementById("country");
    var popSel = document.getElementById("pop");

    
    game.set_countrySel(countrySel.value)
    game.set_popSel(popSel.value)


    // Hide the Start Menu
    document.getElementsByClassName("start_menu")[0].style.visibility = 'hidden';
    document.getElementsByClassName("play_button")[0].style.visibility = 'hidden';
    
    // gets starting city
    act_dict = get_initial_city()
    game.set_actual_dict(act_dict)

    map = initMap()
    game.set_map(map)
}


function get_initial_city(){
    /* 
        Get Initial City -> Returns API response dictionary
    
        Uses Start Menu Parameters to get the object for the starting city
    */

    // Starting Country
    var starting_country;
    if (game._countrySel == 'United States'){
        starting_country = 'US'
    }

    // Starting Population Range
    var starting_range
    if (game._popSel == "Easy -- 1M+"){
        starting_range = 'onemil'
    }
    else if (game._popSel == "Medium -- 100k-1M"){
        starting_range = 'hundredk'
    }
    else if (game._popSel == "Hard -- 10k-100k"){
        starting_range = 'tenk'
    }

    
    // TODO: update values
    var base_pop;
    var multiple;
    var rand_num;

    var looking_for_city = true
    while( looking_for_city == true){
        if (starting_range == 'tenk'){
            base_pop = 10000
            multiple = 500
            // TODO: have to update random number
            rand_num = getRandomInt(180)
        }
        else if (starting_range == 'hundredk'){
            base_pop = 100000
            multiple = 500
            rand_num = getRandomInt(1800)
        }
        else if (starting_range == 'onemil'){
            base_pop = 1000000
            multiple = 20000
            rand_num = getRandomInt(235)
        }

        // gets population range
        var min_pop = base_pop + multiple * rand_num
        var max_pop = min_pop + multiple

        // Api Url made
        var api_url = 'https://api.api-ninjas.com/v1/city?country=' + starting_country + '&min_population=' + min_pop + '&max_population=' + max_pop + '&limit=1';

        // API call. If fails goes back to start of loop
        response_dict = get_api_call(api_url)

        // If fails tries again with different population number
        if (response_dict == 'api_call_failed' || response_dict == undefined) {
            continue
        }

        // If successful breaks loop
        looking_for_city = false
        return response_dict
    }
    
}


// $("#start_game_play").click(function() {
//     try{
//         $('body').trigger('play_load_button');
//         setTimeout(function() { start_game(); }, 0); 
//         // Causes it to be executed in the background 0ms from now
//     }
//     catch{
//         start_game();
//     }
//  });

// $('#start_game_play').bind('play_load_button', function() {
//     $(this).innerHTML = 'Loading <i class="fa fa-circle-o-notch fa-spin"></i>';
//     // setTimeout(function() { start_game(); }, 0); 
// });


function play_load_button(){
    try{
        document.getElementById("start_game_play").innerHTML = 'Loading <i class="fa fa-circle-o-notch fa-spin"></i>';
        setTimeout(function() { start_game(); }, 0); 
    }
    catch{
        start_game();
    }
    return false;
}

function getRandomInt(max) {
    /* 
        Get Random Int -> Returns random number
    */
    return Math.floor(Math.random() * max);
}

function get_lat_lon(api_dict, type){
    /* 
        Get Lat or Long -> Returns Latitude or Longitude Value
        Inputs: API dict, type: "lat" or "lon"
    */
    if (type == 'lat'){
        return api_dict['latitude']
    }
    else if (type == 'lon'){
        return api_dict['longitude']
    }
}

function calcDist(lat1, lon1, lat2, lon2, unit) {
    /* 
        Calc Distance -> Returns distance in Miles or KM
        Inputs: Actual lat, lon, Guess lat, lon, unit: 'M' or 'K'
    
    */
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

function activate_hard_mode(){
    /* 
        If click on hard mode button in beginning, sets the game variable
    */
    hard_mode_button = document.getElementById("hard_mode")

    
    if (hard_mode_button.innerHTML == "Hard Mode" || hard_mode_button.innerHTML == "Activate Hard Mode"){
        game._hard_mode = true;
        hard_mode_button.innerHTML = "Deactivate Hard Mode"
    }
    else if (hard_mode_button.innerHTML == "Deactivate Hard Mode"){
        game._hard_mode = false;
        hard_mode_button.innerHTML = "Activate Hard Mode"
    }
}

function guess_button_onclick(){
    /* 
        Guess Button -> Returns false 
            Checks if guess answer
            If yes ends game
            If no, updates Last Guess, 
                updates guess table,
                updates map with marker
    */

    // Gets guess
    act_dict = game.return_answer.call(game)
    guess_dict = validate_guess()
    document.getElementById('city_guess').value = "";

    if (guess_dict == 'api_call_failed' || guess_dict == undefined) {
        alert('Try again. Check Spelling')
        return false
    }
    
    // adds to guess count
    game._numGuesses = game._numGuesses + 1;

    // checks if winner
    _winner = check_if_answer(act_dict, guess_dict)
    if (_winner){
        winner()
    }


    // gets guess metadata
    act_name = act_dict['name']
    guess_name = guess_dict['name']

    act_lat = get_lat_lon(act_dict, "lat")
    act_lon = get_lat_lon(act_dict, "lon")
    guess_lat = get_lat_lon(guess_dict, "lat")
    guess_lon = get_lat_lon(guess_dict, "lon")

    distance = calcDist(act_lat, act_lon, guess_lat, guess_lon, game._distSel)

    // displays most recent guess and distance
    display_most_recent_guess(guess_name, distance)

    // adds to guess dictionary
    game.add_guesses_dict(guess_name, distance)
    guesses_dict = game.return_guesses_dict.call(game)

    // sorts guesses
    var sorted_guesses_list = Object.keys(guesses_dict).map(function(key) {
        return [key, guesses_dict[key]];
    });

    // Sort the array based on the second element
    sorted_guesses_list.sort(function(first, second) {
        return first[1] - second[1];
    });

    // makes guess table
    make_guess_table(sorted_guesses_list)

    // add marker to map
    addMarker(game._map, guess_lat, guess_lon);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    
    return false

}

function validate_guess(){
    /*
        Validate Guess -> Returns Guess Api
        If fails will ask to try to spell the city name differently
    */

    // Sets url for the starting country
    var starting_country;
    if (game._countrySel == 'United States'){
        starting_country = 'US'
    }


    var city_guess = document.getElementById("city_guess").value;
    var api_url = "https://api.api-ninjas.com/v1/city?country=" + starting_country + "&name=" + city_guess

    return get_api_call(api_url)
}

function check_if_answer(act_dict, guess_dict){
    /*
        Check if answer -> Returns if names match!
    */
    return (act_dict['name'] == guess_dict['name'])
}


function display_most_recent_guess(guess_name, distance){
    /*
        Display Most Recent Guess -> Returns None
        Inputs: Guess Name, Distance

        Displays City Name and Distance in most recent guess html object
    */
    var most_recent_guess = document.getElementById("most_recent_guess");
    most_recent_guess.innerHTML = "Last Guess: " + guess_name + " " + distance;

    document.getElementById("most_recent_guess").style.visibility = 'visible';
}

function make_guess_table(sorted_guesses_list) {
    /*
        Make Guess Table -> Returns None
        Input: Sorted Guess List

        Outputs Sorted Guess List for user reference
    */
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
    document.getElementById("guess_table").style.visibility = 'visible';
    var el = document.getElementById("guess_table");
    el.innerHTML = "";
    
    el.appendChild(table);
}   

function winner(){
        document.getElementById('win_message').innerHTML = "Answer: " + game._act_dict['name'] + "\n Number of Guesses:  " + game._numGuesses
        
        $('.win_page').show();
        
        $('.popupCloseButton').click(function(){
            $('.win_page').hide();
        });
    }

function reset(){
    value = confirm('Are You Sure? Will Reset Current Game.')
    if(value){
        window.location.reload();
    }
}

function change_units(){
    unit_switch = document.getElementById("units_button")

    if(unit_switch.innerHTML == "Switch to KM"){
        document.getElementById("units_message").textContent = "Units (KM):" 
        game._distSel = 'K'
        unit_switch.innerHTML = "Switch to MI"
    }
    else if (unit_switch.innerHTML == "Switch to MI"){
        document.getElementById("units_message").textContent = "Units (MI):" 
        game._distSel = 'M'
        unit_switch.innerHTML = "Switch to KM"
    }
}

function show_play(){
    /* Shows Play Button if country and population correctly selected */
    
    var check1 = document.getElementById("country")
    var check2 = document.getElementById("pop")

    if(check1.value != "" && check2.value != ""){
        document.getElementsByClassName("play_button")[0].style.visibility = 'visible';
    }


}


function game_class() {
    /*
        Game Class: Runs the whole game

    */

    // Attributes
    this._act_dict;
    this._guesses_dict = {};
    this._map = map;
    this._hard_mode = false;
    this._popSel;
    this._countrySel;
    this._distSel = 'M';
    this._numGuesses = 0;


    // Methods: mostly getters and setters
    this.set_map = function(map){
        this._map = map
    }

    this.set_actual_dict = function(act_dict){
        this._act_dict = act_dict
    }

    this.set_countrySel = function(countrySel){
        this._countrySel = countrySel
    }

    this.set_popSel = function(popSel){
        this._popSel = popSel
    }

    this.set_distSel = function(distSel){
        this._distSel = distSel
    }
    
    
    this.give_up = function(){

        value = confirm('Are You Sure?')

        if(value){

            document.getElementById('you_win').innerHTML = "GAME OVER"
            document.getElementById('win_message').innerHTML = "Answer = " + this._act_dict['name'] + "\n Number of Guesses = " + this._numGuesses
        
            $('.win_page').show();
            
            $('.popupCloseButton').click(function(){
                $('.win_page').hide();
            });
        }
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
game = new game_class()