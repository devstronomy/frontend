# Description
This project contains the code-base for the frontend part of Devstronomy project.

To find more information about the Devstronomy or to see an interactive demo of the data, visit
[Devstronomy Homepage](https://devstronomy.com/).

## Demo Screenshot
![Devstronomy demo](/demo.png?raw=true "Devstronomy demo")

# For developers

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running project locally

### Using Docker

```sh
docker image build -t ds-ui:dev . # builds the image
docker run -v ${PWD}:/app -v /app/node_modules -p 80:3000 --rm ds-ui:dev # starts the container
```

### Using `npm`
In the project directory, run:

```sh
npm start
```

### Hybrid: using local `npm` to run Docker

```sh
npm run docker:build
npm run docker:run
```
 
You may prefer to `npm run watch-css` during development (until we switch fully to Styled Components).

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Build and deploy

Run [`./bin/ds-build`](/bin/ds-build) script.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
