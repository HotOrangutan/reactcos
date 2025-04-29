import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/login';  
import { Sklep } from './components/sklep';  
import { Home } from './components/home';
import './App.css';
import { Layout } from './components/layout';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>  
          <Route index element={<Home />} />  
          <Route path='sklep/:id' element={<Sklep />} />  
          <Route path='sklep' element={<Login/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
 
const AuthContext = createContext(undefined);
 
export const AuthProvider = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem('user') === 'true';
    setIsLogged(stored);
  }, []);
 
  const login = () => {
    localStorage.setItem('user', 'true');
    setIsLogged(true);
  };
 
  const logout = () => {
    localStorage.setItem('user', 'false');
    setIsLogged(false);
  };
 
  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};