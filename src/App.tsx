import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  LevelView,
  QuestionLevel,
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
} from "./routes/Root/Internal";
import { InternalLayout, RootLayout } from "./layouts";
import { LessonExam } from "./routes/Root";

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
    path: "/level",
    element: <LevelView />,
  },
  {
    path: "/questionlevel",
    element: <QuestionLevel />,
  },

  {
    element: <RootLayout />,
    children: [
      {
        path: "/lesson-exercise/:lessonName",
        element: <LessonExam />,
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
