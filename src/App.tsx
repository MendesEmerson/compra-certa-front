import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import { Routers } from "./Router"


function App() {


  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routers/>
    </BrowserRouter>
  )
}

export default App
