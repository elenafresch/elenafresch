import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    DEBUG = os.getenv('DEBUG', 'False').lower() == 'true'
    DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///data/domu.db')
    SCRAPING_INTERVAL = int(os.getenv('SCRAPING_INTERVAL', '3600')) # 1 hour
    MAX_LISTINGS_PER_PAGE = int(os.getenv('MAX_LISTINGS_PER_PAGE', '50'))
