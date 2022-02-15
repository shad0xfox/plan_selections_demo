## create mysql
(if MAC M1, need --platform linux/x86_64)

docker run --name mysql --platform linux/x86_64 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=plan_selections -p 3310:3306 -d mysql:5.7

## run server
-- copy env file

cp server/src/.env.sample server/src/.env

-- init database

node server/init_fixture.js

-- start server

node src/bin/server.js
## test
npm run test