# Banner Generator

This project generates png images given a html template and a CSV file.

## Prerequisites

- Node.js
- [graphicsmagick](http://www.graphicsmagick.org/)
- [ghostscript](https://www.ghostscript.com/)

## How to run
**Note**: You need to have graphicsmagick and ghostscript installed before run the project

```sh
yarn
yarn start -t <path to template> -c <path to csv> -a <path to assests folder>
```

## Testing

You can test the banner generator with an example on the project:

```sh
yarn start -t examples/templates/template1.html -c data.csv -a examples/templates/assets/
```

## Authors

- [Leandro Lima](https://github.com/limaleandro1999)