import React from 'react';
import './bootstrap.css';
import './profile.css';

class Formcomp extends React.Component {
  render(){
    return (


<div>
  <h2>Please enter new Product:</h2>
  <form onSubmit = {this.props.onsubmits}>
<div className="form-group">
    <label>id:</label>
  <input type="text" required className="form-control" name="id"  placeholder = "enter id" onChange ={this.props.onchangeinput} />
</div>
<div className="form-group">
  <label>Name:</label>
  <input type="text" required className="form-control" name="name"  placeholder = "enter product name" onChange ={this.props.onchangeinput} />
</div>
<div className="form-group">
  <label>Price:</label>
  <input type="text" required className="form-control" name="price" placeholder = "enter price" onChange ={this.props.onchangeinput} />
</div>
    <button type = "submit"  className="btn btn-primary" >Add Products</button>
  </form>
</div>
);
}
}

export default Formcomp;
