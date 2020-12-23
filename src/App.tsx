import { Button, Snackbar } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import CandidateForm from './components/candidateForm/CandidateForm';
import CandidateInfo from './components/candidateInfo/CandidateInfo';
import CandidateRepos from './components/candidateRepos/CandidateRepos';
import { Footer } from './components/footer/Footer';
import { infoFormCookieValue } from './services/cookie.service';

function App() {
  const [snackBarMessage, setSnackBar] = useState('');
  const [infoForm, setInfoForm] = useState(infoFormCookieValue());
  
  const handleClose = () => {
    setSnackBar('');
  };

  return (
    <div className="App">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackBarMessage !== ''}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackBarMessage}
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            cerrar
          </Button>
        }
      />
      <CandidateInfo infoForm={infoForm} />
      <CandidateForm setSnackBar={setSnackBar} setInfoForm={setInfoForm} />
      <CandidateRepos infoForm={infoForm} />
      <Footer />
    </div>
  );
}

export default App;
