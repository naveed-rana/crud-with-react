
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


const Header =  (props) =>  {

        return(
              <div>
                          <h1>{props.title}</h1>
                           <p>{props.subtitle}</p>
                  </div>
        )
};


class App extends React.Component {

  render() {
    return (
      <Router>
      <div>

    <Header title = "This is First React App!" subtitle  = "React Form" />
      <Link to="/home">Home</Link>


        <Route path="/home" component={MyProfile}></Route>


        </div>
</Router>
        ); } }

         class MyProfile extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
              count: 0
            };
          }
          addCount() {
            this.setState((prevstate) => {
              return {
                count: prevstate.count + 1
              };
            });
          }
          removeCount() {
            this.setState((prevstate) => {
              return {
                count: prevstate.count - 1
              }
            });
          }

          reset() {
            this.setState((prevstate) => {
              return {count: 0}
            });
          }

          render() {

            return (
              <div >
              <h3>
                Count: {this.state.count}
              </h3>
              <button onClick={this.addCount.bind(this)}>+ </button>
                <button onClick={this.removeCount.bind(this)}>- </button>
                  <button onClick={this.reset.bind(this)}>reset </button>
                  </div>

                  );
    }
}



        ReactDOM.render( < App / > , document.getElementById('content'));
