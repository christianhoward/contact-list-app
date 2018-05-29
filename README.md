# Contact List App
This is a contact list web app for storing contacts. 

## Technologies Used
- React/Redux
- Node/Express
- MongoDB
- HTML/CSS
- Heroku

## File Structure 
In the root directory, you'll find a `client` folder that contains all of the React/Redux front-end structure. Everything else is related to the Node/Express back-end structure.

The back-end is structured into multiple folders containing `configurations`, `MongoDB models` and `API routes`, as well as the `router.js` and `server.js` files.

The front-end is created using `Create-React-App`, so the file structure follows that layout. For the most part, everything is in the `src` folder where you will find folders for `actions`, `components` and `reducers`, as well as the `index.css` and `index.js` files.

All npm packages for the front-end can be found in the `package.json` file inside the `client` folder, while all npm packages for the back-end can be found in the `package.json` file in the root directory.

## Running the App
This [application](https://thawing-lake-23793.herokuapp.com/) is hosted on Heroku, so feel free to check it out there. If you want to play around with this locally, you'll need to configure a `dev.js` file for the server configuration (this would look very similar to the `prod.js` file) and set up a MongoDB instance (I recommend a free sandbox instance from [mLab](https://mlab.com/).) To run the app locally, make sure you are in the root directory and use the `npm run dev` command in your command line.

## Questions??
If you have any questions, please feel free to contact me.
