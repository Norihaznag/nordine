import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 -b-2 -gray-900"></div>
  </div>
);

interface MessageProps {
  message: string;
}

export const SuccessMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="   text-green-600 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Success!</strong>
    <span className="block sm:inline"> {message}</span>
  </div>
);

export const FailureMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="  text-red-600 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Error!</strong>
    <span className="block sm:inline"> {message}</span>
  </div>
);