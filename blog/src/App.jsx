import React from 'react';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './component/Question/Question';


const App = () => {
  return (
    <div className='w-9/12 m-auto'>
      <Header></Header>
      <Card></Card>
      <Question></Question>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;