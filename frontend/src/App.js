import React from "react";
import './App.css';
import Header from './Header';
import Layout from './Layout';
import PageRouter from './Router';


function App() {
  return (
    <Layout>
      <Header />
      <PageRouter />
    </Layout>
  );
}

export default App;
