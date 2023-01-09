import React, { useEffect, useState } from "react";
import DateFormat from "date-format-latest-2";
const Temp = () => {
  const [date, setDate] = useState(DateFormat());

  useEffect(() => {
    let temp = date.substring(0, 2);

    setDate(Number(temp.trim()) + 3);
  }, []);

  return (
    <span>
      {date} {DateFormat().substring(2, DateFormat().length)}
    </span>
  );
};

export default Temp;
