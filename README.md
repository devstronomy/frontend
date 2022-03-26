# Description

This project contains the code-base for the frontend part of the Devstronomy project.

To find more information about the Devstronomy or to see an interactive demo of the data, visit
[Devstronomy Homepage](https://devstronomy.com/).

## Demo Screenshot

![Devstronomy demo](/demo.png?raw=true 'Devstronomy demo')

# For developers

## Running project locally

- Either using Docker:
  ```
  docker-compose run install-dependencies
  docker-compose up dev-server
  ```
- Or NPM: `npm install && npm start`

Then open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits (also when running via Docker).\
You will also see any lint errors in the console.

### Build and deploy

Run [`./bin/ds-build`](/bin/ds-build) script.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
