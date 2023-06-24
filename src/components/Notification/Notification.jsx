import React from "react";
import PropTypes from "prop-types";
import {Msg} from "./Notification.styled";

export const Notification = ({msg}) => {
    return <Msg Msg>{msg}</Msg>;
};

Notification.propTypes = {
msg: PropTypes.string.isRequired,
};