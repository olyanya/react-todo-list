import React from "react";

const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const today = `${date.getDate()} ${month} ${date.getFullYear()}`;

  let greeting = "";

  if (hours >= 0 && hours < 12) {
    greeting = "Good morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else if (hours >= 18 && hours < 21) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return (
    <div className="greeting-container">
      <div className="container">
        <div>
          <h1 className="greeting-text">
            <span role="img" aria-label="Hello">
              👋
            </span>{" "}
            {greeting}
          </h1>
          <p className="date-text">{today}</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
