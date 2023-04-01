<h1 style="color: #52024a;"> Gym administration app </h1>

<h2 style="color: #850769;"> Technologies </h2>

### Laravel

[Documentation for Laravel](https://laravel.com/docs/10.x/).

`laravel new [project name]`

### Laravel Breeze

Laravel breeze is a starter kit for laravel which includes all Auth routes.

[Documentation for Breeze](https://laravel.com/docs/10.x/starter-kits#laravel-breeze).

`composer require laravel/breeze --dev`

### InertiaJS 

Laravel Breeze has been used in conjuction with the InertiaJS library in order to server a modern front-end using the Vue framework including `ssr`

`php artisan breeze:install vue --ssr`

<h2 style="color: #850769;"> Project set up </h2>

In order to use the current project you need to:

1. `git clone` the current repository
2. Add your local `db` credentials in the `.env` file
3. Run the `migration`s with `php artisan migrate` or if you are using `sail`(Docker) with `sail artisan migrate`
4. Start the `vite` server with `npm run dev` and visit the generated url.

<h2 style="color: #850769;"> Cheatsheet </h2>

### Create a user using tinker:

`php artisan tinker` to enter tinker.

```
User::create([
    "name"=> "larainfo",
    "email"=>"larainfo@gmail.com",
    "password"=>bcrypt("123456")
]);
```
### Create a user using tinker:

`php artisan tinker` to enter tinker.

```
User::destroy($userid);
```