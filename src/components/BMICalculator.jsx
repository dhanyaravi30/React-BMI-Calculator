import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));

    if (calculatedBmi < 18.5) {
      setCategory('Underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setCategory('Normal weight');
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">React BMI Calculator</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Calculate</button>
      </form>

      {bmi && (
        <div className="mt-6 text-xl">
          <p>Your BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}

      

      <footer className="mt-6 text-sm text-gray-600">
        Copyright &copy; {new Date().getFullYear()} Dhanya K.R
      </footer>
    </div>
  );
};

export default BMICalculator;
