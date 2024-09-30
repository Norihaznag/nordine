import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

interface MessageProps {
  message: string;
}

export const SuccessMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Success!</strong>
    <span className="block sm:inline"> {message}</span>
  </div>
);

export const FailureMessage: React.FC<MessageProps> = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Error!</strong>
    <span className="block sm:inline"> {message}</span>
  </div>
);