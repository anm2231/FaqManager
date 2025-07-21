import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import AuthProvider from './security/Authorization.jsx';
import FakeLogin from './fakelogin.jsx';

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
