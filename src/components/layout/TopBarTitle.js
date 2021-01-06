import React from "react";
import {connect} from "react-redux";

function TopBarTitle({username}) {
  return(
    <>
      <span style={{fontFamily: "Saira Extra Condensed"}}>{username}</span>
    </>
  )
}

const mapStateProps = state => ({
  username: state.auth.user.name,
})

export default connect(mapStateProps, {

})(TopBarTitle)