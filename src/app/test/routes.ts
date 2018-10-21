import { TesthomeComponent } from "./testhome/testhome.component";
import { AddtestComponent } from "./addtest/addtest.component";
import { WritetestComponent } from "./writetest/writetest.component";
import { TestlistComponent } from "./testlist/testlist.component";

export var routes = [
    {
        path:'testhome',
        component:TesthomeComponent,
        children:[
            {
                path:"addtest",
                component:AddtestComponent                
            },
            {
                path:"writetest",
                component:WritetestComponent                
            },
            {
                path:"listtest",
                component:TestlistComponent                
            },
            {
                path:"",
                component:TestlistComponent                
            }
        ]
    }
]