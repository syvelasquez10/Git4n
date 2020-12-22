import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import { formInputs } from '../candidateForm/candidate';
import { infoForm } from '../shared/cookieManager';
import './CandidateInfo.css';

const CandidateInfo = () => {

  const gridElements = infoForm.map((element, index) => (
    <Fragment key={index}>
      <Grid item xs={6}>
      <strong>{Object.values(formInputs)[index].label + ": "}</strong>{element}
    </Grid>
    </Fragment>)
  );
  
  const candidateInfo = ()=> {
    if(infoForm.length > 5) {
      return (
      <Card className="header">
        <CardHeader
          title="Información del candidato"
        />
        <CardContent className="card__content">
          <Grid container spacing={3}>
          {gridElements}
          </Grid>
        </CardContent>
      </Card>);
    } else {
      return <></>
    }
  };
  
  return candidateInfo();
};

export default CandidateInfo;