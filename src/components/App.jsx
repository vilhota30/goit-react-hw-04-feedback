import React, {Component} from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Layout } from "./Layout/Layout";
import {Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
state = {
   good: 0,
   neutral: 0,
   bad: 0,
};
 countleaveFeedback = option => {
this.setState((prevState) => {
  return {
    [option]: prevState[option] + 1,
  };
});
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;

  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;

  return this.countTotalFeedback()
    ? Math.round((good / this.countTotalFeedback()) * 100)
    : 0;
};

render () {
  const { good, neutral, bad, } = this.state;
  const options = Object.keys(this.state);
  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions 
        options={options}
        onLeaveFeedback={this.countleaveFeedback} 
        />
      </Section>
      <Section title="Statistics">
      {!this.countTotalFeedback()
            ? (<Notification msg ='There is no feedback!' />)
            : (
            <Statistics>
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            </Statistics>
           )}
      </Section>
    </Layout>
  );
}

};
