# amplify-template

## Project setup
```
npm install
```

## How to build and publish functions to the cloud
```
Check out sample function code generated in <project-dir>/amplify/backend/function/amplifytemplate1da0ade9/src
"amplify function build" builds all of your functions currently in the project
"amplify function invoke personalloantest" enables you to test a function locally
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
```

## How to delete functions
```
amplify remove function
(select a function you want to remove)
```

## [IMPORTANT!!] How to zip lambda functions
```
# index.js と node_modules ディレクトリーのある場所に移動する！！
cd amplify/backend/function/function-name/src
npm install
zip -r ../function-name.zip .
```

## Cannot find module 'request'
```
cd amplify/backend/function/function-name/src
# 必ず --save オプションをつける！！
npm install request --save
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
