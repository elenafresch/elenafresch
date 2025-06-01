import unittest
from src.app import app

class TestApp(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        self.app = app.test_client()
    
    def test_root_route(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.decode('utf-8'), "Ciao! Domu is up and running :)")

if __name__ == '__main__':
    unittest.main()