import React, { useContext } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "../../config";
import {
  Login,
  Lembaga1,
  Lembaga2,
  Lembaga3,
  Lembaga4,
  Lembaga5,
  Lembaga6,
  LembagaConfirm,
  Closing,
} from "../../pages";
import { Result } from "antd";

//for private route
const PrivateRoute = ({ component: Component, status: isLogged, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogged === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            // state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Routing = () => {
  const [state] = useContext(AuthContext);
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} exact={true} />
          {/* <Route exact path="/nominasi/terinovatif" component={Lembaga1} />
            <Route exact path="/nominasi/terinspiratif" component={Lembaga2} />
            <Route exact path="/nominasi/terkreatif" component={Lembaga3} />
            <Route exact path="/nominasi/lsofavorit" component={Lembaga4} />
            <Route exact path="/nominasi/lofavorit" component={Lembaga5} />
            <Route exact path="/nominasi/ketuahits" component={Lembaga6} />
            <Route exact path="/nominasi/confirm" component={LembagaConfirm} /> */}
          <PrivateRoute
            path="/nominasi/terinovatif"
            component={Lembaga1}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/nominasi/terinspiratif"
            component={Lembaga2}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/nominasi/terkreatif"
            component={Lembaga3}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/nominasi/lsofavorit"
            component={Lembaga4}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/nominasi/lofavorit"
            component={Lembaga5}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/nominasi/ketuahits"
            component={Lembaga6}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/nominasi/confirm"
            component={LembagaConfirm}
            status={state.isLogged}
          />
          <PrivateRoute
            path="/closing"
            component={Closing}
            status={state.isLogged}
          />
          {/* <Route exact path="/closing" component={Closing} /> */}
          <Route
            path="/*"
            component={() => (
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
              />
            )}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routing;
