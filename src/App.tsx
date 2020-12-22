import React, { useState } from 'react';
import './App.css';
import CandidateForm from './candidateForm/CandidateForm';
import { Footer } from './footer/Footer';
import SimpleDialog from './shared/SimpleDialog'

function App() {
  const [isDialogVisible, setDialog] = useState(false);
  const handleClose = () => {
    setDialog(false);
  };
  return (
    <div className="App">
      <SimpleDialog open={isDialogVisible} onClose={handleClose} />
      <CandidateForm setDialog={setDialog}/>
      <Footer />
    </div>
  );
}

export default App;
