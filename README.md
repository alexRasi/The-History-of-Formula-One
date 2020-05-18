# The-History-of-Formula-One
 It's hosted at: https://alexrasi.github.io/TheHistoryOfFormulaOne

A simple API Data Explorer on top of which is being built an Angular application which visualizes some of the Ergast Developer API data.
The Ergast Developer API is a service which provides a historical record of motor racing data. http://ergast.com.
The explorer is responsive, supports nested caching, pagination and it's fully configurable.

# Description
This craft is not only a History of Formula 1 application, but a general simple API Data Explorer which can be integrated
with a little bit of extra work to show whatever data the developer prefers. Just create a `service` implementing the DataFetching service
to get your data, define your data model and transform it to either `CardDisplayPageGenericData` when you prefer to display a card list of data,
or `ItemDisplayPageGenericData` when you prefer to display a single object. Then add an extra route in the routing component you prefer
and lazy load the corresponding Card or Item page module given the unique service injection `token` which defines your service's name.
You can configure the navbar link by using the config.ts file in the environment folder. From there you can add a navbar name and its link.
You don't have to care about `cache` or  `pagination`. Everything has been take cared of behind by the generic components and services.
You can configure the pagination limit from the config.ts file

# Architecture
The application consists of 4 basic modules. The UI module with every component and ui service, the pages modules used to implement the routing
with lazy loading, and the (may be over engineered to be a module but could scale better in the future) cache and data fetching modules.
The models folder contains every DTO and model interface we need and the config.ts file inside the environments folder is used for configuration.

There are 2 kinds of data displaying pages. CardDisplayPageComponent and ItemDisplayPageComponent.
Each of them is used to receive data with a specific model.
During routing, we inject a service that gets, transforms and returns its data to its component.
The dependency injection is being achieved with an injection token during the routing,
so that the component should load the corresponding service and fill its datasource.

The cache is being implemented by acessing an element of the caches array given the name of the unique service's token.
The CacheService is a singleton service. Since the tokens are unique, so will be the caches.
In case of nested data, the query id parameter is also used to calculate the cache's name.

External dependencies are the bootstrap library and the fontawesome icons. Fontawesome is being loaded inside the index.html script.

## How to run it locally
1. We need to use the Node.js package manager. If you don't have it installed, download and install the Node.js runtime. 
2. We will use the Angular CLI. To install it run `npm install -g @angular/cli`.
3. Run `npm install` to install the required packages.
4. Run `ng serve --open` to serve and open it in your browser at `http://localhost:4200/`.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

