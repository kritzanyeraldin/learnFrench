import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { SignIn, SignOut, WelcomePageRoute } from "./routes";
import { Home } from "./routes/Internal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePageRoute />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signOut",
    element: <SignOut />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
