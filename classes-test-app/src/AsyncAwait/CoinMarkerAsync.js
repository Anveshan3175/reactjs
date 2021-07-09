import { Component } from "react";

class CoinMarkerAsync extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    // fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10",{
    //     mode: 'no-cors' // 'cors' by default
    //   })
      fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

  render() {
    return (
      <>
        <h1>Hi There</h1>
        <div>
        {this.state.data.results}
        </div>
      </>
    );
  }
}

export default CoinMarkerAsync;
