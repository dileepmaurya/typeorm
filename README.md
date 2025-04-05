# Awesome Project Build with TypeORM

Steps to run this project:

## Add database details in .env file
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=XXXXX
    DB_PASSWORD=XXXXX
    DB_NAME=MyStore
    DB_LOGGING=true
## As of now database type coded as `mysql` only

1. Run `npm i` command
2. Run migration `npm run migration:run` command
3. Create seed `npm run seeds` command

## To setup locally 
1. Run `npm run build` commad
   - it will create the `dist` folder
2. To use it in backend
   - Make sure your backend and model code at same path segment
   - then add `model` as dependency in backend project `"models": "file:../mystore-model"`
   - Incase your backend is not at same path level then `"models": "file:../<YOUR_PATH>/mystore-model"`
   - finally run `npm i`
