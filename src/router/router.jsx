import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import RspPage from "../pages/RspPage";
import LottoPage from "../pages/LottoPage";
import BoardListPagingPage from "../pages/BoardListPagingPage";
import BoardWritePage from "../pages/BoardWritePage";


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
    {
        path: "/lotto",
        element: <App />,
        loader: () => "로또",
        children: [
            {
              path: "/lotto",
              loader: () => "로또",
              element: <LottoPage/>,
            },
        ]
    },
    {
        path: "/boards",
        element: <App />,
        loader: () => "게시판",
        children: [
            {
              path: "/boards",
              loader: () => "게시판",
              element: <BoardListPagingPage/>,
            },
            {
                path: "/boards/write",
                loader: () => "글쓰기",
                element: <BoardWritePage/>,
            },
        ]
    }
]

const router = createBrowserRouter(routes);

export { router, routes};