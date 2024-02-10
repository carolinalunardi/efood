import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Page from './pages/Page'

const Paths = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/place" element={<Page />} />
  </Routes>
)

export default Paths
