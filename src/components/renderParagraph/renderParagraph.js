import React from "react";
import style from "./renderParagraph.module.css";

// Referenced:
// https://codereview.stackexchange.com/questions/211462/rendering-plain-text-with-paragraphs-and-line-breaks-as-html

function RenderParagraph(props) {
  //debugging
  // console.log("paragraph is type: " + typeof(props.paragraph)); //problem here
  
  const [firstLine, ...rest] = props.paragraph.split("\n");

  return(
    <p className={style.paragraph}>
      {firstLine}
      {rest.map(line => (
        //using a react.fragment
        <React.Fragment>
          <br/> 
          {line}
        </React.Fragment>
      ))}
    </p>

  );

}


export default RenderParagraph;