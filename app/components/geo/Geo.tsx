import { useState } from 'react';

const GetLocation = () => {
  const [location, setLocation] = useState<string>('Click the button to get your location');
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocation("Geolocation is not supported by your browser.");
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters.`);
  };

  const showError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocation("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setLocation("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setLocation("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setLocation("An unknown error occurred.");
        break;
    }
  };

  return (
    <div>
      <button onClick={getLocation} className="bg-blue-500 text-white px-4 py-2 rounded">Get My Location</button>
      <p>{location}</p>
    </div>
  );
};

export default GetLocation;
