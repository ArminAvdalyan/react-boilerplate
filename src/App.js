import React from "react";

import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Container from 'containers/Container/Container';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout >
      <Container />
      </Layout>
    </div>
  );
}

export default App;
