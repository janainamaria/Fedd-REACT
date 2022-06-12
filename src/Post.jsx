import { Fragment } from "react";
export function Post(props){
  console.log(props);
  return(
    <Fragment>
    <strong>{props.author}</strong> 
    <p>{props.content}</p>
    </Fragment>
  )
}
