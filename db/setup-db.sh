#!/bin/bash
set -e

psql -U postgres -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\""
POSTGRES="psql --username ${POSTGRES_USER}"
echo "DB Setup"
DATABASES=($POSTGRES_DEV_DB $POSTGRES_TEST_DB $POSTGRES_PROD_DB)
for i in ${DATABASES[@]}; do
  echo "Creating database: ${i}"
  psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = '${i}'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE \"${i}\""
done
