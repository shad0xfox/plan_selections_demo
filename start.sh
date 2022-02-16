#!/bin/sh
function getContainerHealth {
  docker inspect --format "{{.State.Health.Status}}" $1
}

function waitContainer {
  while STATUS=$(getContainerHealth $1); [ $STATUS != "healthy" ]; do 
    if [ $STATUS == "unhealthy" ]; then
      echo "Failed!"
      exit -1
    fi
    printf .
    lf=$'\n'
    sleep 1
  done
  printf "$lf"
}


docker run --name mysql --health-cmd='mysqladmin ping --silent' --platform linux/x86_64 \
    -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=plan_selections \
    -p 3310:3306 -d mysql:5.7

docker build -t plan_selections .

waitContainer mysql

docker run -d -p 3000:3000 \
  -e NODE_ENV="production" \
  -e DB_HOST=host.docker.internal \
  -e DB_PORT="3310" \
  -e DB_SCHEMA="plan_selections" \
  -e DB_USER_NAME="root" \
  -e DB_PASSWORD="password" \
  --name plan_selections plan_selections


docker exec plan_selections sh -c "node init_fixture.js;"
