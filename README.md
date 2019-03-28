Mini Express App [Fancy_Todo_List]

--description--
[Fancy_Todo_List] is a web application that will allow users to create lists with todo items.

• This application will be built using NodeJS [https://nodejs.org/en/]
  - NodeJS is a javascript runtime that allows javascript to be run on computer systems

• It will use ExpressJS as the web framework [https://expressjs.com/]
  - ExpressJS is a Web Framework built ontop of NodeJS
  - It uses NodeJS modules like HTTP, HTTPS, OS, PATH, NET, URL, and probably more under the hood.
  - We use it because it makes handling incoming http requests and outbound http requests easier and structured (request-response cycle https://expressjs.com/en/guide/writing-middleware.html)
  and provides structure to the way we design applications... IE routing is always done in a routes directory, view templates are always in a view directory, ect.
  - We could definitely do all the things ExpressJS does with only NodeJS but it'll probably make everybodys lives a lot easier if we stuck to a norm.

• It will use Knex.JS [https://knexjs.org/]
  - Knex.JS is QUERY BUILDER for many different databases including PostgreSQL. Meaning it is a "wrapper" on top of a database that allows you to write SQL queries using Javascript
  - Insead of writing raw SQL to query todo items like: SELECT * FROM todo_items WHERE id=685; We can just do: knex('todo_items').where('id', 685);
  - It also handles database migrations which is a pain in the butt to do without a migration manager
  - Database migrations are just snapshots of mutations to the schema of a database. All the migrations together create a history of all the changes to ever occur on an applications database. It's kind of like git... but for databases.
  - It also gives us a very easy way to populate our database with mock data using seed files

• It will use (Twitter) Bootstrap [https://getbootstrap.com/]
  - Bootstrap is a front-end library that helps you create views
  - Under the hood it's just a whole lot of HTML tags with specific ids and classes, CSS, and Javascript.
  - For visually crippled people like myself this is a godsend! Here are some example websites built on Bootstrap: https://startbootstrap.com/previews/sb-admin-2/, https://www.instacart.com/, https://www.themezaa.com/html/pofo/home-portfolio-metro.html, http://www.clearmotion.com/


--Spec-- 
• It should have nodemon installed and a start script using it.

• Should have the following routes:
  • GET "/" AND "todos"
    - This route will be our root or home page
    - It will display all of our Todo Items
  • GET "/todo/new"
    - This route will be our new todo form page
    - It will show a form that allows our current user create a todo item
  • POST "/todo"
    - This route will handle the request to create a todo item
    - It doesn't render its own view, it just recieves a request with parameters and responds accordingly
    - It should save a todo item with the passed parameters and username from the cookies into the database
  • GET "/login"
    - This route will be our login form
    - It will allow a user to log into our application through
  • POST "/login"
    - This route will handle a user loging in
    - It will just create a cookie with the username

• It should have middleware to parse the cookie (cookie-parser)
• It should have middleware to log server requests (morgan)
• It should have middleware to parse the request.body object (express encoder)
• It should have middleware to check if a todo item has a user
• It should have middleware to check if a todo item is blank

• It should have a navbar with links to the routes "/", "todo/new", "/login"

• It should have a database with one table called "todo_item" with the following columns:
  - id: number
  - username: string
  - body: string
  - created_at: timestamp
  - updated_at: timestamp

• The website should be styled with Twitter Bootstrap...