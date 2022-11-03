import React from "react";
import './App.css';
import Header from './Header';
import Layout from './Layout';
import PageRouter from './Router';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <Header />
      <PageRouter />
      <ToastContainer />
    </Layout>
  );
}

export default App;
