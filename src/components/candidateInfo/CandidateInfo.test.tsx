import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CandidateInfo from './CandidateInfo';
import { CardHeader } from '@material-ui/core';

const infoFormTest = ['name', 'lastname', 'a@a.co', 'githubuser', '1234567', '01-01-1990'];
const emptyInfoFormTest = [''];

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<CandidateInfo infoForm={infoFormTest} />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('header')).toEqual(true);
});

it('renders the title', () => {
  expect(wrapped.find(CardHeader).length).toEqual(1);
});

it('renders the elements of the infoFormTest', () => {
  expect(wrapped.find('strong').length).toEqual(infoFormTest.length);
  expect(wrapped.find('.candidate-info-error').length).toEqual(0);
});

it('renders the error message when there are no values in infoForm', () => {
  const errorWrapped = shallow(<CandidateInfo infoForm={emptyInfoFormTest} />);
  expect(errorWrapped.find('.candidate-info-error').length).toEqual(1);
  expect(errorWrapped.find('strong').length).toEqual(0);
});

it('renders the right value for each of the elements of the infoFormTest', () => {
  const cookieValues = wrapped.find('.infoFormValue');
  cookieValues.forEach((value, index) => {
    expect(value.text()).toEqual(infoFormTest[index]);
  });
});
