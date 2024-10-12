import profile from "./assets/photo_yared.jpg";
const dateObj = new Date();
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
const date = `${dateObj.getDate()} ${
  months[dateObj.getMonth()]
} ${dateObj.getFullYear()} `;
export const userData = [
  { id: 1, name: "thomas", transac: "$45.00", date: date, profile: profile },
  { id: 2, name: "thomas", transac: "$45.00", date: date, profile: profile },
  { id: 3, name: "thomas", transac: "$45.00", date: date, profile: profile },
  { id: 4, name: "thomas", transac: "$45.00", date: date, profile: profile },
  { id: 5, name: "thomas", transac: "$45.00", date: date, profile: profile },
  { id: 6, name: "thomas", transac: "$45.00", date: date, profile: profile },
];
