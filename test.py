import requests
import functions as f
api_url = f'https://api.api-ninjas.com/v1/city?name=virginiabeach'
response_dict = dict()
try:
    response_dict = f.get_api_dict(api_url)
except:
    pass

print(response_dict)