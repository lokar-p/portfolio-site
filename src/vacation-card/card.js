import React from 'react';
  


function handl_submetion(e){
    e.preventDefault();
  
}

export default function Cards(props){

 

   return (
    <div className = 'fatherDiv'>
        {props.soldOut && <div className = 'soldOut-div' >Sold out</div>}
        <div className = 'img-container'> 

        </div>
        <div className = 'card-description '>
            <p>{props.name}</p>
            <div>{props.price}</div>
           
            
        </div> 
        <form className = 'form--style' onSubmit={handl_submetion} >
                <input type = 'text' placeholder= 'name' name= 'name'></input>
                <input type = 'text' placeholder= 'price' name = 'price'></input>
                <button type = 'submit' >submit</button>
            </form>
    </div>
   )

}