def match_properties(user_preferences, listings):
    matches = []
    for listing in listings:
        if (listing["price"] <= user_preferences["max_price"] and
            listing["size_sqm"] >= user_preferences["min_size"]):
            matches.append(listing)
    return matches