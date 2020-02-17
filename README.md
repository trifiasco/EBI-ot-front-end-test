# Technical Test

The Open Targets Platform aggregates and integrates data from more than 20 different data sources to
create evidence that builds and scores associations between diseases and genes (also known as targets).

Our association score ranges from 0 to 1 and is a harmonic sum of individual scores for 4 different
data types: literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model,
and affected_pathway.

A score of 0 corresponds to no evidence supporting an association . The closer the score is to 1, the
stronger the association. If you would like to know more about our association score, please
visit https://docs.targetvalidation.org/getting-started/scoring.

For this technical test, we would like you to create a data table and visualisation showing the association
scores for lung carcinoma and 5 genes (targets).

Create a data table with the following column headings:

Symbol
Gene ID
Gene Name
Overall Association Score

When a user clicks the “+”, please expand the row of the table. Please show either a bar chart or a radar chart of the association scores for each individual data type (literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway)

Please note the following requirements:

The data table should only have 5 rows
The data table should show the genes with the top overall association scores
By default, the data table should be sorted in decreasing order by the overall association score
For the bar chart or radar chart, please feel free to use any chart or data visualisation library that you are comfortable using, including:
D3
Chart.js
HighCharts
CanvasJS
Google Charts
Recharts
… or any other library that you are familiar with using

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
