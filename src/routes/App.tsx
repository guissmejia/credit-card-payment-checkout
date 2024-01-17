import { BrowserRouter, Routes, Route } from "react-router-dom"

/* App Components */
import Store from "pages/Store"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
