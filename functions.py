import requests
import geopy.distance #geopy-2.3.0

def get_api_dict(api_url: str) -> dict:

    response = requests.get(api_url, headers={'X-Api-Key': '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJR'})
    if response.status_code == requests.codes.ok:
        try:
            response_str = response.text[2:-2]
            response_str = response_str.replace('"', '')
            response_str = response_str.replace(' ', '')

            response_dict = dict(subString.split(":") for subString in response_str.split(","))
        except:
            print('Failed, Try Again')
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


