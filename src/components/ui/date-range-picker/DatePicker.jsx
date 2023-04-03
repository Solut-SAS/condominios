import React, { useState } from "react";
// import DatePicker from "./DatePicker";

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setShowDatePicker(false);
  };

  const handleClear = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center border p-2 rounded-md cursor-pointer" onClick={toggleDatePicker}>
        <div>
          {startDate && endDate ? (
            <span>
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </span>
          ) : (
            <span className="text-gray-500">Seleccionar rango de fechas</span>
          )}
        </div>
      </div>
      {showDatePicker && (
        <div className="absolute z-10 top-full mt-2 left-0 right-0">
          <div className="bg-white shadow rounded-md">
            <div className="flex justify-between items-center p-2 border-b">
              <span className="text-gray-500">Seleccionar fecha de inicio</span>
              {startDate && (
                <button
                  className="text-gray-500"
                  onClick={() => {
                    setStartDate(null);
                  }}
                >
                  Limpiar
                </button>
              )}
            </div>
            <DatePicker value={startDate} onChange={handleStartDateChange} />
            <div className="flex justify-between items-center p-2 border-b">
              <span className="text-gray-500">Seleccionar fecha de fin</span>
              {endDate && (
                <button
                  className="text-gray-500"
                  onClick={() => {
                    setEndDate(null);
                  }}
                >
                  Limpiar
                </button>
              )}
            </div>
            <DatePicker value={endDate} onChange={handleEndDateChange} />
          </div>
        </div>
      )}
    </div>
  );
}

function DatePicker({ value, onChange }) {
  const handleChange = (event) => {
    const value = event.target.valueAsDate;
    if (value && !isNaN(value)) {
      onChange(value);
    }
  };

  return (
    <input
      type="date"
      className="block w-full p-2"
      value={value ? value.toISOString().split("T")[0] : ""}
      onChange={handleChange}
    />
  );
}

export default DateRangePicker;
