// ** react router imports
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
// ** pages imports
const About = lazy(() => import("./pages/About"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const Contact = lazy(() => import("./pages/Contact"));
const ForgetPasswrod = lazy(() => import("./pages/ForgetPasswrod"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const OrderTrack = lazy(() => import("./pages/OrderTrack"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Shop = lazy(() => import("./pages/Shop"));
const SignUp = lazy(() => import("./pages/SignUp"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));

// ** components import
import { Footer, Navbar, ScrollBtn, Services } from "./components";
import Toast from "./components/apps/Toast";
import QuickView from "./components/apps/QuickView";
import Loader from "./components/apps/Loader";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <ScrollBtn />
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
        <Loader />
        <QuickView />
        <Toast />
        <Services />
        <Footer />
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
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/ordertrack",
          element: <OrderTrack />,
        },
        {
          path: "/viewproduct/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cartpage",
          element: <CartPage />,
        },
        {
          path: "/compareproducts",
          element: <ComparePage />,
        },
        {
          path: "/wishlistproducts",
          element: <WishlistPage />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/forgetpassword",
          element: <ForgetPasswrod />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
