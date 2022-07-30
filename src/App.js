/* eslint-disable */
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["JavaScript", "React", "Vue"]);

  let [modal, SetModal] = useState(false);
  let [like, setLike] = useState([0, 0, 0]);
  let [title, setTitle] = useState(0);
  const [inputvalue, setInputValue] = useState("");

  return (
    <div className="App">
      <Header />

      {글제목.map(function (lists, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                SetModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
            </h4>
            <span>공부한 날짜 🧑🏻‍💻</span>

            <span
              style={{
                padding: "3px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                marginRight: "20px",
              }}
              onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}
            >
              {like[i]}
            </span>
            <button
              onClick={() => {
                let tep = [...글제목];
                tep.splice(i, 1);
                글제목변경(tep);
              }}
            >
              {" "}
              삭제{" "}
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          let copy = [...글제목];
          copy.unshift(inputvalue);
          if (inputvalue === "") {
            confirm("Error");
            return;
          }
          글제목변경(copy);
        }}
      >
        {" "}
        글 작성{" "}
      </button>

      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
    </div> //
  );
}

// header =>
function Header() {
  const [logoText, SetLogoText] = useState("WJ Study LOG");

  return (
    <div className="nav-bar">
      <h4> {logoText} 🧑🏻‍💻 </h4>
    </div>
  );
}

// modal =>

function Modal(props) {
  return (
    <div className="Modal">
      <h3>제목 : {props.글제목[props.title]}</h3>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}
// Footer
const Footer = () => {
  return (
    <div className=" Footer ">
      <h3>made by woojoung</h3>
      <p>contact</p>
    </div>
  );
};

export default App;
