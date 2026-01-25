import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { personalInfo } from './data/personal'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero
                  avatarUrl={personalInfo.avatarUrl}
                  title={personalInfo.title}
                  subtitle={personalInfo.subtitle}
                />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
