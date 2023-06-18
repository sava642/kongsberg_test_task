import React from 'react';
import { useState } from 'react';
import './App.css';
import BooksList from '../BooksList';
import { Routes, Route } from 'react-router-dom';
import BookDetails from '../BookDetails';
import Breadcrumbs from '../Breadcrumbs';
import HomePage from '../HomePage';
import SearchPage from '../SearchPage';
import NotFound from '../NotFound';


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto p-4" data-testid="app-component">
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage onSearch={onSearch} />} />
        <Route path="/search/bookslist" element={<BooksList searchQuery={searchQuery} />} />
        <Route path="/search/bookslist/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;