Install required tooling:

```shell
$ npm install
```

Build the module during development:

```shell
$ npm run build:develop
```

This generates output in the `dist/` directory.

Build a version of the module for production:

```shell
$ npm run build:release
```

Note that the `build` alias generates a production release by default:

```shell
$ npm run build
```

To view a demo HTML page that displays the available icons:

```shell
$ npm run start
```

Now you can visit the demo page at `localhost:8080` (it should open in your browser automatically).

To run the unit tests:

```shell
$ npm run test
```

Now you can visit the test page at `localhost:8080` (it should open in your browser automatically).
