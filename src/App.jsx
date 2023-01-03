import React, { lazy, Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navigation/Navbar'

function App() {
  const About = lazy(()=>import('./pages/About'))
  const Portfolio = lazy(()=>import('./pages/Portfolio'))
  const People = lazy(()=>import('./pages/People'))
  const Jobs = lazy(()=>import('./pages/Jobs'))
  const Contact = lazy(()=>import('./pages/Contact'))

  return (
    <main>
      <Navbar/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='people' element={<People/>}/>
          <Route path='jobs' element={<Jobs/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </Suspense>
    </main>
  )
}

export default App