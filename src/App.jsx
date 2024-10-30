import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
function App() {
  return (
    <>
      <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
