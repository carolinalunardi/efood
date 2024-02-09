import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Paths from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Paths />
      <Footer />
    </BrowserRouter>
  )
}

export default App
