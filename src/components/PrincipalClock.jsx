import React, { useEffect, useState } from 'react';
import Clock from './Clock';
import timezonedb from '../api/timezonedb';

function PrincipalClock() {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [timezoneData, setTimezoneData] = useState({
    abbreviation: '',
    zoneName: '',
  });

  const getCurrentCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        latitude: position.coords.latitude, // 20.9857697
        longitude: position.coords.longitude, // -101.2846977
      });
    });
  };

  const getTimezoneUsingCoords = async () => {
    const { data } = await timezonedb.get(`coordinate?lat=${coords.latitude}&lng=${coords.longitude}`);

    setTimezoneData({
      abbreviation: data.abbreviation,
      zoneName: data.zoneName,
    });
  };

  useEffect(() => {
    getCurrentCoords();
  }, []);

  useEffect(() => {
    getTimezoneUsingCoords();
  }, [coords]);

  return (
    <header className="flex flex-wrap flex-col content-center">
      <Clock zone={timezoneData.zoneName} isPrincipal />
      <section className="flex flex-row text-slate-400">
        <h2 className="text-xl font-bold">
          {timezoneData.zoneName}
        </h2>
        <p className="text-lg">
          &nbsp; &nbsp;
          {timezoneData.abbreviation}
        </p>
      </section>
    </header>
  );
}

export default PrincipalClock;
