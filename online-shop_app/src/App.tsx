import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Online-Shop" replace />,
  },
  {
    path: "/Online-Shop",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
