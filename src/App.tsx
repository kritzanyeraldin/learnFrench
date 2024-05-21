import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { SignIn, SignOut, WelcomePageRoute } from "./routes";
import { Home } from "./routes/Internal";
import { InternalLayout } from "./layouts";

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
    element: <InternalLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/grammar",
        element: <div>grammar</div>,
      },
      {
        path: "/vocabulary",
        element: <div>vocabulary</div>,
      },
      {
        path: "/statistic",
        element: <div>sta</div>,
      },
      {
        path: "/settings",
        element: <div>asd</div>,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
