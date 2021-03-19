import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Board1 } from "../boards/Board1";
import { Board2 } from "../boards/Board2";
import { Board3 } from "../boards/Board3";
import { Board4 } from "../boards/Board4";
import { Board5 } from "../boards/Board5";
import { LegosIndex } from "../LegosIndex";


export const AppRouter = () => {
    return (<Router>
        <div>
            <Switch>
                <Route exact path="/" component={LegosIndex} />
                <Route path="/board1" component={Board1} />
                <Route path="/board2" component={Board2} />
                <Route path="/board3" component={Board3} />
                <Route path="/board4" component={Board4} />
                <Route path="/board5" component={Board5} />
                
                <Redirect to='/' />
            </Switch>
        </div>
    </Router>
    )
}
