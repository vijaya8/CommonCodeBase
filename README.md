# CommonCodeBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#####This process for export module ans services and created as npm package.


1.Create two files ng-packagr and public_api.ts

2.include exported files in public_api.ts.

3.Add script in package.json file 

scripts : {
 "packagr": "ng-packagr -p ng-package.json".
}

4.using ng-packagr build the Cretaed module/service/model. It will create dis folder by run as 'npm run packagr'
 
5.moved to dist folder in terminal(cd dist) and run 'npm pack' it will pack and generate .zip file in dist.





