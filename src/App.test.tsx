import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import CandidateInfo from './components/candidateInfo/CandidateInfo';
import { Snackbar } from '@material-ui/core';
import CandidateForm from './components/candidateForm/CandidateForm';
import CandidateRepos from './components/candidateRepos/CandidateRepos';
import { Footer } from './components/footer/Footer';

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('App')).toEqual(true);
});

it('contains the SnackBar component', () => {
  expect(wrapped.find(Snackbar).length).toEqual(1);
});

it('contains the CandidateInfo component', () => {
  expect(wrapped.find(CandidateInfo).length).toEqual(1);
});

it('contains the CandidateForm component', () => {
  expect(wrapped.find(CandidateForm).length).toEqual(1);
});

it('contains the CandidateRepos component', () => {
  expect(wrapped.find(CandidateRepos).length).toEqual(1);
});

it('contains the Footer component', () => {
  expect(wrapped.find(Footer).length).toEqual(1);
});
