import React from 'react';
import { shallow } from 'enzyme';
import PlanetsContent from '../components/pages/PlanetsContent';
describe('PlanetsContent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<PlanetsContent />);

        expect(component).toMatchSnapshot();
    });
});
