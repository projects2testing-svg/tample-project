'use client'
import { useState, useEffect } from 'react';

const LiveTemperature = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Jorhat,IN&units=metric&appid=b05840a5c0fa9765b18219370ad23c77`
        );
        const data = await response.json();
        setTemperature(data.main.temp);
      } catch (error) {
        console.error('Error fetching temperature:', error);
        setTemperature(30.95);
      } finally {
        setLoading(false);
      }
    };

    fetchTemperature();
    const interval = setInterval(fetchTemperature, 3600000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <span>{temperature?.toFixed(1)}°C</span>
  );
};

export default LiveTemperature;