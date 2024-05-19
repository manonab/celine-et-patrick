import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import "./index.css"
import { Result } from "./routes/results";
import { QuestionnaireProvider } from "./utils/questions-context";
import { MyApp } from "./routes";
import Questionnaire from "./components/form/questionnaire";
const rootDiv = document.getElementById("root");

const App = () => {
  return (
    <BrowserRouter>
      <QuestionnaireProvider>
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/results/:percentage/:correctCount/:totalCount" element={<Result />} />
        </Routes>
      </QuestionnaireProvider>
    </BrowserRouter>
  );
};

createRoot(rootDiv as Element).render(<App />);

