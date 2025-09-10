import React, { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-mauve-100">
      <ClockIcon className="w-4 h-4" />
      <span className="font-poppins text-sm">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
};

export default Clock;