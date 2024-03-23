import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import DailyTrackerPage from "./pages/DailyTracker";
import DailyPlanDetailsPage from "./pages/DailyPlanDetails";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/daily", element: <DailyTrackerPage /> },
      { path: "/daily/details", element: <DailyPlanDetailsPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
