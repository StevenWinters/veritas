import { createBrowserRouter } from "react-router-dom";
import FootagePage from "./pages/FootagePage";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SuspectsPage from "./pages/SuspectsPage";
import Terms from "./pages/Terms";
import GuidePage from "./pages/GuidePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "guide",
        element: <GuidePage />,
      },
      {
        path: "suspects",
        element: <SuspectsPage />,
      },
      {
        path: "footage",
        element: <FootagePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
]);

export default router;
