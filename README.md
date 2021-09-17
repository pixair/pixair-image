# Pixair Image Script

![tests status](https://github.com/pixair/pixair-image/actions/workflows/tests.yml/badge.svg)

This project generate a script that helps you to transform all your images with the Pixair API.

## Installation

First of all, clone this repository

Then

```
yarn install
```

## Tests

To check every thing is ok in this project before creating your script, you can run tests !

```
yarn test
```

## Build

First, change the configuration (`/src/config.ts`) according to your needs.

Then, to generate you script, execute the following command:

```
yarn build
```

Finally, you'll find your script in the `./dist/index.ts`

Feel free to rename it and include it inside the `<head>` tag of your website.

## Contribute

You can contribute to this project by doing pull requests on this repository.

Make sure to add automated tests and related documentation to your new feature.
