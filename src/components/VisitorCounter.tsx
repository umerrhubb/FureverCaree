import React from 'react';
import { Users } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const VisitorCounter: React.FC = () => {
  const { visitorCount } = useAppContext();

  return (
    <div className="flex items-center space-x-2 text-mauve-100">
      <Users className="w-4 h-4" />
      <span className="font-poppins text-sm">
        Visitors: {visitorCount.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCounter;