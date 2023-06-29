import React from "react";
import PropTypes from "prop-types";
 import {
     MdSentimentVerySatisfied,
     MdThumbDownOffAlt,
     MdSentimentNeutral,
     MdSupport,
    //  MdOutlineSummarise,
     MdPercent,
 } from "react-icons/md";
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
                <DescrStatistics>
                 <MdSentimentVerySatisfied size="18" /> 
                    Good: {good}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                <MdSentimentNeutral size="18" />
                    Neutral: {neutral}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                <MdThumbDownOffAlt size="18" />
                    Bad: {bad}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                  <MdSupport size="18" />
                    Total: {total}</DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                <MdPercent size="18" /> 
                Positive feedback: {positivePercentage}%</DescrStatistics>
            </li>
        </StatisticList>
      )  
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
