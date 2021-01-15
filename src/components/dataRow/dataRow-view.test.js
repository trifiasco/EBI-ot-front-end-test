import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import DataTableRow from './dataRow-view';
import sampleData from '../../utils/sampleData.json';

jest.mock('../charts/barChart', () => {
    const mockBarChart = () => <div />;
    return mockBarChart;
});

jest.mock('../charts/radarChart', () => {
    const mockRadarChart = () => <div />;
    return mockRadarChart;
});

afterEach(cleanup);

describe('Data Table Row - rendering', () => {
  test('that it renders without crashing', () => {
    const data = sampleData.data[0];
    render(
      <DataTableRow data={data}/>,
    );
  });

  test('chart area is initially collapse', () => {
      const data = sampleData.data[0];
      const {queryByTestId} = render(
        <DataTableRow data={data}/>,
      );

      expect(queryByTestId('chart-container')).toBeNull();
  });

  test('chart area is visible on icon click', async () => {
      const data = sampleData.data[0];
      const {findByTestId, getByTestId} = render(
        <DataTableRow data={data}/>,
      );

      const clickIcon = getByTestId('click-icon');
      fireEvent.click(clickIcon);
      const chartsContainer = await findByTestId('chart-container');
      expect(chartsContainer).toBeInTheDocument();
  });
});
