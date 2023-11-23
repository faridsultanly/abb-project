import Card from "../../icons/Card";
import Confirm from "../../icons/Confirm";
import Credits from "../../icons/Credits";
import HomeSvg from "../../icons/HomeSvg";
import Payment from "../../icons/Payment";
import PosTerminal from "../../icons/PosTerminal";
import Reports from "../../icons/Reports";
import Service from "../../icons/Service";
import Warrenty from "../../icons/Warrenty";

export const links = [
    {
        title:"Əsas",
        status:1,
        sub:[],
        path:'/',
        svg: <HomeSvg />
    },
    {
        title:"Hesablar",
        status:0,
        sub:[],
        path:'/',
        svg: <Reports />
    },
    {
        title:"Ödəniş və Köçürmələr",
        status:0,
        sub:[],
        path:'/',
        svg: <Payment />
    },
    {
        title:"Bank kartları",
        status:0,
        sub:[],
        path:'/',
        svg: <Card />
    },
    {
        title:"Xidmət paketi",
        status:0,
        sub:[],
        path:'/credit-info',
        svg: <Service />
    },
    {
        title:"POS-terminal və E-ticarət",
        status:1,
        sub:[],
        path:'/',
        svg: <PosTerminal />
    },
    {
        title:"Kreditlər",
        status:0,
        sub:[
            {
                title: "Yeni müraciət",
                path: '/credits'
            },
            {
                title: "Mövcud kreditlər",
                path: '/credits'
            },
            {
                title: "Sifariş tarixçəsi",
                path: '/credits'
            },
        ],
        svg: <Credits />
    },
    {
        title:"Qarantiya və Akkreditiv",
        status:0,
        sub:[],
        path:'/',
        svg: <Warrenty />
    },
    {
        title:"Təsdiq gözləyir",
        status:0,
        sub:[],
        path:'/',
        svg: <Confirm />
    },
]