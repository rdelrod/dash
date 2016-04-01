# Dash

Dashboard to do stuff for the server later on...

## Prepare the enviroment:

```bash
make
```

## Manual

```bash
pushd web
npm install
npm install -g gulp-cli

pushd semantic
gulp build
popd

gulp sass
popd
```

## Running

We use devd for development.

```bash
sudo pacman -S devd
```

```bash
devd . -A 127.0.0.1 -p 3000 & gulp sass:watch
```
