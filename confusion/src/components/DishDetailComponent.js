import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    
    if (dish != null){
        return (
            <div>
             <Card>
                 <CardImg  src={dish.image}  alt={dish.name} />
                 <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                 </CardBody>
             </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        );
    }

  }


  function RenderComments({comments}) {
    if(comments != null) {
    
       const commentsList = comments.map((comment) => {
           return (
               <div  key={comment.id} className="container">
               <ul>
                   <li className="no-bullet">{comment.comment}</li>
                   <li className="no-bullet">--{comment.author}, {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(Date.parse(comment.date)))}</li>
               </ul>
               </div>
           )
       });
       return(
           <div>
               {commentsList}
           </div>
       )
       
    }

    else {
      return (
        <div></div>
      );
    }
    
  }
      
  const  DishDetail = (props) => {
    const selectedDish= props.dish;
    let c;
    if (props.dish!=null && props.dish != undefined){
        c=props.dish.comments;
        console.log("Name is "+props.dish.comments.date);
        console.log("value of c is:"+c)
    }else{
        c=null;
    }
    return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={c}/>
                    
                </div>
            </div>
    )
  }

  
      
        
    
      
export default DishDetail;