import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/Routes"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return <RouterProvider router={routes} />
}

export default App
