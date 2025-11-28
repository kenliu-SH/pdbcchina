#!/bin/bash

# Get a list of all tables in the current database
TABLES=`mysql -u root -p926458 -D protein_test -N -e "SHOW TABLES"`

# Loop through each table and import its tablespace
for TABLE in $TABLES
do
  mysql -u root -p926458 -D protein_test -e "ALTER TABLE $TABLE IMPORT TABLESPACE"
done