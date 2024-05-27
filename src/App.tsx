import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { SignIn, SignOut, WelcomePageRoute } from "./routes";
import { Grammar, Home, Vocabulary } from "./routes/Internal";
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
            element: <div>sta</div>,
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
