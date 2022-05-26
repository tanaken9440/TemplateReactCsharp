import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './App.scss'

export const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/fetch-data' element={<FetchData />} />
      </Routes>
    </Layout>
  );
};