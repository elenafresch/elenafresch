# Clean and standardize data

def clean_price(raw_price):
    # Example: "€1.200/mese" → 1200
    return float(raw_price.replace("€", "").replace("/mese", "").replace(".", ""))

def process_listings(raw_listings):
    processed = []
    for listing in raw_listings:
        processed.append({
            "title": listing["title"],
            "price": clean_price(listing["price"])
        })
    return processed