Project Description:

I plan to build of the grocery assignment. Instead of having grocery lists I plan on just making it to-do lists. I also plan on adding user authentication in which lists will be stored based on your account. In addition, I also plan on adding AJAX form requests.

Schemas:

Feedback: Will store all of the site's feedback forms.

	Elements:
		(1) Contact
		(2) Subject
		(3) Message

Tasks: Will store all the actual tasks being added to a list. May change what’s included inside of this schema.

	Elements:
		(1) Name
		(2) Checked
		(3) Slug

List: Will store the lists of tasks. Will also have a unique name and keep track of who created it.

	Elements:
		(1) Name
		(2) Created
		(3) Slug
		(4) Tasks

User: Stores all basic user information required to create an account.

	Elements:
		(1) Username
		(2) First Name
		(3) Middle Name
		(3) Last Name
		(4) Email Address
		(5) Password
		(6) List


Project Requirements:

(1) Will be using Express and MongoDB.
(2) 5 Route Handlers:
	Login
	Logout
	Register
	Create a List
	Add Task to List.
	Feedback
(3) 4 Forms:
	Creating an account
	Logging In
	Creating a List
	Adding Items to a List
	Submitting Feedback

(4) Plan to use Bootstrap to style the application.

(5) Using ParsleyJS as an External JS library that validates input on certain pages.


Additional Requirements:
	(1) (3 Points) Adding user authentication.
	(2) (2 Points) Client side form validation using a JS library.
	(3) (2 Points) Using CSS framework throughout my site.
	(4) (1 Point) MVC architecture.

Modules:

	(1) Express: Serves as the web framework for node. Handles webpages and what happens in its routes. Is responsible with what happens whenever you arrive to a certain webpage.
	(2) Path: Makes path manipulation easier. Could be use to normalize paths and remove any junk in a URL. Can also be used to append to a path. This is  used when you want to create URLS based on the name of a list as an example.
	(3) Favicon: Simply used for Favicons. It's not a necessity but its a great add on to make the site look a tad better.
	(4) Morgan: HTTP request logger middleware for node.js. Its used for loggin request details.
	(5) Cookie-Parser: Sessions are stored in cookies so we use this module to parse cookies.
	(6) Body-Parser: Used to parse any information in requests. Allow you to access information in both POST and GET requests.
	(7) Mongoose: Provides a schema-based solution to modeling application data. Allows us to create schemas for what we expect our objects to look and behave like. The way we design what a list should have depends entirely  on the schema.
	(8) Mongoose URL Slugs: Used to generate URL based slugs for mongoose models. Used to create URLs based on certain fields from the schema. This prevents two lists from having the same name.
	(9) Passport: Authentication middleware for Node. Used with Express applications. Supports authentication using a username and password, Facebook, Twitter, etc.
	(10) BCrypt-NodeJS: Used to encrypt and hash passwords. Make sure that users never actually see their password. Information remains safe this way.
	(11) Connect Flash: Used as a means to alert the user when something is wrong. For instance, if a user with that email address already exists or if your password is wrong.
	(12) Debug: Used to track what's going on and to identify any possible errors.
	(13) HBS: Used as the templating engine. Uses a base template file that all template files build off. Allows you to have repetitive code in multiple HTML files.
	(14) Method Override: Lets you use HTTP verbs such as PUT or DELETE in places where the client does not support it.
	(15) Nodemailer: Used for feedback forms. Able to use Gmail as the email platform that sends email. Needs an Gmail account in order to authenticate Gmail.
	(16) Nodemon: Restarts your application if any changes are made.
	(17) Slug: Used to create custom slugs in order to ensure lists name do not conflict with one  another.