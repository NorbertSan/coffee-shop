import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import DetailsPageTemplate from "templates/DetailsPageTemplate";

class DetailsPageView extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const id = this.props.match.params.id;
    return <DetailsPageTemplate id={id} />;
  }
}

export default withRouter(DetailsPageView);
