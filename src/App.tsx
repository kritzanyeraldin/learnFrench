import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { RestorePassword, RestorePasswordSuccess, SignIn, SignUp, SignUpSuccess, WelcomePageRoute } from "./routes";
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
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signUpSuccess",
    element: <SignUpSuccess />,
  },
  {
    path: "/restorePassword",
    element: <RestorePassword />,
  },
  {
    path: "/restorePasswordSuccess",
    element: <RestorePasswordSuccess />,
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
