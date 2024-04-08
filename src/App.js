
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <main>
      <Routes element={<Layout />}>
        <Route index element={<Home />} />
      </Routes>
        </main>
      <Footer />
    </div>
  )
}

export default App;
