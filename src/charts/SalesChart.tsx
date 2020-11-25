import React from "react";
import { Chart, LineAdvance } from "bizcharts";

const data = [
  {
    month: "يناير",
    city: "الرياض",
    temperature: 7,
  },
  {
    month: "يناير",
    city: "جدة",
    temperature: 3.9,
  },
  {
    month: "فبراير",
    city: "الرياض",
    temperature: 13,
  },
  {
    month: "فبراير",
    city: "جدة",
    temperature: 4.2,
  },
  {
    month: "مارس",
    city: "الرياض",
    temperature: 16.5,
  },
  {
    month: "مارس",
    city: "جدة",
    temperature: 5.7,
  },
  {
    month: "ابريل",
    city: "الرياض",
    temperature: 14.5,
  },
  {
    month: "ابريل",
    city: "جدة",
    temperature: 8.5,
  },
  {
    month: "مايو",
    city: "الرياض",
    temperature: 10,
  },
  {
    month: "مايو",
    city: "جدة",
    temperature: 11.9,
  },
  {
    month: "يونية",
    city: "الرياض",
    temperature: 7.5,
  },
  {
    month: "يونية",
    city: "جدة",
    temperature: 15.2,
  },
  {
    month: "يولية",
    city: "الرياض",
    temperature: 9.2,
  },
  {
    month: "يولية",
    city: "جدة",
    temperature: 17,
  },
  {
    month: "اغسطس",
    city: "الرياض",
    temperature: 14.5,
  },
  {
    month: "اغسطس",
    city: "جدة",
    temperature: 16.6,
  },
  {
    month: "سبتمبر",
    city: "الرياض",
    temperature: 9.3,
  },
  {
    month: "سبتمبر",
    city: "جدة",
    temperature: 14.2,
  },
  {
    month: "اكتوبر",
    city: "الرياض",
    temperature: 8.3,
  },
  {
    month: "اكتوبر",
    city: "جدة",
    temperature: 10.3,
  },
  {
    month: "نوفمبر",
    city: "الرياض",
    temperature: 8.9,
  },
  {
    month: "نوفمبر",
    city: "جدة",
    temperature: 5.6,
  },
  {
    month: "ديسمبر",
    city: "الرياض",
    temperature: 5.6,
  },
  {
    month: "ديسمبر",
    city: "جدة",
    temperature: 9.8,
  },
];

export const SalesChart = () => {
  return (
    <Chart padding={[20, 20, 50, 60]} autoFit height={300} data={data}>
      <LineAdvance
        shape="smooth"
        point
        area
        position="month*temperature"
        color="city"
      />
    </Chart>
  );
};
