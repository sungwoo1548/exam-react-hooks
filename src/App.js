import React from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css';

import { LanguageProvider } from './language/Language';

import Layout from './pages/layout/Layout';


export default function App() {
  const meta = document.createElement("meta");
  meta.name = "description"
  meta.content = "hello"
  console.log(meta)
  document.head.appendChild(meta)
  document.title = "App"
  return (
    <LanguageProvider>
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    </LanguageProvider>
  );
}