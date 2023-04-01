import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const AddRecipePage = lazy(() =>
  import("../../pages/AddRecipePage/AddRecipePage")
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/add" element={<AddRecipePage />}></Route>
      </Routes>
    </div>
  );
};
