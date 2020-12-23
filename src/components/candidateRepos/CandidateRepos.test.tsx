import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CardHeader } from '@material-ui/core';
import CandidateRepos from './CandidateRepos';
import SearchField from '../shared/SearchField';
import { DataGrid } from '@material-ui/data-grid';

const infoFormTest = ['name', 'lastname', 'a@a.co', 'githubuser', 'id', '01-01-1990'];

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<CandidateRepos infoForm={infoFormTest} />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('candidate-repos')).toEqual(true);
});

it('renders the title', () => {
  expect(wrapped.find(CardHeader).length).toEqual(1);
});

it('renders Search Field component', () => {
  expect(wrapped.find(SearchField).length).toEqual(1);
});