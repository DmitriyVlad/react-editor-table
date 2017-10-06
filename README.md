![Logo of the project]()

# Name of the project
> Additional information or tag line

A brief description of your project, what it is used for.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

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

clone repository

```sh
git clone https://github.com/your/your-project.git
cd your-project/
```

install the required packages:

```sh
npm install
```

run dev environment:

```sh
npm run dev:hot
```

you can now open the app on [localhost:9000](http://localhost:9000/).

build the project for produtction:

```sh
npm run build
```

### Linting

For code linting we use [ESLint](http://eslint.org/) utility

when you run dev environment with command `npm run dev:hot`, you can see all eslint errors and warnings in your shell

for an explicit linting from shell run one of these commands:

```sh
npm run lint
```

```sh
npm run lint:cli
```

```sh
npm run lint:autofix
```

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Internationalization

For i18n we use [React Intl](https://github.com/yahoo/react-intl) package.

Intl messages for each language are stored in public/assets/**locales**
Markdown content is stored in public/assets/**content**

Markdown content should stored in **.md** files

New content should go to **{locale}{id}.md** file

### Deploying / Publishing

give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.

## Licensing

State what the license is and how to find the text version of the license.

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Structure

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

### React Components

* each component should bring its own .scss file

### SASS

* colors, sizes, etc should always come from our globale SASS variables
* globale sass variables should have `glob` prefix in name
* component variables should stored in component scss file
* component Sass is always contained within the component, it is not possible to change the component style form outside other than the modifiers
* component elements are separated with __ (2 underscores), e.g. .Component__Element
* component modifiers are separated with -- (2 dashes), e.g. .Component-xl
* component element never have modifiers!

Style guide for styles available here: [link](https://docs.google.com/document/d/1TdNxBM-chjVvDkEs7Gh3724KCICrXbj8lMnhZcT8CWY/edit?usp=sharing)

## Git Process

We are using git flow:

* new branches go to features/{ticket_no}_{ticket_title}
* master is our merging/development branch
* production is the production version
* all commit messages should end with - "ref #{ticket_no}"
* before making a Pull Request, make sure your feature branch builds successfully and passes all tests (including code style checks)
* create new branches only from **master**

Please make sure your code has no errors or warnings from the linter before you open a merge request:

```sh
npm run lint
```

Pull requests are for the master branch

## Soft/Tech used in project