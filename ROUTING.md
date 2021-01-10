## EVENT CRUD

- GET/index	    => Show index / landing page
- GET/login	    => Show login page
- POST/login	  => Log user into app, and re-route to main page / resources
- GET/logout	  => Log user out , clear cookies, re-routes to index page
- GET/register  => Show register page
- POST/register	=> Add user to database, logs-in user and re-routes to / resources
- GET/addResource	  => Add new resource to database
- POST/addResource	=> Adds resource to database, reroutes to my resources
- GET/resources/categories/:category_name	=> Show resources filtered by category
- GET/resources	    => Show Main page with all resources / filtered Main page
- POST/resources/search?=:query	    => Filters resource titles by search query
- GET/resources/:username/:user_id	=> Show user's own resources
- POST/resources/:username/:user_id/search?=:query	=> Filters users own resource titles by search query
- GET/resources/:resource_id        => Specific resource info page
- POST/resources/:resource_id/like	=> Set isLike to true/false inside the database table, re-route to main page or ajax request
- POST/resources/:resource_id/rate	=> Set rating for specific resource in database table, re-route to the main page or ajax request
- GET/profile/:user_id  => User's profile page
- POST/profile/:user_id	=> User update profile, re-route to user profile page
