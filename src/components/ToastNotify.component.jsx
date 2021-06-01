import React, { useState } from "react"
import { connect } from "react-redux"
import { Toast } from "react-bootstrap"

function ToastNotify({ message, isError }) {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <Toast show={showA} role="alert" onClose={toggleShowA} style={isError ? { backgroundColor: "red" } : { backgroundColor: "green" }}>

            <Toast.Body>{message}</Toast.Body>
        </Toast>

    );
}
const mapStateToProps = (state) => {
    const message = state.toastMessage
    const isError = state.isErrorMessage
    return { message, isError }
}

export default connect(mapStateToProps)(ToastNotify)