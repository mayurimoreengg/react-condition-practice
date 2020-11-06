import React from "react";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      costPrice: 0,
      sellingPrice: 0,
      profit: 0
    };
  }

  checkProfit = (cp, sp) => {
    let p = parseFloat(sp) - parseFloat(cp);
    this.setState({
      profit: p
    });
  };

  render() {
    return (
      <div>
        <h1>Change the Values to see Result</h1>
        <p>
          Cost Price ={" "}
          <input
            type="text"
            value={this.state.costPrice}
            onChange={e => {
              this.setState(
                {
                  costPrice: e.target.value
                },
                () => {
                  this.checkProfit(
                    this.state.costPrice,
                    this.state.sellingPrice
                  );
                }
              );
            }}
          />
        </p>
        <p>
          {" "}
          Selling Price ={" "}
          <input
            type="text"
            value={this.state.sellingPrice}
            onChange={e => {
              this.setState(
                {
                  sellingPrice: e.target.value
                },
                () => {
                  this.checkProfit(
                    this.state.costPrice,
                    this.state.sellingPrice
                  );
                }
              );
            }}
          />
        </p>
        <hr />
        {this.state.profit === 0 ? (
          <h1 className="noProfitNoLoss">No Profit No Loss</h1>
        ) : this.state.profit > 0 ? (
          <h1 className="profit">Profit</h1>
        ) : (
          <h1 className="loss">Loss</h1>
        )}

        {this.state.profit > 0 && <h1 className="profit">Well Done!</h1>}
      </div>
    );
  }
}

export default App;
