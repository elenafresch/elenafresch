import psycopg2
from src.config import Config

def create_database():
    try:
        # Connect to PostgreSQL
        conn = psycopg2.connect(
            dbname='postgres',
            user='domu_user',
            password='123456788',
            host='localhost',
            port=5432
        )
        
        conn.set_session(autocommit=True)
        cur = conn.cursor()
        
        # Create database
        cur.execute('''
            CREATE DATABASE domu
        ''')
        
        # Create tables
        cur.execute('''
            CREATE TABLE listings (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255),
                description TEXT,
                price DECIMAL(10,2),
                location VARCHAR(100),
                features JSONB,
                created_at TIMESTAMP,
                updated_at TIMESTAMP,
                source VARCHAR(50),
                status VARCHAR(20)
            )
        ''')
        
        conn.close()
        print("Database created successfully!")
        
    except Exception as e:
        print(f"Error creating database: {e}")

if __name__ == '__main__':
    create_database()