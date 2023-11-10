// ** react router imports
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// ** pages imports
import { Home, Login, SignUp } from "./pages";

// ** components import
import { Footer, Navbar, ScrollBtn, Services } from "./components";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <ScrollBtn/>

        <Outlet/>
        
        <Services/>
        <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ],
    },
    {
      path: "/login",
      // element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
