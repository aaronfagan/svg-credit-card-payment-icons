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

To view a demo HTML page that displays that available icons:

```shell
$ npm run serve
```

Now you can visit the host web page at `localhost:8080`.
