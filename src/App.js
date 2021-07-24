import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [home, updateHome] = useState(true);
  const [aot, updateAot] = useState(false);
  const [ch, updateCh] = useState(false);
  const [ca, updateCa] = useState(false);
  const [quiz, updateQuiz] = useState(false);
  const [baseHeight, updateBaseHeight] = useState(false);
  const [threeSides, updateThreeSides] = useState(false);
  const [sas, updateSAS] = useState(false);

  const [angleone, updateAngleOne] = useState(0);
  const [angletwo, updateAngleTwo] = useState(0);
  const [anglethree, updateAngleThree] = useState(0);
  const [aotOutput, updateAotOutput] = useState("Output will be shown here");

  const [sideA, updateSideA] = useState(0);
  const [sideB, updateSideB] = useState(0);
  const [sideC, updateSideC] = useState(0);

  const [hyp, updatehyp] = useState("C= √a2+b2");

  const [result, updateResult] = useState();

  const [one, updateOne] = useState("");
  const [two, updateTwo] = useState("");
  const [three, updateThree] = useState("");
  const [four, updateFour] = useState("");
  const [five, updateFive] = useState("");
  const [six, updateSix] = useState("");
  const [seven, updateSeven] = useState("");
  const [eight, updateEight] = useState("");
  const [nine, updateNine] = useState("");
  const [ten, updateTen] = useState("");

  const [quizResult, updateQuizResult] = useState(
    "The Result will be Displayed here"
  );

  function anglesOfTraiangle() {
    updateHome(false);
    updateAot(true);
    updateCa(false);
    updateCh(false);
    updateQuiz(false);
  }

  function checkHypotunus() {
    updateHome(false);
    updateAot(false);
    updateCa(false);
    updateCh(true);
    updateQuiz(false);
  }

  function calculateArea() {
    updateHome(false);
    updateAot(false);
    updateCa(true);
    updateCh(false);
    updateQuiz(false);
  }

  function takeQuiz() {
    updateHome(false);
    updateAot(false);
    updateCa(false);
    updateCh(false);
    updateQuiz(true);
  }

  function goToHome() {
    updateHome(true);
    updateAot(false);
    updateCa(false);
    updateCh(false);
    updateQuiz(false);
  }

  function calculateAotOutput() {
    if (angleone + anglethree + angletwo === 180) {
      updateAotOutput("Yay Its a Triangle");
    } else if (angleone === 0 || angletwo === 0 || anglethree === 0) {
      updateAotOutput("Please Enter all values");
    } else {
      updateAotOutput("Oops! these angles cannot make a triangle");
    }
  }

  function calculateHypotenus() {
    if (sideA !== 0 && sideB !== 0) {
      updatehyp("C= " + Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)));
    }
  }
  function baseHeightArea() {
    updateResult(0.5 * sideA * sideB);
  }
  function threeSidesOfTriangle() {
    var semi = (sideA + sideB + sideC) / 2;
    updateResult(
      Math.sqrt(semi * (semi - sideA) * (semi - sideC) * (semi - sideB))
    );
  }

  function twoSidesAndAngle() {
    var deg = (sideC * Math.PI) / 180;
    updateResult(0.5 * sideA * sideB * Math.sin(deg));
  }
  function generateQuizResult() {
    var score = 0;
    if (one === "yes") {
      score++;
    }
    if (two === "no") {
      score++;
    }
    if (three === "yes") {
      score++;
    }
    if (four === "yes") {
      score++;
    }
    if (five === "yes") {
      score++;
    }
    if (six === "Isoceles") {
      score++;
    }
    if (seven === "30") {
      score++;
    }
    if (eight === "Both") {
      score++;
    }
    if (nine === "5") {
      score++;
    }
    if (ten === "Scalene") {
      score++;
    }
    updateQuizResult("Result: " + score);
  }

  return (
    <div className="App">
      {home ? (
        <div>
          <h1>Welcome to fun with Triangles</h1>
          <button onClick={anglesOfTraiangle}>Angles of Triangle</button>
          <button onClick={checkHypotunus}>Check hypotenus</button>
          <br></br>
          <button onClick={calculateArea}>Calculate area</button>
          <button onClick={takeQuiz}>Take a quiz</button>
        </div>
      ) : null}
      {aot ? (
        <div className={"aot"}>
          <button className={"back-button"} onClick={goToHome}>
            <span className={"arrow"}>&#8592;</span>Back to Home
          </button>
          <br></br>
          <h2>Enter the 3 Angles of the triangle</h2>
          <input
            type="number"
            min="1"
            onChange={(event) => {
              updateAngleOne(Number(event.target.value));
            }}
          ></input>
          <input
            type="number"
            min="1"
            onChange={(event) => {
              updateAngleTwo(Number(event.target.value));
            }}
          ></input>
          <input
            type="number"
            min="1"
            onChange={(event) => {
              updateAngleThree(Number(event.target.value));
            }}
          ></input>
          <br></br>
          <button className={"submit"} onClick={calculateAotOutput}>
            submit
          </button>
          <br></br>
          <br></br>
          <h3>{aotOutput}</h3>
        </div>
      ) : null}
      <br></br>
      {ch ? (
        <div className={"hyp"}>
          <button className={"back-button"} onClick={goToHome}>
            <span className={"arrow"}>&#8592;</span>Back to Home
          </button>
          <br></br>
          <h2>Enter the lengths of the sides of the triangle</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rtriangle.svg/1200px-Rtriangle.svg.png"
            alt="Its a right angle triangle"
          ></img>
          <h4>
            a={" "}
            <input
              type="number"
              min="0.1"
              onChange={(event) => {
                updateSideA(event.target.value);
              }}
            ></input>
          </h4>
          <h4>
            b={" "}
            <input
              type="number"
              min="0.1"
              onChange={(event) => {
                updateSideB(event.target.value);
              }}
            ></input>
          </h4>
          <button className={"submit"} onClick={calculateHypotenus}>
            submit
          </button>
          <br></br>
          <br></br>
          <h2>Hypotenuse will be calculated here-</h2>
          <h3>{hyp}</h3>
        </div>
      ) : null}
      {ca ? (
        <div className={"ca"}>
          <button className={"back-button"} onClick={goToHome}>
            <span className={"arrow"}>&#8592;</span>Back to Home
          </button>
          <h2>Calculate Area</h2>
          <h3>
            Select an option below as per the data you have for a triangle
          </h3>
          <button
            onClick={() => {
              updateBaseHeight(true);
              updateThreeSides(false);
              updateSAS(false);
            }}
          >
            Base and height length
          </button>
          <button
            onClick={() => {
              updateBaseHeight(false);
              updateThreeSides(true);
              updateSAS(false);
            }}
          >
            Three Sides of Triangle
          </button>
          <button
            onClick={() => {
              updateBaseHeight(false);
              updateThreeSides(false);
              updateSAS(true);
            }}
          >
            Two sides and included angle
          </button>

          {baseHeight ? (
            <div className={"bhl"}>
              <h3>Enter the base and height of the triangle</h3>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideA(Number(event.target.value))}
              ></input>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideB(Number(event.target.value))}
              ></input>
              <br></br>
              <button className={"submit"} onClick={baseHeightArea}>
                Submit
              </button>
              <h3>Result:{result}</h3>
            </div>
          ) : null}

          {threeSides ? (
            <div className={"tst"}>
              <h3>Enter the three sides of the triangle of the triangle</h3>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideA(Number(event.target.value))}
              ></input>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideB(Number(event.target.value))}
              ></input>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideC(Number(event.target.value))}
              ></input>
              <button className={"submit"} onClick={threeSidesOfTriangle}>
                Submit
              </button>
              <h3>Result:{result}</h3>
            </div>
          ) : null}
          {sas ? (
            <div className={"tsa"}>
              <h3>
                Enter 2 sides and included angle(degrees) in the folowing boxes
                respectively
              </h3>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideA(Number(event.target.value))}
              ></input>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideB(Number(event.target.value))}
              ></input>
              <input
                type="number"
                min="0"
                onChange={(event) => updateSideC(Number(event.target.value))}
              ></input>
              <button className={"submit"} onClick={twoSidesAndAngle}>
                Submit
              </button>
              <h3>Result:{result}</h3>
            </div>
          ) : null}
        </div>
      ) : null}
      {quiz ? (
        <div className={"quiz"}>
          <button className={"back-button"} onClick={goToHome}>
            <span className={"arrow"}>&#8592;</span>Back to Home
          </button>
          <br></br>
          <form>
            <div>
              <label className="question">
                1. If a triangle has angles 135<sup>0</sup>, 15<sup>0</sup>, 30
                <sup>0</sup>. Is it an obtuse triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que1"
                  value="yes"
                  onChange={() => updateOne("yes")}
                ></input>
                yes
                <input
                  required
                  type="radio"
                  name="que1"
                  value="no"
                  onChange={() => updateOne("no")}
                ></input>
                no
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                2. If a triangle has angles 1150, 250, 400. Is it an acute
                triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que2"
                  value="yes"
                  onChange={() => updateTwo("yes")}
                ></input>
                yes
                <input
                  required
                  type="radio"
                  name="que2"
                  value="no"
                  onChange={() => updateTwo("no")}
                ></input>
                no
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                3. If a triangle has angles 900, 600, 300. Is it a right angle
                triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que3"
                  value="yes"
                  onChange={() => updateThree("yes")}
                ></input>
                yes
                <input
                  required
                  type="radio"
                  name="que3"
                  value="no"
                  onChange={() => updateThree("no")}
                ></input>
                no
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                4. A triangle has angles 60<sup>0</sup>, 60<sup>0</sup>, 60
                <sup>0</sup>. Is it an equilateral triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que4"
                  value="yes"
                  onChange={() => updateFour("yes")}
                ></input>
                yes
                <input
                  required
                  type="radio"
                  name="que4"
                  value="no"
                  onChange={() => updateFour("no")}
                ></input>
                no
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                5. If a triangle has angles 25<sup>0</sup>, 75<sup>0</sup>, 80
                <sup>0</sup>. Is it an acute triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que5"
                  value="yes"
                  onChange={() => updateFive("yes")}
                ></input>
                yes
                <input
                  required
                  type="radio"
                  name="que5"
                  value="no"
                  onChange={() => updateFive("no")}
                ></input>
                no
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                6. If a triangle has 2 sides with equal lengths and 75
                <sup>0</sup> angle between them. What is the type of triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que6"
                  value="Equilateral"
                  onChange={() => updateSix("Equilateral")}
                ></input>
                Equilateral
                <input
                  required
                  type="radio"
                  name="que6"
                  value="Isoceles"
                  onChange={() => updateSix("Isoceles")}
                ></input>
                Isoceles
                <input
                  required
                  type="radio"
                  name="que6"
                  value="Right angled"
                  onChange={() => updateSix("Right angled")}
                ></input>
                Right angled
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                7. If a triangle has 2 angles of 75<sup>0</sup>. What is the
                measure of third angle in degree?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que7"
                  value="25"
                  onChange={() => updateSeven("25")}
                ></input>
                25
                <input
                  required
                  type="radio"
                  name="que7"
                  value="30"
                  onChange={() => updateSeven("30")}
                ></input>
                30
                <input
                  required
                  type="radio"
                  name="que7"
                  value="50"
                  onChange={() => updateSeven("50")}
                ></input>
                50
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                8. If a triangle has 2 sides with equal lengths and 60
                <sup>0</sup> angle between them. What is the type of triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que8"
                  value="Equilateral"
                  onChange={() => updateEight("Equilateral")}
                ></input>
                Equilateral
                <input
                  required
                  type="radio"
                  name="que8"
                  value="Isoceles"
                  onChange={() => updateEight("Isoceles")}
                ></input>
                Isoceles
                <input
                  required
                  type="radio"
                  name="que8"
                  value="Both"
                  onChange={() => updateEight("Both")}
                ></input>
                Both
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                9. The perimeter of an equilateral triangle is 15cm. What is the
                length of one side?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que9"
                  value="15"
                  onChange={() => updateNine("15")}
                ></input>
                15
                <input
                  required
                  type="radio"
                  name="que9"
                  value="45"
                  onChange={() => updateNine("45")}
                ></input>
                45
                <input
                  required
                  type="radio"
                  name="que9"
                  value="5"
                  onChange={() => updateNine("5")}
                ></input>
                5
              </label>
            </div>
            <div className={"block"}>
              <label className="question">
                10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type
                of triangle?
              </label>
              <label className="label">
                <br></br>
                <input
                  required
                  type="radio"
                  name="que10"
                  value="Equilateral"
                  onChange={() => updateTen("Equilateral")}
                ></input>
                Equilateral
                <input
                  required
                  type="radio"
                  name="que10"
                  value="noIsoceles"
                  onChange={() => updateTen("noIsoceles")}
                ></input>
                Isoceles
                <input
                  required
                  type="radio"
                  name="que10"
                  value="Scalene"
                  onChange={() => updateTen("Scalene")}
                ></input>
                Scalene
              </label>
            </div>
          </form>

          <button className={"submit"} onClick={generateQuizResult}>
            Submit
          </button>
          <h5>{quizResult}</h5>
        </div>
      ) : null}
    </div>
  );
}
