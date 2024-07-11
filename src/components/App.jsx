import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? ((good / total) * 100).toFixed(2) : 0;
  }

  onLeaveFeedBack = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedBack = this.countTotalFeedback();
    const positiveFeedBack = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave FeedBack</h1>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              onClick={() => this.onLeaveFeedBack(option)}
              key={index}
              className="button"
            >
              {option}
            </button>
          );
        })}

        {totalFeedBack !== 0 ? (
          <div>
            <h2>Statistics</h2>
            <ul>
              <li className="paragrph">Good: {good}</li>
              <li className="paragrph">Neutral: {neutral}</li>
              <li className="paragrph">Bad: {bad}</li>
              <li className="paragrph">Total: {totalFeedBack}</li>
              <li className="paragrph">
                Positive feedback: {positiveFeedBack} %
              </li>
            </ul>
          </div>
        ) : (
          <h1>There is no feedback</h1>
        )}
      </div>
    );
  }
}
