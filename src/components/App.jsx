import React, {useState} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Layout } from "./Layout/Layout";
import {Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export function App() {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

 const countleaveFeedback = (option) => {
 if(option === 'good') {
  setGood(good + 1);
 }else if (option === 'neutral') {
  setNeutral(neutral + 1);
 }else if(option === 'bad') {
  setBad(bad + 1);
 }

};

 const countTotalFeedback = () => {
 
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  
  return countTotalFeedback()
    ? Math.round((good / countTotalFeedback()) * 100)
    : 0;
};

const options = Object.keys({ good, neutral, bad });

  return (
    <Layout>
      <Section title="Please leave feedback!">
        <FeedbackOptions 
        options={options}
        onLeaveFeedback={countleaveFeedback} 
        />
      </Section>
      <Section title="Statistics">
      {!countTotalFeedback()
            ? (<Notification msg ='There is no feedback!' />)
            : (
            <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
           )}
      </Section>
    </Layout>
  );


};
