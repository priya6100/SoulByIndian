/** @format */

import React from "react";
import "./ChatBot.css";

const ChatBot = () => {
  return (
    <div className="chatbot">
      {/* <h1>Smart BOt</h1>  */}
      {/* <button style={{float: "right"}} id="show">close</button>  */}
      <div className="chat" id="show">
        <div className="chat-title">
          <h1>flexi</h1>{" "}
          <a
            className="close"
            style={{
              float: "right",
              color: "white",
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              right: "0",
            }}
            onClick="ClickON()">
            &times;
          </a>
          <h2>
            i am GNS chat bot, How may i help you <br />{" "}
            <span
              id="time"
              style={{
                color: "green",
                fontWeight: "900",
                fontSize: "10px",
              }}></span>
          </h2>
          <figure className="avatar">
            <img src="css/1.png" />
          </figure>
        </div>
        <div className="messages">
          <div className="messages-content"></div>
          <div className="suggession"></div>
        </div>
        <form className="message-box" id="mymsg" method="POST">
          <i className="fas fa-microphone" id="start-record-btn"></i>
          <input
            type="text"
            id="MSG"
            name="MSG"
            className="message-input"
            placeholder="Type message..."
          />

          <button type="submit" className="message-submit">
            <i className="fa fa-send-o"></i>
          </button>
        </form>
        <h3 className="no-browser-support" hidden>
          Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening
          This Demo In Google Chrome.
        </h3>
      </div>

      <input type="checkbox" id="click" />
      <label htmlFor="click">
        <h4>
          <div className="crt-bot">
            <div className="chat-bot">
              {/* <div className="eyes">
        <div className="eye left-eye">
     
        </div>
        <div className="eye right-eye">
      
        </div>
     
    </div> */}
            </div>

            <div className="platform"></div>
          </div>
          <div className="crt-bot1">
            <div className="chat-bot1">
              {/* <div className="eyes">
    <div className="eye left-eye">
<span>&times;</span>
    </div>
    <div className="eye right-eye">
      <span>&times;</span>
    </div>
 
</div> */}
              <span>
                <hr />
              </span>
            </div>

            <div className="platform"></div>
          </div>
        </h4>
      </label>
      <div className="chat" id="show">
        <div className="chat-title">
          <h1>flexi</h1>{" "}
          <a
            className="close"
            style={{
              float: "right",
              color: "white",
              fontSize: "30px",
              position: "relative",
              top: "-10px",
              right: 0,
            }}
            onClick="ClickON()">
            &times;
          </a>
          <h2>
            i am GNS chat bot, How may i help you <br />{" "}
            <span
              id="time"
              style={{
                color: "green",
                fontWeight: 900,
                fontSize: "10px",
              }}></span>
          </h2>
          <figure className="avatar">
            <img src="css/1.png" />
          </figure>
        </div>
        <div className="messages">
          <div className="messages-content"></div>
          <div className="suggession"></div>
        </div>
        <form className="message-box" id="mymsg" method="POST">
          <i className="fas fa-microphone" id="start-record-btn"></i>
          <input
            type="text"
            id="MSG"
            name="MSG"
            className="message-input"
            placeholder="Type message..."
          />

          <button type="submit" className="message-submit">
            <i className="fa fa-send-o"></i>
          </button>
        </form>
        <h3 className="no-browser-support" hidden>
          Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening
          This Demo In Google Chrome.
        </h3>
      </div>
      <div className="bg"></div>
      {/* <button id="hide" className="button1">control</button> */}
      {/* <input type="button" className="btn btn-info button1" id="hide" value="Input Button"/> */}
      {/* <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
  <script  src="./JS/index.js"></script> */}

      {/* <script>
      var a=document.getElementById("hide");
      var b=document.getElementById("show");
      $(document).ready(function(){
  $(a).click(function(){
    $(b).toggle(2000);
  });
);

$(document).ready(function() {
   $(b).toggle();
});

function ClickON(){
  var c=document.getElementById("close");
$(document).ready(function() {
   $(b).hide(3000);
});
}  */}
    </div>
  );
};

export default ChatBot;
