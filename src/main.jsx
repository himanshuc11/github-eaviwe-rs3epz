import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './main.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

let rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }

          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<p>404</p>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);