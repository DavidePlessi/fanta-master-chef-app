import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMyBrigade} from "../../actions/fantaBrigade";
import BrigadeWithResults from "./BrigadeWithResults";


function MyBrigade({myBrigade, getMyBrigade}) {

  useEffect(() => {
    getMyBrigade()
  }, [getMyBrigade]);

  return (
    <BrigadeWithResults brigade={myBrigade}/>
  )

}

MyBrigade.propTypes = {
  myBrigade: PropTypes.object.isRequired,
  getMyBrigade: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  myBrigade: state.fantaBrigade.myBrigade
})

export default connect(mapStateToProps, {getMyBrigade})(MyBrigade)