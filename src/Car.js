import "./App.css";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import CarArray from "./CarArray";
import CarCard from "./CarCard";

const Car = () => {
  const [searchField, setsearchField] = useState("");
  const onSearchChange = (event) => {
    setsearchField(event.target.value);
  };

  const filteredCar = CarArray.filter((car) => {
    return car.name.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(filteredCar);
  return (
    <div>
      <h1>Car</h1>
      <SearchBox searchChange={onSearchChange} />
      <CarCard mare={filteredCar} />
    </div>
  );
};

export default Car;
