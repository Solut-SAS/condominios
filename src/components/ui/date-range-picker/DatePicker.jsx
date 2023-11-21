import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({ selectedDates }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      toggleDatePicker();
      selectedDates({ start, end });
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center border p-2 rounded-md cursor-pointer"
        onClick={toggleDatePicker}
      >
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
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          selectsDisabledDaysInRange
          inline
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      )}
    </div>
  );
}

export default DateRangePicker;
