import { useState } from "react";
import "./ForeCastCharts.css";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Props {
  city: string;
  temp: number;
  condition: string;
  forecast: any[];
}

export const ForeCastCharts = ({city,temp,condition,forecast,}: Props) => {

  const [selectedDay, setSelectedDay] = useState(0);

  const hourlyData = forecast[selectedDay].hour.map((h: any) => ({
    time: h.time.split(" ")[1],
    temp: h.temp_c,
  }));

  return (
    <div className="weather-card">
        <div className="top">
          <h2>{city}</h2>
          <h1>{temp}°</h1>
          <p>{condition}</p>
        </div>

        <div className="weekly">
        {forecast.map((day: any, index: number) => (
          <div key={day.date} className={`day ${selectedDay === index ? "active" : ""}`}
            onClick={() => setSelectedDay(index)} 
            style={{ cursor: "pointer" }}>
            <p>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img src={day.day.condition.icon}/>

            <p>{day.day.maxtemp_c}°</p>
            <span>{day.day.mintemp_c}°</span>
          </div>
        ))}
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={hourlyData}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#000000"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
