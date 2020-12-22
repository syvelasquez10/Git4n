import { Button, Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import CandidateForm from './candidateForm/CandidateForm';
import CandidateInfo from './candidateInfo/CandidateInfo';
import CandidateRepos from './candidateRepos/CandidateRepos';
import { Footer } from './footer/Footer';
import { infoFormValue } from './shared/cookieManager';
import SimpleDialog from './shared/SimpleDialog'

function App() {
  const [isDialogVisible, setDialog] = useState(false);
  const [infoForm, setInfoForm] = useState(infoFormValue());
  const handleClose = () => {
    setDialog(false);
  };
 
  return (
    <div className="App">
      <CandidateInfo infoForm={infoForm}/>
      <SimpleDialog open={isDialogVisible} onClose={handleClose} />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isDialogVisible}
        autoHideDuration={6000}
        onClose={handleClose}
        message="El candidato fue guardado"
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            cerrar
          </Button>
        }
      />
      <CandidateForm setDialog={setDialog} setInfoForm={setInfoForm}/>
      <CandidateRepos infoForm={infoForm} />
      <Footer />
    </div>
  );
}

export default App;
