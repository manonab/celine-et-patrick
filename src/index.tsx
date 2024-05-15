import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from './routes';
import "./index.css"
const rootDiv = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

createRoot(rootDiv as Element).render(<App />);

