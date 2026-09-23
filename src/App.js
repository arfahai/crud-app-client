import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/getuser/user";
import Add from "./components/adduser/add";
import Edit from "./components/updateuser/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;