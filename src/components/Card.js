import { render } from "@testing-library/react";
import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  componentDidMount() {
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
              You are my escape, you are my hippo, you are my bebo
              I m lucky to have you in my life
            </p>
            <p>
              Every morning it's you what come to my slow processing mind,
              Instead of hearing <b>Babu Tu Kya Kar Ra Hai</b>, I want to
              come to me, grab my hand and say <b>Chal Bahar Pani Puri Kha
                Kar Ate Hain </b>
              I have seen alot of dreams with you and now, I want to turn them into reality
            </p>
            <p>
              I want you to be the first light in my eyes every morning,
              I want you to be the last light in my eyes every night
              I want to travel with you, I want to do <b>We Woo We Woo </b>
               so that you can say <b>See this guy, number one bullshit guy</b>
            </p>
            <b>Babu Loves You</b>
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
