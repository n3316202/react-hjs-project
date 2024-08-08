import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import RspPage from "../pages/RspPage";


const routes = [
    {
        path: "/",
        element: <App />,
        loader: () => "가위바위보",
        children: [
            {
              path: "/",
              loader: () => "가위바위보",
              element: <RspPage/>,
            },
        ]
    },
    // {
    //     path: "/lotto",
    //     element: <App />,
    //     loader: () => "로또",
    //     children: [
    //         {
    //           path: "/lotto",
    //           loader: () => "로또",
    //           element: <LottoView/>,
    //         },
    //     ]
    // }
]

const router = createBrowserRouter(routes);

export { router, routes};