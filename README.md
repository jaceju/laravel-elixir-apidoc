# laravel-elixir-apidoc

Build API document by [apiDoc](http://apidocjs.com/)

## Install

```sh
$ npm install laravel-elixir-apidoc --save-dev
```

## Usage

Create the `apidoc.json` in root path:

```json
{
  "name": "example",
  "version": "0.1.0",
  "description": "apiDoc basic example",
  "title": "Custom apiDoc browser title",
  "url" : "https://api.github.com/v1"
}
```

Add document block in php file, for example:

```php
/**
 * @api {get} / Welcome Page
 * @apiName WelcomePage
 * @apiGroup Home
 * @apiVersion 0.1.0
 * @apiDescription Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu arcu scelerisque, mattis sapien sed, dapibus risus. Integer finibus diam sit amet semper imperdiet. Vivamus venenatis elit vitae venenatis dictum. Vivamus ac turpis at purus placerat iaculis et ut purus.
 *
 */
```

Then add the `apidoc` extension in your `gulpfile.js`:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-apidoc');

elixir(function(mix) {
  mix.apidoc();
});
```

Finally run gulp tasks:

```bash
gulp
```

Or rebuild apidoc only:

```bash
gulp apidoc
```

## License

MIT
