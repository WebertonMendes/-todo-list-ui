import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { TodoList } from "../pages/TodoList";
import { Partners } from "../pages/Partners";
import { Finances } from "../pages/Finances";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/finances" element={<Finances />} />
    </Routes>
  );
};
