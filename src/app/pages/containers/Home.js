import React, { Component, Fragment } from "react";

/**
 * Components
 */
import Loader from "../../components/Loader";

/**
 * Sass
 */
import "../style/Home.scss";

/**
 * REDUX
 */

import * as home_actions from "../../modules/actions/home_actions";
import { connect } from "react-redux";

/*@redux*/

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "processing"
    };
  }
  
  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <Fragment>
        {this.props.loading && (
          <div className="loader">
            <Loader />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.home_reducers;
};
export default connect(mapStateToProps, home_actions)(Home);
