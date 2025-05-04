import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TodoList } from "./components/TodoList";
import { match } from "mutch"; 
import React from "react";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <TodoList />
  </StrictMode>
);

match(import.meta.hot !== undefined,
  [[ true, () => (import.meta.hot.data.root ??= createRoot(elem)).render(app) ]],
  () => createRoot(elem).render(app)
)
