import { BtnFeedback } from "components/BtnFeedback/BtnFeedback";
import PropTypes from "prop-types";
import React from "react";
// import { Icons } from "./Icons";
import { BtnWrapper } from "./FeedbackOptions.styled";
import { arrayOf } from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
<BtnWrapper>
    {options.map(option => {
        return(
        <li key={option}>
            <BtnFeedback 
                 key={option}
                //  icon={Icons[option]}
                 type="button"
                 value={option}
                 onClick={() => onLeaveFeedback(option)}
                >
                 {option}
            </BtnFeedback>
        </li>
           );
            })}
</BtnWrapper>
    );
};

FeedbackOptions.propTypes = {
// options: arrayOf(PropTypes.string),
onLeaveFeedback: PropTypes.func,
};