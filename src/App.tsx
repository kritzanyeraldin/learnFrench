import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { WelcomePageRoute } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePageRoute />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
