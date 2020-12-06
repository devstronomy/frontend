# Description
This project contains the code-base for the frontend part of Devstronomy project.

To find more information about the Devstronomy or to see an interactive demo of the data, visit
[Devstronomy Homepage](https://devstronomy.com/).

## Demo Screenshot
![Devstronomy demo](/demo.png?raw=true "Devstronomy demo")

# For developers

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running project locally

* Either using Docker:
  ```
  docker-compose run ui-install-deps
  docker-compose up dev-server
  ``` 
* Or NPM: `npm install && npm start`

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits (also when running via Docker).\
You will also see any lint errors in the console.

## Notes

`package.json` contains `postinstall` script, which removes `@types/react-native`. This is a workaround for the issue
discussed here: : https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33311

### Build and deploy

Run [`./bin/ds-build`](/bin/ds-build) script.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
