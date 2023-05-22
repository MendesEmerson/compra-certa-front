import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import { Routers } from "./Router"
import { AuthProvider } from "./context/authContext"


function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <Routers />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
