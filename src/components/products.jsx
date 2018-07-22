import  React  from 'react';
import Formcomp from './forms.jsx';
import Showresult from './showresult.jsx';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './bootstrap.css';
import './profile.css';




class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          products:[{
            id:1,
            name:"apple",
            price:102
          },
          {
            id:2,
            name:"banana",
            price:150
          },
          {
            id:3,
            name:"orange",
            price:150
          }
        ],
          name:"fruit",
          id:"1",
          price:"45",
          showstate:false,
          addproduct:false,
          message:false
        }

        this.onchangeinput = this.onchangeinput.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        this.itemdelete = this.itemdelete.bind(this);
        this.removeall = this.removeall.bind(this);
        this.showstates = this.showstates.bind(this);
        this.addproducts = this.addproducts.bind(this);



  }

  onchangeinput(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
        [name]:value
    });

  }
  itemdelete(event) {


    this.setState({
        products:this.state.products.filter((item) => event !== item.name )
    });}

    removeall(event) {
      this.setState({
          products:[]
      });

  }
  showstates(event) {
    this.setState({
      showstate:true,
      addproduct:false,
      message:false
    });

}
addproducts(event) {
  this.setState({
      showstate:false,
    addproduct:true,
    message:false
  });

}
  onsubmit(event){

    event.preventDefault();

    var addtopro = {
      id:this.state.id,
      name:this.state.name,
      price:this.state.price

    }
    var arrayvar = this.state.products.slice();
    arrayvar.push(addtopro);

    this.setState({
      products:arrayvar,
      addproduct:false,
      message:true


    });
  }
  render(){
    return (
      <div className="container">
        <h1>Products App</h1>
        <button onClick={this.addproducts} className="btn btn-primary" >Add Product</button>&nbsp;
        <button onClick={this.showstates} className="btn btn-primary" >Show Product</button>
        {this.state.addproduct ?
  <Formcomp onchangeinput = {this.onchangeinput} onsubmits = {this.onsubmit} />
  :
  <div> </div>
}
{this.state.message ?
<div>
<h3>Your record has been Added! thakyou</h3>
</div>
:
<div></div>
}
  {this.state.showstate ?
    <div>
  <h1>Products:</h1>
  <table className="table table-hover">
    <tbody>
      <tr>
        <th>Product ID:</th>
          <th>Product Name:</th>
            <th>Product Price:</th>
              <th><button className="btn btn-danger" onClick={this.removeall}>RemoveAll:</button></th>
    </tr>
  {this.state.products.map((products,i) => <Showresult key={i} remove={this.itemdelete} data = {products} /> )}
</tbody>
</table></div>
:
<div></div>
}
</div>
);}
}
export default App;
