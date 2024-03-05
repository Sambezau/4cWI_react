
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Seite1 from "./Components/Pages/Seite1";
import Seite2 from "./Components/Pages/Seite2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Seite1/>,
  
  },
  {
    path: "/Pages/Seite2",
    element: <Seite2/>,
  
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

  
export default App;






