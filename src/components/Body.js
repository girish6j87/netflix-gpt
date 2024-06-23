import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
     <RouterProvider router={approuter}/>
    </div>
  );
};

export default Body;
