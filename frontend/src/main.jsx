import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import provider  from './providers/AuthProvider'

createRoot(document.getElementById('root')).render(
  <provider.AuthProvider>
    <App />
  </provider.AuthProvider>
)
