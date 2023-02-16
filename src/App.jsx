import NavBar from "./Components/NavBar"
import MemeEditor from "./Components/MemeEditor"
import MemePreview from "./Components/MemePreview"

function App() {

  return (
    <div className="main--container">
      <NavBar/>
      <MemeEditor/>
      <MemePreview/>
    </div>
  )
}

export default App
