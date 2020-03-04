# jada.io

This is my website. It's built in React with `create-react-app`, `styled-components`, and it's tested with `jest` snapshot tests.

**[Try it at jada.io](https://jada.io)**

## Getting started
```
cd src
npm i
npm start
```

## Testing
```
npm test
```

## Architecture

* [Routing](https://github.com/jadaradix/jada-io/blob/master/src/src/index.js)
* [Pages](https://github.com/jadaradix/jada-io/tree/master/src/src/parts)
* [Components](https://github.com/jadaradix/jada-io/tree/master/src/src/components)

## Deployment

This is a containerised application that builds a Docker image with the build's static files. Run `docker build -t jada-io .` or try `build.sh` which pushes the image to GCR if you are authenticated as me 😊.
