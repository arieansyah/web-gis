## Technologies
Project is created with:
* Express.js
* PostgreSQL
* PostGis

# Installation
Before that must be `Create Database` and open `Terminal(Linux,Mac)` or `CMD(Windows)`
```
$ cd ../lorem
$ npm install
$ cp env.example .env
```
Update Configuration in file `.env`
<br>To run this project, install it locally using npm:
```
$ npm start
```
or
```
$ npm run dev
```

# Migration
open Postman with `POST` method
```
http://localhost:3000/migration/table
```

# Seeder
open Postman with `POST` method
```
http://localhost:3000/seed/seed
```

Open Browser http://localhost:3000/map

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://arieansyah.github.io/)

To the extent possible under law, [Arieansyah](https://arieansyah.github.io/) has waived all copyright and related or neighboring rights to this work.


