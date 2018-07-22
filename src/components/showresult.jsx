import React from 'react';
class Showresult extends React.Component {

 render (){
   return (

       <tr>
         <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
           <td>{this.props.data.price}</td>
             <td>
          <button onClick={(e) =>{
            this.props.remove(this.props.data.name);
          }}  className="btn btn-danger" >Delete</button>
          </td>
       </tr>


   );
 }

}
export default Showresult;
