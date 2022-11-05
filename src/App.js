import React from "react"
import { BrowserRouter, Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom'

import Home from './components/Home'
import Work from './components/Work'
import About from './components/About'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import Contact from './components/Contact'
import Layout from './layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/portofolio" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="blog/" >
            <Route index element={<Blog />} />
            {/* <Route path=":id" element={<BlogDetail />} /> */}
            <Route path="blogDetail" element={<BlogDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
