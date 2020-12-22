import React, { FC, useEffect, useState } from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { Card, CardContent, CardHeader, CircularProgress } from '@material-ui/core';
import './CandidateRepos.css';

interface CandidateReposProps {
	infoForm: string[];
}
const CandidateRepos: FC<CandidateReposProps> = ({infoForm}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${infoForm[3]}/repos`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if(result.message) {
            setError(result.message);
          } else {
            setRepos(result);
          }
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [infoForm])

  const loadRows = () => repos.map((repo, index) => ({ 
    id: index, 
    name: repo['name'], 
    language: repo['language'], 
    branch: repo['default_branch'], 
    url: repo['git_url'], 
    description: repo['description'] ? repo['description'] : 'Este repositorio no tiene descripción.'  }
  ));

  const columns: ColDef[] = [
    { field: 'name', headerName: 'Nombre', flex: 1},
    { field: 'language', headerName: 'Lenguaje', flex: 1},
    { field: 'branch', headerName: 'Branch por defecto', flex: 1},
    { field: 'url', headerName: 'Url Git', flex: 2},
    { field: 'description', headerName: 'Descripción', flex: 2},
  ];

  const render = () => {
    if(isLoaded && !infoForm[3]) {
      return <div className="candidate-repos-error">No se ha guardado ningún candidato del que se puedan ver repositorios de GitHub</div>
    } else if(isLoaded && repos.length > 0) {
      return <DataGrid rows={loadRows()} columns={columns} pageSize={5} />;
    } else if(isLoaded && error) {
      return <div className="candidate-repos-error">A ocurrido un error cargando los repositorios: {error}</div>
    } else {
      return <CircularProgress className="candidate-repos-progress" />;
    }
  };

  return (
    <Card className="candidate-repos">
      <CardHeader
        title="Repositorios del candidato"
      />
    <CardContent className="candidate-repos-content">
      {render()}
    </CardContent>
    </Card>
  );
};

export default CandidateRepos;