import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";
import {connect} from "react-redux";
import {clearMessage} from "../../actions/message";
import {withTranslation} from "react-i18next";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function FeedbackMessage(
  {
    t,
    message,
    clearMessage,
    show
  }) {

  const handleClose = () => {
    clearMessage();
  }

  return(
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={show && !!message.type && !!message.message}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={message.type || "error"}>
        {t(message.message)}
      </Alert>
    </Snackbar>
  )
}

const mapStateProps = state => ({
  message: state.message.message,
  show: state.message.show
})

export default connect(mapStateProps, {
  clearMessage
})(withTranslation()(FeedbackMessage))