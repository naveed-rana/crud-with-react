import React from 'react';
import './profile.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data : [
        {
          id:"ID:",
          name:"Name:",
          address: "Address:",
          phone : "Call us:"
        },
         {
          id:1,
          name:"naveed",
          address: "gujranwalla",
          phone : "myphone"
        },
        {
          id:2,
          name:"umair",
          address: "kamalia",
          phone : "myphoneno"
        },
        {
          id:3,
          name:"hamza",
          address: "lahore",
          phone : "myphone"
        },
        {
          id:4,
          name:"umer",
          address: "muree",
          phone : "myphone"
        }

      ],
      header:"this is input value",
      names:"",
      pass:""
    }
this.inputget = this.inputget.bind(this);
this.onsubmit = this.onsubmit.bind(this);

  }
  onsubmit(e){
    e.preventDefault();
    alert("form submitted!")

  }

inputget(event){
  const target = event.target;
  const name = target.name;
  const value = target.value;
  this.setState({
      [name]:value
  });
}
render()
{
  return (
    <div>
  <Header head = {this.state} func = {this.inputget} onsubmit = {this.onsubmit}/>
 <table>
   <tbody>
     {this.state.data.map((person , i) => <Content key = {i} data = {person} />)}
</tbody>
</table>
</div>
  );
}
}

class Header extends React.Component {
 render(){
   return  (
     <div>
       <form onSubmit ={this.props.onsubmit} >
       <label>Name:</label>
     <input type="text" name="names" ref = "input" onChange ={this.props.func} /><br/>
     <label>Pass:</label>
     <input type="text" name="pass" ref = "input" onChange ={this.props.func} />
    <button type ="submit"> submit</button>
   </form>
   <h1>Name:{this.props.head.names}</h1>
   <h1>Pass:{this.props.head.pass}</h1>
   </div>
   );
 }
}

class Content extends React.Component {

render(){


  return (

    <tr>
    <td >{this.props.data.id}</td>
    <td>{this.props.data.name}</td>
    <td>{this.props.data.address}</td>
    <td>{this.props.data.phone}</td>
</tr>
  );
}

}

export default App;
