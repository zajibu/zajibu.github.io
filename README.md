# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using GitHub pages & GitHub actions:

```
git push origin main
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### PNG image compression

[pngquant](https://crates.io/crates/pngquant) is a PNG compressor that significantly reduces file sizes by converting images to a 
more efficient 8-bit PNG format with alpha channel (often 60-80% smaller than 24/32-bit PNG files). Compressed images are fully 
standards-compliant and are supported by all web browsers and operating systems.

```
pngquant --force --ext=.png --quality=65-80 *.png
```
