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
import { Notification } from "components/Notification/Notification";

export const Statistics = ({
    good,
    neutral,
    bad,
    total = 0,
    positivePercentage = 0,
}) => {
    return  (
        <StatisticList>
            <li>
                <DescrStatistics>
                    {/* <HiOutlineHeart size="14"/> */}
                Good: <span>{good}</span>
                </DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                    {/* <MdSentimentNeutral size="14"/> */}
                Neutral: <span>{neutral}</span>
                </DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                    {/* <MdThumbDownOffAlt size="14"/> */}
                Bad: <span>{bad}</span>
                </DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                    {/* <MdOutlineSummarise size="14"/> */}
                Total: <span>{total}</span>
                </DescrStatistics>
            </li>
            <li>
                <DescrStatistics>
                    {/* <MdPercent size="14"/> */}
                    Positive feedback: <span>{positivePercentage}%</span>
                </DescrStatistics>
            </li>

        </StatisticList>
     )
    //  : (
    //     <Notification msg="There is no feedback"/>
    // );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}