// Create React calculator
import React from 'react';
import {useState, useEffect} from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [screenData, setScreenData] = useState('');
  const [operator, setOperator] = useState('');
  const [prevData, setPrevData] = useState('');
  const [result, setResult] = useState('0');
  const [prevOperator, setPrevOperator] = useState('');

  const childToParent = (childData) => {
    if(childData ==='-' && screenData === '' && result ==='' && prevData ===''){
      setScreenData('-');
    }
    if (childData === '=') {
      equals()
    } else if (childData === 'C') {
      setScreenData('');
      setPrevData('');
      setResult('0');
    } else if (operators.includes(childData) && operator === '' && screenData === '' ) {
      return;
    } else if (childData === '+' || childData === '-' || childData === '*' || childData === '/') {
      if(screenData === '') {
        return;
      }
      setPrevOperator(operator);
      setOperator(childData);
      setResult(screenData);
      setPrevData(screenData);
      setScreenData('');

      if(result && screenData && operator && operators.includes(childData)) {
        if (operator === '+' ) {
          setResult(parseFloat(result) + parseFloat(screenData));
        } else if (operator === '-') {
          setResult(parseFloat(result) - parseFloat(screenData));
        } else if (operator === '*') {
          setResult(parseFloat(result) * parseFloat(screenData));
        } else if (operator === '/') {
          setResult(parseFloat(result) / parseFloat(screenData));
        }
        setScreenData('')
      }
    } else {
      if (screenData === '0') {
        setScreenData(childData);
      } else {
        setScreenData(screenData + childData);
      }
    }
    console.log("Result " + result);
    console.log("prevData " + prevData);
    console.log("ScreenData " + screenData);
  };

  const equals = () => {
    if (prevData !== '' && screenData !== '' && prevOperator === '') {
      if (operator === '+' ) {
        setResult(parseFloat(prevData) + parseFloat(screenData));
      } else if (operator === '-') {
        setResult(parseFloat(prevData) - parseFloat(screenData));
      } else if (operator === '*') {
        setResult(parseFloat(prevData) * parseFloat(screenData));
      } else if (operator === '/') {
        setResult(parseFloat(prevData) / parseFloat(screenData));
      }
      setScreenData('')
    }else if(result && screenData && operator ) {
      if (operator === '+' ) {
        setResult(parseFloat(result) + parseFloat(screenData));
      } else if (operator === '-') {
        setResult(parseFloat(result) - parseFloat(screenData));
      } else if (operator === '*') {
        setResult(parseFloat(result) * parseFloat(screenData));
      } else if (operator === '/') {
        setResult(parseFloat(result) / parseFloat(screenData));
      }
      setScreenData('')
    }
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', 'C', '='];
  const operators = ['+', '-', '*', '/', 'C', '='];
  useEffect(() => {
  }, [childToParent]);
  return (
      <div className="App">
        <div className="target">{result}</div>
        <div className="target">{screenData}</div>
        <div className="target">
          <p>{prevData}<span>{operator}</span></p>
        </div>

        <div className="buttons">
          {numbers.map((number) => {
            return <Button number={number} name={number} childToParent={childToParent}/>
          })}
        </div>

      </div>
  );
}

export default App;