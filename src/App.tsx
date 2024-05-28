import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Forgot, SignIn, SignOut, WelcomePageRoute } from "./routes";
import { Grammar, Home, Statistics, Vocabulary } from "./routes/Internal";
import { InternalLayout, RootLayout } from "./layouts";

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
    path: "/forgotPassword",
    element: <div>ha</div>,
  },

  {
    element: <RootLayout />,
    children: [
      {
        path: "/lesson",
        element: <div> lesson</div>,
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
            element: <Grammar />,
          },
          {
            path: "/vocabulary",
            element: <Vocabulary />,
          },
          {
            path: "/statistic",
            element: <Statistics />,
          },
          {
            path: "/settings",
            element: <div>asd</div>,
          },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
