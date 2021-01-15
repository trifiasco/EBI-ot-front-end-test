import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DataTable from './dataTable-view';
import sampleData from './sampleData.json';

afterEach(cleanup);

describe('Data Table - rendering', () => {
  test('that it renders without crashing - without any data', () => {
    render(
      <DataTable data={[]}/>,
    );
  });

  test('that it renders without crashing - with data', () => {
    render(
      <DataTable data={sampleData.data}/>,
    );
  });

  test('that it renders a table component with 4 headers', () => {
    const {getByText} = render(
      <DataTable data={sampleData.data}/>,
    );

    expect(getByText('Symbol')).toBeInTheDocument();
    expect(getByText('Gene ID')).toBeInTheDocument();
    expect(getByText('Gene Name')).toBeInTheDocument();
    expect(getByText('Overall Association Score')).toBeInTheDocument();
  });
});
