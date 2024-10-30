import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [imc, setImc] = useState<number | null>(null);
  const [classification, setClassification] = useState<string>('');

  const calculateIMC = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const calculatedIMC = parseFloat(weight) / (heightInMeters * heightInMeters);
      setImc(parseFloat(calculatedIMC.toFixed(2)));
      classifyIMC(calculatedIMC);
    }
  };

  const classifyIMC = (imc: number) => {
    if (imc < 18.5) {
      setClassification('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassification('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassification('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setClassification('Obesidade Grau I');
    } else if (imc >= 35 && imc < 39.9) {
      setClassification('Obesidade Grau II');
    } else {
      setClassification('Obesidade Grau III');
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Altura (cm):
          <input type="number" value={height} onChange={handleHeightChange} />
        </label>
        <br />
        <label>
          Peso (kg):
          <input type="number" value={weight} onChange={handleWeightChange} />
        </label>
        <br />
        <button type="button" onClick={calculateIMC}>Calcular IMC</button>
      </form>

      {imc !== null && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classification}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
