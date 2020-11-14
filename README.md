# Angular — Magic: The Gathering

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10, using an [API service](https://magicthegathering.io) to get info about MTG cards.

## Project steps

**Note:** For this project you only need to do `npm install` to get the npm packages. You don't need to install each package.

### 1. Create Angular project (with Angular Routing and SCSS).

After installing [Node.js](https://nodejs.org/):

```bash
$ npm install -g @angular/cli
$ ng new angular-magic
$ cd angular-magic
$ ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) to preview the project.

### 2. Add Bootstrap and jQuery.

```bash
$ npm i --save jquery
$ npm i --save bootstrap@4
```

At the `angular.json` file:

```javascript
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

### 3. Create module and add its components.

```bash
$ ng g m magic --routing
$ ng g c magic/home --skipTests=true
$ ng g c magic/cards-list --skipTests=true
$ ng g c magic/sets-list --skipTests=true
```

At the `app-routing.module.ts` file:

```javascript
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./magic/magic.module').then(
      module => module.MagicModule
    )
  }
];
```

### 4. Create http service.

```
$ ng g s services/magic
```

### 5. Add interfaces and add queries.

```
$ ng g i services/interfaces
```

### 6. Updated html views at the components, assets and connect with the service.

### 7. Export project for production.

```
$ ng build --prod
```
