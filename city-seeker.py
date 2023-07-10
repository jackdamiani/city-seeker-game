import functions as f


lat_act = 0
lon_act = 0
lat_guess = 0
lon_guess = 0

location = 'New York'
location = location.lower()
guess = ''


api_url = f'https://api.api-ninjas.com/v1/city?country=US&max_population=500000&limit=1'
try:
    response_dict = f.get_api_dict(api_url)
except:
    print('Failed')

# print(response_dict)

location = response_dict['name']
location = location.lower()

lat_act = f.get_coord(response_dict, 'lat')
lon_act = f.get_coord(response_dict, 'lon')

while guess != location:
    guess = input('Guess: ')
    guess = guess.lower()

    api_url = f'https://api.api-ninjas.com/v1/city?name={guess}'
    try:
        response_dict = f.get_api_dict(api_url)
    except:
        print('Failed')

    lat_guess = f.get_coord(response_dict, 'lat')
    lon_guess = f.get_coord(response_dict, 'lon') 

    distance = f.get_distance(lat_act, lon_act, lat_guess, lon_guess)
    print(guess, " ", distance)
    if distance == 0:
        break

print("You Win!!")



# location = 'new york'
# api_url = f'https://api.api-ninjas.com/v1/city?name={location}'
# response = requests.get(api_url, headers={'X-Api-Key': '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJR'})
# if response.status_code == requests.codes.ok:
#     response_str = response.text[2:-2]
#     response_str = response_str.replace('"', '')
#     response_str = response_str.replace(' ', '')

#     response_dict = dict(subString.split(":") for subString in response_str.split(","))
    
#     lat_act = float(response_dict['latitude'])
#     lon_act = float(response_dict['longitude'])

# else:
#     print("Error:", response.status_code, response.text)




# guess = 'San Francisco'
# api_url = f'https://api.api-ninjas.com/v1/city?name={guess}'
# response = requests.get(api_url, headers={'X-Api-Key': '1/IM/Lmf6TebQhklcoTpiQ==sHCkkzz1m4vHjTJR'})
# if response.status_code == requests.codes.ok:
#     response_str = response.text[2:-2]
#     response_str = response_str.replace('"', '')
#     response_str = response_str.replace(' ', '')

#     response_dict = dict(subString.split(":") for subString in response_str.split(","))
    
#     lat_guess = float(response_dict['latitude'])
#     lon_guess = float(response_dict['longitude'])
# else:
#     print("Error:", response.status_code, response.text)