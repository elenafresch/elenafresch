import requests
from bs4 import BeautifulSoup

'''
Scrape individual agency websites, to be gathered from
the main ones. Usually listings are posted there first.
'''

def scrape_immobiliare():
    url = "https://www.immobiliare.it/affitto-case/milano/"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ..."
    }
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    listings = []
    for item in soup.find_all("li", class_="nd-list__item"):
        title = item.find("a", class_="nd-list__link").text.strip()
        price = item.find("li", class_="lif__item--price").text.strip()
        listings.append({"title": title, "price": price})

    return listings