import { render } from "@testing-library/react";
import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    function $(id) {
      return document.getElementById(id);
    }

    var card = $("card"),
      openB = $("open"),
      closeB = $("close"),
      timer = null;
    console.log("wat", card);
    openB.addEventListener("click", function() {
      card.setAttribute("class", "open-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
    });

    closeB.addEventListener("click", function() {
      card.setAttribute("class", "close-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "");
        timer = null;
      }, 1000);
    });
  }
  render() {
    return (
      <div id="card">
        <div id="card-inside">
          <div class="wrap">
            <p>Hey Neha,</p>
            <p>
              I lost the message inside the card 2 times.. and i realsied i am
              slow at this :'({" "}
            </p>
            <p>
              Listen kid, I want you to be the happiest today.. and i suck at
              making people happy..This is probably the only gift i can give
              you, my word..
            </p>
            <p>
              I will be there with you in your heart and soul whenever you seek
              me. I love you.
            </p>
            <p>always.</p>
          </div>
        </div>

        <div id="card-front">
          <div class="wrap">
            <h1>Happy Birthday!</h1>
          </div>
          <button id="open">&gt;</button>
          <button id="close">&lt;</button>
        </div>
      </div>
    );
  }
}

export default Card;
