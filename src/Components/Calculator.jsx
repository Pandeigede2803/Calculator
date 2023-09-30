import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      // Check if the input ends with "%" and convert it to a decimal for percentage calculation
      let expression = input;
      if (input.endsWith('%')) {
        expression = (parseFloat(input) / 100).toString();
      }

      setResult(eval(expression).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      
      <div className=" bg-black rounded-lg p-4 shadow-md">
      <div className="mt-4">
          <p className="text-lg font-semibold text-white">Result:</p>
          <p className="text-4xl font-bold mt-2 mb-2 text-white">{result}</p>
        </div>
        <input
          type="text"
          className="w-full mb-4 p-2 border rounded-md text-slate-950"
          placeholder="Enter an expression"
          value={input}
          onChange={handleInputChange}
        />
        <div className="grid grid-cols-4 gap-2">
        <button
            className=" bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-red-600"
            onClick={clearInput}
          >
            AC
          </button>
        <button
            className=" bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('%')}
          >
            %
          </button>
          <button
            className=" bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
          <button
            className="bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('*')}
          >
            x
          </button>
        <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          
        
          <button
            className="bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('4')}
          >
            4
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button
            className="bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button
            className="bg-amber-400 text-white px-4 py-4 rounded-full hover:bg-green-600"
            onClick={handleCalculate}
          >
            =
          </button>
          <button
            className="bg-slate-900 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('.')}
          >
            ,
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('00')}
          >
            00
          </button>
          <button
            className="bg-slate-800 text-white px-4 py-4 rounded-full hover:bg-blue-600"
            onClick={() => handleButtonClick('000')}
          >
            000
          </button>
          
          
       
        </div>
        <div className="flex justify-between mt-2">
         
          
        </div>
        
      </div>
    </div>
  );
};

export default Calculator;
