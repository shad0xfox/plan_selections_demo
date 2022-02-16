# Plan selection demo

## Description
A page show all the plans to select, free to modify the plan data

## Skill
express, react, mysql, sequelize, docker

## create mysql
(if MAC M1, need --platform linux/x86_64)

docker run --name mysql --platform linux/x86_64 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=plan_selections -p 3310:3306 -d mysql:5.7

## init database
node server/init_fixture.js

<br/>

## How to run local (Separately start the front-end and back-end)
Please watch `README.md` in `server` and `app` folders

<br/>

## How to run local (docker)

```sh
./start.sh
```

<br/>


## API document
With swagger.yaml, we can preview it in vscode after install Swagger Viewer plugin.  

We can also get yaml link from Raw of [github yaml file](https://github.com/shad0xfox/plan_selections_demo/blob/master/swagger.yaml) and then paste the link to [SwaggerUI](https://petstore.swagger.io/)

## TODO List

Back-end: 
- [X] unit test
- [ ] patch plan
- [ ] post itemsOfPlan
- [ ] delete itemsOfPlan
- [ ] patch itemsOfPlan  

Front-end
- [ ] update plan page
- [ ] unit test