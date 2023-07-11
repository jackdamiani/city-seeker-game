import functions as f
import random


lat_act = 0
lon_act = 0
lat_guess = 0
lon_guess = 0

location = 'New York'
location = location.lower()
guess = ''


response_dict = f.get_initial_city('hundredk')

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
        print('type a real city')
        continue

    lat_guess = f.get_coord(response_dict, 'lat')
    lon_guess = f.get_coord(response_dict, 'lon') 

    distance = f.get_distance(lat_act, lon_act, lat_guess, lon_guess)
    print(guess, " ", distance)

    if distance == 0:
        break

print("You Win!!")


