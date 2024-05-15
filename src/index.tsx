import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from './routes';
import "./index.css"
import { QuestionsProvider } from "./utils/questions-context";
import { Result } from "./routes/results";
const rootDiv = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "results",
        element: <Result />,
      },
    ]
  }
]);
const App = () => {
  return (
    <QuestionsProvider>
    <RouterProvider router={router} />
    </QuestionsProvider>
  );
};

createRoot(rootDiv as Element).render(<App />);

