import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";
import FriendsDetails from "../pages/friendsDetails/FriendsDetails";
import ErrorPage from "../pages/error/Error";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Homepage,
        loader: ()=> fetch("/friends.json")
      },
      {
        path: "/:id",
        element: <FriendsDetails></FriendsDetails>
         

      },
      {
        path: "/timeline",
        Component: TimeLine
      },
      {
        path: "/stats",
        Component: Stats
      }
    ],
    errorElement: <ErrorPage></ErrorPage> 
  },
]);