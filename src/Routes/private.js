import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { URL_LOGIN } from "Helpers/urls";

const ProtectedRoute = (props) => {
  useEffect(() => {
    console.log("props", props);
  }, [props]);
  const { isLoggedIn, children, userId } = props;

  return (
    <div>
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <Redirect
          to={{
            pathname: URL_LOGIN,
            state: { from: props.location },
          }}
        />
      )}
    </div>
  );
};

const mapReduxStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  userId: state.auth.userId,
});

export default connect(mapReduxStateToProps, null)(withRouter(ProtectedRoute));
