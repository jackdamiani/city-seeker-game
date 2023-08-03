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
    else if (game._countrySel == 'United Kingdom'){
        starting_country = 'GB'
    }
    else if (game._countrySel == 'Canada'){
        starting_country = 'CA'
    }
    else if (game._countrySel == 'Mexico'){
        starting_country = 'MX'
    }
    else if (game._countrySel == 'France'){
        starting_country = 'FR'
    }
    else if (game._countrySel == 'Italy'){
        starting_country = 'IT'
    }
    else if (game._countrySel == 'China'){
        starting_country = 'CN'
    }
    else if (game._countrySel == 'India'){
        starting_country = 'IN'
    }

    // Starting Population Range
    var starting_range
    if (game._popSel == "Easy -- 1M+" || game._popSel == "Easy -- 300k+" || game._popSel == "Easy -- 200k+"){
        starting_range = 'easy'
    }
    else if (game._popSel == "Medium -- 100k-1M" || game._popSel == "Medium -- 100k-300k" || game._popSel == "Medium -- 100k-200k"){
        starting_range = 'medium'
    }
    else if (game._popSel == "Hard -- 10k-100k"){
        starting_range = 'hard'
    }


    var base_pop;
    var multiple;
    var rand_num;

    var looking_for_city = true
    while( looking_for_city == true){
        if (starting_range == 'hard'){
            base_pop = 10000
            multiple = 250
            rand_num = getRandomInt(360)
        }
        else if (starting_range == 'medium'){
            if (game._countrySel == 'United States' || game._countrySel == 'China' || game._countrySel == 'India'){
                base_pop = 100000
                multiple = 500
                rand_num = getRandomInt(1800)
            }
            else if (game._countrySel == 'Mexico'){
                base_pop = 100000
                multiple = 5000
                rand_num = getRandomInt(180)
            }
            else if (game._countrySel == 'United Kingdom' || game._countrySel == 'Canada'){
                base_pop = 100000
                multiple = 500
                rand_num = getRandomInt(400)
            }
            else if (game._countrySel == 'France' || game._countrySel == 'Italy'){
                base_pop = 100000
                multiple = 500
                rand_num = getRandomInt(200)
            }
        }
        else if (starting_range == 'easy'){
            if (game._countrySel == 'United States'){
                base_pop = 1000000
                multiple = 20000
                rand_num = getRandomInt(235)
            }
            else if (game._countrySel == 'China'){
                rand_num = getRandomInt(90)
                if (rand_num <= 50){
                    base_pop = 1000000
                    multiple = 20000
                }
                else if (rand_num > 50 && rand_num <= 70){
                    base_pop = 2000000
                    multiple = 50000
                    rand_num -= 51
                }
                else if (rand_num > 70 && rand_num <= 90){
                    base_pop = 3000000
                    multiple = 1000000
                    rand_num -= 71
                }
            }
            else if (game._countrySel == 'India'){
                rand_num = getRandomInt(90)
                if (rand_num <= 50){
                    base_pop = 1000000
                    multiple = 20000
                }
                else if (rand_num > 50 && rand_num <= 70){
                    base_pop = 2000000
                    multiple = 50000
                    rand_num -= 51
                }
                else if (rand_num > 70 && rand_num <= 90){
                    base_pop = 3000000
                    multiple = 1000000
                    rand_num -= 71
                }
            }
            else if (game._countrySel == 'Mexico'){
                rand_num = getRandomInt(23)
                if (rand_num <= 12){
                    base_pop = 1000000
                    multiple = 50000
                }
                else if (rand_num > 12 && rand_num <= 20){
                    base_pop = 1000000
                    multiple = 200000
                    rand_num -= 10
                }
                else if (rand_num > 20 && rand_num <=22){
                    base_pop = 1000000
                    multiple = 100000
                    rand_num += 21
                }
                else if (rand_num > 22 && rand_num <= 23){
                    base_pop = 20000000
                    multiple = 1000000
                    rand_num = 1
                }
            }
            else if (game._countrySel == 'United Kingdom'){
                rand_num = getRandomInt(125)
                if (rand_num <= 100){
                    base_pop = 300000
                    multiple = 2000
                }
                else if (rand_num > 100 && rand_num <= 110){
                    base_pop = 300000
                    multiple = 50000
                    rand_num -= 97
                }
                else if (rand_num > 110 && rand_num <=125){
                    base_pop = 1000000
                    multiple = 1000000
                    rand_num -= 111
                }
            }
            else if (game._countrySel == 'France'){
                rand_num = getRandomInt(25)
                if (rand_num <= 15){
                    base_pop = 200000
                    multiple = 10000
                }
                else if (rand_num > 15 && rand_num <= 23){
                    base_pop = 350000
                    multiple = 100000
                    rand_num -= 16
                }
                else if (rand_num > 23 && rand_num <=25){
                    base_pop = 10000000
                    multiple = 1000000
                    rand_num -= 24
                }
            }
            else if (game._countrySel == 'Italy'){
                rand_num = getRandomInt(25)
                if (rand_num <= 15){
                    base_pop = 200000
                    multiple = 10000
                }
                else if (rand_num > 15 && rand_num <= 23){
                    base_pop = 350000
                    multiple = 100000
                    rand_num -= 16
                }
                else if (rand_num > 23 && rand_num <=27){
                    base_pop = 1000000
                    multiple = 1000000
                    rand_num -= 24
                }
            }
            else if (game._countrySel == 'Canada'){
                rand_num = getRandomInt(56)
                if (rand_num <= 40){
                    base_pop = 300000
                    multiple = 5000
                }
                else if (rand_num > 40 && rand_num <= 50){
                    base_pop = 500000
                    multiple = 50000
                    rand_num -= 41
                }
                else if (rand_num > 50 && rand_num <=56){
                    base_pop = 1000000
                    multiple = 1000000
                    rand_num -= 51
                }
            }
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

$("#start_game_play").click(function() {
    $('body').trigger('play_load_button()');
    setTimeout(function() { start_game(); }, 0); 
    // Causes it to be executed in the background 0ms from now
 });

$('#start_game_play').bind('play_load_button', function() {
    $(this).innerHTML = 'Loading <i class="fa fa-circle-o-notch fa-spin"></i>';
});

function play_load_button(){

    document.getElementById("start_game_play").innerHTML = 'Loading <i class="fa fa-circle-o-notch fa-spin"></i>';
    // document.getElementById("start_game_play").blur();

    // start_game();
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
    var name_check = document.getElementById("city_guess").value;
    guess_dict = validate_guess()
    document.getElementById('city_guess').value = "";

    if (guess_dict == 'api_call_failed' || guess_dict == undefined) {
        alert('Try again. Check Spelling')
        return false
    }
    
    // adds to guess count
    game._numGuesses = game._numGuesses + 1;

    // checks if winner
    _winner = check_if_answer(act_dict, guess_dict, name_check)
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
    else if (game._countrySel == 'United Kingdom'){
        starting_country = 'GB'
    }
    else if (game._countrySel == 'Canada'){
        starting_country = 'CA'
    }
    else if (game._countrySel == 'Mexico'){
        starting_country = 'MX'
    }
    else if (game._countrySel == 'France'){
        starting_country = 'FR'
    }
    else if (game._countrySel == 'Italy'){
        starting_country = 'IT'
    }
    else if (game._countrySel == 'China'){
        starting_country = 'CN'
    }
    else if (game._countrySel == 'India'){
        starting_country = 'IN'
    }


    var city_guess = document.getElementById("city_guess").value;
    var api_url = "https://api.api-ninjas.com/v1/city?country=" + starting_country + "&name=" + city_guess

    return get_api_call(api_url)
}

function check_if_answer(act_dict, guess_dict, name_check){
    /*
        Check if answer -> Returns if names match!
    */
    return (act_dict['name'] == guess_dict['name'] || name_check == act_dict['name'].toLowerCase())
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