# %%

import psycopg2
import pandas as pd

# Connect to db
conn = psycopg2.connect(
    host="public-rw.postgresql-e00z8jwxa27v4ekr7x.backbone-e00g4teqcpmz03de0b.msp.eu-north1.nebius.cloud",
    port=5432,
    sslmode="verify-full",
    dbname="sales",
    user="sales_analyst",
    password="sfk64bs$Fb3"
)

# Inspect database
cur = conn.cursor()
cur.execute("""SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';""")
tables = cur.fetchall()
#print("Tables in database:", tables)

"""
0  pg_stat_statements_info
1       pg_stat_statements
2                 accounts
3          data_dictionary
4                 products
5           sales_pipeline
6              sales_teams
"""

#1 How are our sales going?
## Provide a concise report of the current situation
## Design a Sales Pipeline Dashboard. What key metrics would you include?
## What additional data would you like to collect, and why?

query = "SELECT * FROM accounts LIMIT 10"
df = pd.read_sql(query, conn)
df


#2 Conversion to first GPU consumption
## How can we increase conversion from registration to first GPU consumption for individual users?
## Propose an action plan, considering the following:
### What hypotheses do you have?
### What metrics would you track and measure to check these hypotheses?
# %%
