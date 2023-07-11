import random
import functions as f


looking_for_city = True


while looking_for_city == True:
    
    multiple = random.randint(0, 45)

    min_pop = 100000 + 20000 * multiple
    
    max_pop = min_pop + 20000
    print(min_pop, " ", max_pop)

    api_url = f'https://api.api-ninjas.com/v1/city?country=US&min_population={min_pop}&max_population={max_pop}&limit=1'

    try:
        response_dict = f.get_api_dict(api_url)
    except: 
        continue

    print(response_dict)
    print(response_dict['name'])
    print(response_dict['population'])
    looking_for_city = False
