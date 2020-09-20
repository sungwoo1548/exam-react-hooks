import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';

import Layout from './pages/layout/Layout';


export default function App() {
  const meta = document.createElement("meta");
  meta.name = "description"
  meta.content = "hello"
  console.log(meta)
  document.head.appendChild(meta)
  document.title = "App"
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </BrowserRouter>
  );
}