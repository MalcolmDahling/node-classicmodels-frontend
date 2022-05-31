import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories } from './components/Categories/Categories';
import { Category } from './components/Category/Category';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import { Layout } from './components/Layout/Layout';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="/categories" element={<Categories></Categories>}></Route>
                    <Route path="/categories/:category" element={<Category></Category>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
