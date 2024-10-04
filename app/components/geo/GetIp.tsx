import { useState } from 'react';

const GetUserIP = () => {
  const [userIP, setUserIP] = useState<string | null>(null);

  const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setUserIP(data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  return (
    <div>
      <button onClick={getUserIP} className="bg-blue-500 text-white px-4 py-2 rounded-md">Get My IP Address</button>
      {userIP && <p>Your IP Address: {userIP}</p>}
    </div>
  );
};

export default GetUserIP;
