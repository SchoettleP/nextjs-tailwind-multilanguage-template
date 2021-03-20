import { useState, useEffect } from 'react';
import Card from '@components/card';

function getCars() {
  // Here you can fetch you data -> fetch(url).then(...
  // I will return static data
  return [
    {
      id: 0,
      name: 'Audi TT',
      brand: 'Audi',
    },
    {
      id: 1,
      name: 'BMW M2',
      brand: 'BMW',
    },
    {
      id: 2,
      name: 'Dacia Dokker',
      brand: 'Dacia',
    },
  ];
}

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setCars(getCars());
    };
    loadData();
  }, []);

  return (
    <div className="flex flex-row flex-wrap w-full">
      {cars &&
        cars?.map((car) => (
          <Card key={car.id} title={car.name} body={car.brand} />
        ))}
    </div>
  );
};

export default Cars;
