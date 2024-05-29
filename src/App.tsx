import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  RestorePassword,
  RestorePasswordSuccess,
  SignIn,
  SignUp,
  SignUpSuccess,
  WelcomePageRoute,
} from "./routes";
import {
  Grammar,
  Home,
  Profile,
  Statistics,
  Vocabulary,
  Settings,
} from "./routes/Internal";
import { InternalLayout, RootLayout } from "./layouts";
import { CompleteSentenceLesson } from "./layouts/Root/Component";

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
        path: "/completeLesson",
        element: <CompleteSentenceLesson />,
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
            element: <Settings />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
