import requests
import geopy.distance #geopy-2.3.0
import random


def get_initial_city(starting_range: str) -> dict:

    looking_for_city = True
    while looking_for_city == True:

        if starting_range == 'tenk':
            base_pop = 10000
            multiple = 20000
            rand_num = random.randint(0, 45)
        elif starting_range == 'hundredk':
            base_pop = 100000
            multiple = 20000
            rand_num = random.randint(0, 45)
        elif starting_range == 'onemil':
            base_pop = 100000
            multiple = 50000
            rand_num = random.randint(0, 235)

        
        

        min_pop = base_pop + multiple * rand_num
        max_pop = min_pop + multiple

        # print(min_pop, " ", max_pop)

        api_url = f'https://api.api-ninjas.com/v1/city?country=US&min_population={min_pop}&max_population={max_pop}&limit=1'

        try:
            # print('trying')
            response_dict = get_api_dict(api_url)
            # print('worked')
        except: 
            continue

        # print(response_dict)
        # print(response_dict['name'])
        # print(response_dict['population'])
        looking_for_city = False

        return response_dict


def get_api_dict(api_url: str) -> dict:

    response = requests.get(api_url, headers={'X-Api-Key': '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJR'})
    if response.status_code == requests.codes.ok:
        try:
            response_str = response.text[2:-2]
            response_str = response_str.replace('"', '')
            response_str = response_str.replace(' ', '')

            response_dict = dict(subString.split(":") for subString in response_str.split(","))
        except:
            print('failed here')
    else:
        print("Error:", response.status_code, response.text)
        

    return response_dict

def get_coord(response_dict: dict, coord_type: str) -> float:
    return float(response_dict['latitude']) if coord_type == 'lat' else float(response_dict['longitude'])

def get_distance(lat_act: float, lon_act: float, lat_guess: float, lon_guess: float) -> int:
    

    coords_1 = (lat_act, lon_act)
    coords_2 = (lat_guess, lon_guess)

    distance = round(geopy.distance.geodesic(coords_1, coords_2).mi)
    return distance


