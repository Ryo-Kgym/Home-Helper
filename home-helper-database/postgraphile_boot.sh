DATABASE_URL="postgres://household:household@localhost:5432/household_db"

postgraphile \
  --export-schema-graphql household.graphql \
  --connection $DATABASE_URL \
  --schema public