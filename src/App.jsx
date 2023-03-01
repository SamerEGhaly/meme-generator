import NavBar from "./Components/NavBar"
import MemeEditor from "./Components/MemeEditor"
import MemePreview from "./Components/MemePreview"
import Meme from "./Components/Meme"

function App() {

  return (
    <div className="main--container">
      <NavBar/>
      <Meme/>
    </div>
  )
}

export default App
