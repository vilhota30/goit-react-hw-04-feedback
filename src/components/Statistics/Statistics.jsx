import React from "react";
import PropTypes from "prop-types";
// import {HiOutlineHeart} from "./react-icons/hi";
// import {
//     MdThumbDownOffAlt,
//     MdSentimentNeutral,
//     MdOutlineSummarise,
//     MdPercent,
// } from "react-icons/md";
import { StatisticList, DescrStatistics } from "./Statistics.styled";

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return  (
        <StatisticList>
            <li>
                <DescrStatistics>Good: {good}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>Neutral: {neutral}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>Bad: {bad}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>Total: {total}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>Positive feedback: {positivePercentage}%</DescrStatistics>
            </li>
        </StatisticList>
      )  
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};
