# Ng16SignalMilestoneRelease

<!-- prettier-ignore -->
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Cloning Guide

1.  Clone only the remote primary HEAD (default: origin/master)

```bash
git clone <url> --single-branch
```

2. Only specific branch

```bash
git clone <url> --branch <branch> --single-branch [<folder>]
```

```bash
git clone <url> --branch <branch>
```

3. Cloning repositories using degit

   - master branch is default.

```bash
npx degit github:user/repo#branch-name <folder-name>
```

4. Cloning this project with skeleton

```bash
git clone https://github.com/actionanand/ng16-signal-milestone-release.git --branch 1-skeleton-ngv16 angular-proj-name
```

```bash
npx degit github:actionanand/ng16-signal-milestone-release#1-skeleton-ngv16 angular-proj-name
```

## Automate using `Prettier`, `Es Lint` and `Husky`

1. Install the compatible node version

```bash
  nvm install v16.20.0
```

2. Install and Configure Prettier

   - Install prettier as below:

   ```bash
     yarn add prettier -D
   ```

   - Create a `.prettierrc` file and write down the format as below: - [online ref](https://prettier.io/docs/en/options.html)

   ```yml
   trailingComma: 'all'
   tabWidth: 2
   useTabs: false
   semi: true
   singleQuote: true
   bracketSpacing: true
   bracketSameLine: true
   arrowParens: 'avoid'
   printWidth: 120
   overrides:
     - files:
         - '*.js'
         - '*.jsx'
       options:
         bracketSpacing: true
         jsxSingleQuote: true
         semi: true
         singleQuote: true
         tabWidth: 2
         useTabs: false
     - files:
         - '*.ts'
       options:
         tabWidth: 2
   ```

   - Create a `.prettierignore` file and write as below(sample)

   ```gitignore
   # Ignore artifacts:
   build
   coverage
   e2e
   node_modules
   dist
   dest
   reports

   # Ignore files
   *.lock
   package-lock.json
   yarn.lock
   ```

3. Install `Es Lint`, if not installed

```bash
ng add @angular-eslint/schematics
```

4. Configure pre-commit hooks

Pre-commit hooks are a nice way to run certain checks to ensure clean code. This can be used to format staged files if for some reason they weren’t automatically formatted during editing. [husky](https://github.com/typicode/husky) can be used to easily configure git hooks to prevent bad commits. We will use this along with [pretty-quick](https://github.com/azz/pretty-quick) to run Prettier on our changed files. Install these packages, along with [npm-run-all](https://github.com/mysticatea/npm-run-all), which will make it easier for us to run npm scripts:

```bash
yarn add husky pretty-quick npm-run-all -D
```

To configure the pre-commit hook, simply add a `precommit` npm script. We want to first run Prettier, then run TSLint on the formatted files. To make our scripts cleaner, I am using the npm-run-all package, which gives you two commands, `run-s` to run scripts in sequence, and `run-p` to run scripts in parallel:

```json
  "precommit": "run-s format:fix lint",
  "format:fix": "pretty-quick --staged",
  "format:check": "prettier --config ./.prettierrc --list-different \"src/{app,environments,assets}/**/*{.ts,.js,.json,.css,.scss}\"",
  "format:all": "prettier --config ./.prettierrc --write \"src/{app,environments,assets}/**/*{.ts,.js,.json,.css,.scss}\"",
  "lint": "ng lint",
```

5. Initialize husky

   - Run it once

   ```bash
     npm pkg set scripts.prepare="husky install"
     npm run prepare
   ```

   - Add a hook

   ```bash
     npx husky add .husky/pre-commit "yarn run precommit"
     npx husky add .husky/pre-commit "yarn test"
     git add .husky/pre-commit
   ```

   - Make a commit

   ```bash
     git commit -m "Keep calm and commit"
     # `yarn run precommit and yarn test` will run every time you commit
   ```

6. How to skip prettier format only in particular file

   1. JS

   ```js
   matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

   // prettier-ignore
   matrix(
       1, 0, 0,
       0, 1, 0,
       0, 0, 1
     )
   ```

   2. JSX

   ```jsx
   <div>
     {/* prettier-ignore */}
     <span     ugly  format=''   />
   </div>
   ```

   3. HTML

   ```html
   <!-- prettier-ignore -->
   <div         class="x"       >hello world</div            >

   <!-- prettier-ignore-attribute -->
   <div (mousedown)="       onStart    (    )         " (mouseup)="         onEnd      (    )         "></div>

   <!-- prettier-ignore-attribute (mouseup) -->
   <div (mousedown)="onStart()" (mouseup)="         onEnd      (    )         "></div>
   ```

   4. CSS

   ```css
   /* prettier-ignore */
   .my    ugly rule
     {
   
     }
   ```

   5. Markdown

   ```md
     <!-- prettier-ignore -->

   Do not format this
   ```

   6. YAML

   ```yml
   # prettier-ignore
   key  : value
     hello: world
   ```

   7. For more, please [check](https://prettier.io/docs/en/ignore.html)

## Resources

1. [Angular v16 is here! - Official](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d)
2. [What's new in Angular 16](https://dev.to/this-is-angular/whats-new-in-angular-16-375b)
3. [Angular 16 previews new reactivity model](https://www.infoworld.com/article/3695589/angular-16-previews-new-reactivity-model.html)
4. [🅰️ New Angular 16 is Going Big in 2023: Everything You Need to Know](https://easy-web.medium.com/new-angular-16-is-going-big-in-2023-everything-you-need-to-know-3fc62b227aab)
5. [Lazy loading services in Angular. What?! Yes, we can.](https://itnext.io/lazy-loading-services-in-angular-what-yes-we-can-cfbaf586d54e)
6. [Angular 🚦 Signals 📡 (The future of Angular)](https://itnext.io/angular-signals-the-future-of-angular-395a69e60062)
7. [Signals in Angular – How to Write More Reactive Code](https://www.freecodecamp.org/news/angular-signals/)
8. [Upgrading an enterprise app to Angular 16](https://itnext.io/upgrading-an-enterprise-app-to-angular-16-4a92b1b29906)

![image](https://user-images.githubusercontent.com/46064269/236193114-2aeda878-f4d1-43ba-aeb2-4aaf7b3c7495.png)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular compatibility list

```bash
  npx ngvm compat
```

1. [Is there a compatibility list for Angular / Angular-CLI and Node.js? - stackoverflow](https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js)
2. [Version compatibility - Angular official](https://angular.io/guide/versions)
3. [Angular version node compatibility - gist](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3)
