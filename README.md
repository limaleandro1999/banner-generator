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

## How to generate banners

To genarate a banner you need to provide a template like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div>
      <img src="{{ speaker_photo }}" alt="Avatar">
      <p>{{ title }}</p>
      <p>{{ speaker_name }}</p>
      <p>{{ day }} de {{ month }}, {{ start_hour }} às {{ end_hour }}</p>
      <div>
        <p>Assistir em:</p>
        <p>{{ link_live }}</p>
      </div>
    </div>
  </body>
</html>
```

And for the template you need to provide a CSV file with the dinamic data like this:

```csv
title,speaker_photo,speaker_name,day,month,start_hour,end_hour,link_live
Node Rocks!,https://avatars2.githubusercontent.com/u/17753354?s=460&u=622e4b565c718c7dccfbeba479fd6d1612135433&v=4,Leandro Lima,14,Maio,20h00,21h00,bit.ly/NerdZao
How to no kill yourself withJavascript,https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDofwCg8aUixdLDvMF8L7HbKHQrc2vb41wTcxnTzUfZhIGjiMg&usqp=CAU,Algum brother ai 2,15,Junho,20h01,21h01,bit.ly/NerdZao2
Why AWS?,https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-izOjjzkSIOg1eJw-DzOBZvNmd_C6LzWyLNQj2g8bBDjHtXyi&usqp=CAU,Leandro Lopes,5,Dez,21h01,22h01,bit.ly/NerdZao6
```

- The template uses the CSV headers to get the dynamic data
- The example above should generates 3 banners, since the `banner-generator` generates a banner per CSV line (expect the header line)

## Authors

- [Leandro Lima](https://github.com/limaleandro1999)
