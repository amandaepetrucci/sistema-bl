// components/Modal.tsx
import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  classProps: string;
};

export default function Modal({ isOpen, onClose, children, classProps }:ModalProps){
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`relative w-full p-6 bg-slate-300 rounded-lg shadow-lg overflow-y-auto ${classProps}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};