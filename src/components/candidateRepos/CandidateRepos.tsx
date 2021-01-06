import React, { FC, useEffect, useState } from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { Card, CardContent, CardHeader, CircularProgress } from '@material-ui/core';
import SearchField from '../shared/SearchField';
import { getRepository } from '../../services/github.service';
import { GithubRepository } from '../shared/github';
import './CandidateRepos.css';

interface CandidateReposProps {
  infoForm: string[];
}
const CandidateRepos: FC<CandidateReposProps> = ({ infoForm }) => {
  const emptyRepos: GithubRepository[] = [];
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState(emptyRepos);
  const [originalRepos, setOriginalRepos] = useState(emptyRepos);

  useEffect(() => {
    if(infoForm[3]) {
      getRepository(infoForm[3]).then(
        (result) => {
          setRepos(result);
          setOriginalRepos(result);
          setIsLoaded(true);
        },
        (_) => {
          setError('Hubo un problema cargando los datos de GitHub');
          setIsLoaded(true);
        },
      );
    } else {
      setIsLoaded(true);
    }
  }, [infoForm]);

  const loadRows = () =>
    repos.map((repo, index) => ({
      id: index,
      name: repo['name'],
      language: repo['language'],
      branch: repo['default_branch'],
      url: repo['git_url'],
      description: repo['description'] ? repo['description'] : 'Este repositorio no tiene descripción.',
    }));

  const columns: ColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'language', headerName: 'Lenguaje', width: 150 },
    { field: 'branch', headerName: 'Branch por defecto', width: 150 },
    { field: 'url', headerName: 'Url Git', width: 250 },
    { field: 'description', headerName: 'Descripción', width: 300 },
  ];

  return (
    <Card className="candidate-repos">
      <CardHeader title="Repositorios del candidato" />
      {isLoaded && repos.length > 0  && <SearchField repos={repos} originalRepos={originalRepos} setRepos={setRepos} /> }
      <CardContent className="candidate-repos-content">
        {isLoaded && !infoForm[3] && (
          <div className="candidate-repos-error">
            No se ha guardado ningún candidato del que se puedan ver repositorios de GitHub
          </div>
        )}
        {isLoaded && infoForm[3] && repos.length === 0 && (
          <div className="candidate-repos-error">
            No hay repositorios que contengan esos caracteres en su nombre
          </div>
        )}
        {isLoaded && repos.length > 0 && <DataGrid rows={loadRows()} columns={columns} pageSize={5} />}
        {isLoaded && error && <div className="candidate-repos-error">{error}</div>}
        {!isLoaded && <CircularProgress className="candidate-repos-progress" />}
      </CardContent>
    </Card>
  );
};

export default CandidateRepos;
