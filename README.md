![Logo of the project]()

# Name of the project
> Additional information or tag line

A brief description of your project, what it is used for.

## Demo

A demonstration of this app can be seen ...

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

## Tasks

* `npm run start` - same as `npm run dev:hot`
* `npm run dev:hot` - run development environment
* `npm run build` - build the project
* `npm run lint` - linting javascript with **ESLint**
* `npm run lint:autofix` - fix as many issues as possible relatives to **ESLint** configuration
* `npm run lint:styles` - linting `.scss` styles with **stylelint**
* `npm run test:orpho` - test orthography in `.html` and `.md` files
* `npm run translations:check` - run translationcheck script

## Developing

### Built With

List main libraries, frameworks used including versions (React, Angular, etc...).

* React
* React-Router
* Redux
* Babel
* Webpack

### Prerequisites

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

You should have installed [Node.js](https://nodejs.org/en/) version 6.11.1 or later.

### Development Setup

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

1. Clone this repository and go to the project folder

    ```bash
    git clone https://github.com/your/your-project.git
    cd your-project/
    ```

2. Install the required packages/modules:

    ```bash
    npm install
    ```

    or with [yarn](https://yarnpkg.com/lang/en/):

    ```bash
    yarn install
    ```

3. Run dev environment:

    ```bash
    npm run dev:hot
    ```

    You can now open the app on [localhost:9000](http://localhost:9000/).

### Structure

* **docs** - Documentation for project
  * **designs** - 
* **public** - static content for the build that are not part of the react app
* **src** - all source files
  * src/**actions** - redux actions
  * src/**api** - api client to be used by the actions
  * src/**components** - react components
    * src/components/**atoms** - atomic components if not provided by blueprint (those will be functions most of the time)
    * src/components/**molecules** - Class components combining Atoms (own and blueprint)
    * src/components/**organisms** - more complex components, can connect to redux store
    * src/components/**containers** - Layout components to be used in views
    * src/components/**views** - View components, also used for routing within the app
* **styles** - global sass styles
  * styles/**mixin** - sass mixins
  * styles/**typography** - styles for typography
  * styles/**variables** - global variables

```bash
build/                        # Build folder
designs/                     # All layouts, sketchs and etc (.psd, .ai, etc.)
docs/                         # Documentation for project
public/                       # Static content for the build that are not part of the app
scripts/                      # Utility scripts
src/                          # Source folder
    actions/                  # Redux actions
    api/                      # Api client to be used by the actions
    components/               # React components
        atoms/                # Atomic components
        molecules/            # Class components combining Atoms
        organisms/            # More complex components, can connect to redux store
        containers/           # Layout components to be used in views
        views/                # View components, also used for routing within the app
    img/                      # Images
        svg/                  # SVG images
    styles/                   # Global Styles
        generated/            # Generated styles (for sprites)
        helpers/              # Helper files
            _fonts.scss       # Include fonts
            _grid.scss        # Styles for grid
            _mixins.scss      # Mixins
            _typography.scss  # Styles for typography
            _variables.scss   # Global variables
        _base.scss            # Base styles
        _print.scss           # Styles for print
        main.scss             # Our root file in which imports all other styles
.editorconfig                 # Configuration for editors
.eslintrc                     # Configuration for ESLint
.eslintignore                 # List of excluded file for ESLint
.gitignore                    # List of excluded files for Git
.stylelintrc                  # Configuration for Stylelint
package.json                  # Project configuration
README.md                     # Documentation for this starter project
webpack.config.js             # Configuration for Webpack
```

### React Components

* Each component should bring its own `.scss` file.
* Define 1 component per file, recommended to be less than 400 lines of code.

### Styles

* colors, sizes, etc should always come from our globale Sass variables
* globale Sass variables should have `glob` prefix in name
* component variables should stored in component `.scss` file
* component Sass is always contained within the component, it is not possible to change the **component style** form outside other than the modifiers
* component elements are separated with __ (2 underscores), e.g. .Component__Element
* component modifiers are separated with -- (2 dashes), e.g. .Component-xl
* component element never have modifiers!

### Linting / Formatting

For code linting we are using [ESLint](http://eslint.org/) and [Prettier](https://prettier.io/) for code formatting.

When you run dev environment with command `npm run dev:hot`, you can see all eslint errors and warnings in your shell

for an explicit linting from shell run one of these commands:

```bash
npm run lint
```

```bash
npm run lint:cli
```

```bash
npm run lint:autofix
```

### Git hooks

We are using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). Before each `git commit` the linter for scripts and styles is launched.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

Build the project for production:

```bash
npm run build
```

Here again you should state what actually happens when the code above gets
executed.

### Internationalization

For i18n we use [React Intl](https://github.com/yahoo/react-intl) package.

Intl messages for each language are stored in `public/assets/locales`
Markdown content is stored in `public/assets/content`

Markdown content should stored in `.md` files

New content should go to ``{locale}{id}.md`` files.

### Deploying / Publishing

Give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```bash
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Configuration

Here you should write what are all of the configurations a user can enter when using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```bash
Give an example
```

## Style guide

Explain your code style and show how to check it.

Tools for documentation and style guides:

* [react-styleguidist](https://react-styleguidist.js.org/)
* [storybook](https://storybook.js.org/)
* [atomics docs](http://atomicdocs.io/)
* [daux.io](http://daux.io/)
* [dexy](http://www.dexy.it/)

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.

## Database

Explaining what database (and version) has been used. Provide download links. Documents your database design and schemas, relations etc...

## Licensing

State what the license is and how to find the text version of the license.