export interface GithubRepository {
  name: string;
  language: string;
  default_branch: string;
  git_url: string;
  description: string;
}
export interface GithubError {
  documentation_url: string;
  message: string;
}
