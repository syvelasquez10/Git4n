import React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import CandidateForm from './CandidateForm';
import { CardHeader } from '@material-ui/core';
import FormField from '../shared/FormField';

const infoFormTest = ['name', 'lastname', 'a@a.co', 'githubuser', '1234567', '01-01-1990'];

const propsTest = {
  setSnackBar: (snackBarMessage: string) => {},
  setInfoForm: (infoForm: string[]) => {},
};

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<CandidateForm {...propsTest} />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('candidate-form')).toEqual(true);
});

it('renders the title', () => {
  expect(wrapped.find(CardHeader).length).toEqual(1);
});

it('renders the FormFiled component', () => {
  expect(wrapped.find(FormField).length).toEqual(1);
});

it('when form is submitted, the inputs are emptied', () => {
  const component = mount(<CandidateForm {...propsTest} />);
  component.find('input').forEach((input, index) => {
    input.simulate('change', {
      target: { value: infoFormTest[index] },
    });
  });
  component.update();
  component.find('form').simulate('submit');
  component.update();
  component.find('input').forEach((input) => {
    expect(input.prop('value')).toEqual('');
  });
  component.unmount();
});
