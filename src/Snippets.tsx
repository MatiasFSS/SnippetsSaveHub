import { NavBar } from "./components/NavBar"
import { Navigation } from "./routes/Navigation"


export const Snippets = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Navigation />
     
    </div>
  )
}

