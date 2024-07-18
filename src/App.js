import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

// React.creatElement => Object => HTMLElement(render)

// Practice set

// const resObj = {
//   data: {
//     id: "741723",
//     naam: "Delhi Chutney and Co",
//     cloudinaryImageId: "f969ce818add43a9be48e7620aead1be",
//     locality: "South Chd",
//     areaName: "Sector 8",
//     costForTwo: "₹200 for two",
//     cuisines: [
//       "Chaat",
//       "Street Food",
//       "Snacks",
//       "Beverages",
//       "Fast Food",
//       "Punjabi",
//       "North Indian",
//       "Indian",
//     ],
//     avgRating: 4.3,
//     veg: true,
//     parentId: "440051",
//     avgRatingString: "4.3",
//     totalRatingsString: "100+",
//     sla: {
//       deliveryTime: 23,
//       lastMileTravel: 2,
//       serviceability: "SERVICEABLE",
//       slaString: "20-25 mins",
//       lastMileTravelString: "2.0 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-04-04 22:59:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         textExtendedBadges: {},
//         textBased: {},
//         imageBased: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "30% OFF",
//       subHeader: "UPTO ₹75",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//     externalRatings: {
//       aggregatedRating: {
//         rating: "--",
//       },
//     },
//     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",

//     analytics: {},
//     cta: {
//       link: "swiggy://menu?restaurant_id=741723",
//       text: "RESTAURANT_MENU",
//       type: "DEEPLINK",
//     },
//   },
// };

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Vishal Aggarwal",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Home",
        element: <Body />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
