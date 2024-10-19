import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Base from "./pages/base";
import Home from "./pages/home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Base />} exact>
          <Route path="" element={<Home />}  exact/>
        </Route>
    </Route>
  )
);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}  exact/>
    </div>
  );
}

export default App;
