import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/Home'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App
