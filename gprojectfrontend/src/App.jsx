import Header from './Shared/Header';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App 