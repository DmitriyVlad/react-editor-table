# React Table Editor

Table editor app for a two-column CSV format: the first column contains string value, the second one contains a numeric value.
Input data is loaded as file.

App contain following components:

* Input file uploader (with validator)
* Table view of the data with editable fields
* Aggregated results widget (sum, average)

## Demo

A demonstration of this app can be seen here: [demo](https://react-table-editor.netlify.com/)

## Installing

You should have installed [Node.js](https://nodejs.org/en/) version 6.11.1 or later.

1. Clone this repository and go to the project folder

   ```bash
   git clone https://github.com/DmitriyVlad/react-editor-table.git
   cd react-editor-table/
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
   npm run start
   ```

   You can now open the app on [localhost:3000](http://localhost:3000/).

## Data Schema

Input is a CSV file with two columns. Its first row is headers, all
subsequent - data itself. First column contains a string value and second one a numeric one.

You can use example csv file for testing. File located in example-data folder.

Example input:

```
Company,Income
Ace,42
Acme,7
Evil,28
```

Aggregated results widget shows sum of all the numeric values and average
value.

In **example-data** folder you can find example csv file for testing app.
