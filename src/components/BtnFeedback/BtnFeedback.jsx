import React from "react";
import {StyledButton} from "./BtnFeedback.styled";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";
export const BtnFeedback = ({
    icon: Icon = null,
    children,
    onClick,
}) => {
    return (
        <StyledButton type="button" onClick={onClick}>
             {Icon && <Icon size="14" />}
            {children}
        </StyledButton>
    )
}

BtnFeedback.propTypes = {
    icon: PropTypes.any,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}