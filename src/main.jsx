import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App.jsx'
import Coeurs from './pages/Coeurs.jsx'
import { FavProvider } from './FavContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <FavProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<App />} />
        <Route path="/coupsdecoeur" element={<Coeurs />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </FavProvider>
  </StrictMode>,
)