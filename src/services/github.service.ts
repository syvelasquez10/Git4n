import axios from 'axios';
import { GithubRepository } from '../components/shared/github';

export const getRepository = (githubUser: string): Promise<GithubRepository[]> => {
  return axios.get(`https://api.github.com/users/${githubUser}/repos`).then((res) => res.data);
};
