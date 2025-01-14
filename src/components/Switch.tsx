// components/Switch.tsx
import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-6 rounded-full ${
          checked ? "bg-blue-600" : "bg-gray-300"
        } transition-colors duration-300`}
      >
        <span
          className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            checked ? "translate-x-4" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default Switch;
