import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { formInputs } from '../candidateForm/candidate';
import './CandidateInfo.css';

interface CandidateInfoProps {
	infoForm: string[];
}
const CandidateInfo: FC<CandidateInfoProps> = ({infoForm}) => {

  const gridElements = ()=> {
    if(infoForm.length > 5) {
      return infoForm.map((element, index) => (
          <Fragment key={index}>
            <Grid item xs={6}>
            <strong>{Object.values(formInputs)[index].label + ": "}</strong>{element}
          </Grid>
          </Fragment>
        )
      );
    } else {
      return <div className="candidate-info-error">No se ha guardado ningún candidato</div>;
    }
  };
    
    
  return (
    <Card className="header">
      <CardHeader
        title="Información del candidato"
      />
      <CardContent className="card-content">
        <Grid container spacing={3}>
        {gridElements()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CandidateInfo;