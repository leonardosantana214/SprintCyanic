import React, { createContext, useContext, useState } from 'react';

const FitnessItems = createContext();

const FitnessContextProvider = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

const useFitnessContext = () => {
  return useContext(FitnessItems);
};

export { FitnessContextProvider, useFitnessContext };
