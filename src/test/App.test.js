import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Filters from '../components/Filters';
import Routers from '../components/Routers';

//Test to aiko front-end developer
describe('Test to SP rotas', () => {
  it('Load data to api', () => {

  });

  it('Should render Filters component', async () => {
    const { getByTestId } = render(<Filters/>)
    const fieldNode = await waitForElement(
      () => getByTestId('value-field')
    )
  });

  it('Should render Routers component', () => {
    
  })
})