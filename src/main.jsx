import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./context/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <DataProvider>
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
  // </DataProvider>
);
