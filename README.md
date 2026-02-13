# 🌦️ Weather Application – React + TypeScript

A **feature-rich Weather Application** built using **React and TypeScript** that allows users to fetch weather information using **GPS location**, **city name**, **future dates**, and **multiple cities at once**.  
The application also visualizes **hourly temperature trends** using interactive charts.

This project focuses on **real-world frontend concepts** such as browser APIs, API integration, custom hooks, modular architecture, and data visualization.

---

## ✨ Key Features

- 🌍 **Current Weather**
  - Fetch weather using **GPS (live location)**
  - Fetch weather using **city name**
- 🗺️ **Reverse Geocoding**
  - Converts latitude & longitude into readable location names
- 📅 **Forecast Weather**
  - Multi-day forecast
  - Interactive **hourly temperature line chart**
- 🔮 **Future Weather**
  - Get weather for a selected future date
- 🏙️ **Multiple Locations**
  - Fetch weather for multiple cities at once
- 📊 **Interactive Charts**
  - Hourly temperature visualization using Recharts
- 🧩 **Clean Architecture**
  - Custom hook for logic
  - Separate services, components, and interfaces
- 🔐 **Type Safety**
  - Fully written in TypeScript

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|------------|
| Frontend | React |
| Language | TypeScript |
| Styling | CSS |
| Charts | Recharts |
| APIs | WeatherAPI |
| Reverse Geocoding | OpenStreetMap Nominatim |
| Browser APIs | navigator.geolocation |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── WeatherCard.tsx        # Displays weather data
│   ├── ForeCastCharts.tsx     # Forecast + hourly chart
│   └── *.css
│
├── hooks/
│   └── useWeather.ts          # Core logic & state handling
│
├── services/
│   ├── weatherAPI.ts          # Weather API calls
│   └── geocodeAPI.ts          # Reverse geocoding logic
│
├── interfaces/
│   ├── WeatherResponse.ts     # Current weather types
│   └── ForecastDetails.ts     # Forecast & future types
│
├── App.tsx                    # Main UI & routing logic
├── App.css
└── main.tsx
```

---

## 🔄 How the Project Works (Flow Explanation)

### 1️⃣ User Selects Weather Domain
The user chooses one of the following options:
- Current
- Forecast
- Future
- Multiple Locations

This selection updates the `selectedDomain` state.

---

### 2️⃣ User Provides Input
Depending on the selected domain:
- **GPS Mode** → No input needed
- **City Mode** → Enter city name
- **Forecast** → City + number of days
- **Future** → City + date
- **Multiple Locations** → Comma-separated city names

---

### 3️⃣ Custom Hook (`useWeather`)
All business logic is handled inside a **custom hook**:
- Manages state
- Handles domain switching
- Calls correct API based on domain
- Handles GPS logic

This keeps `App.tsx` clean and readable.

---

### 4️⃣ GPS-Based Weather Flow

```
navigator.geolocation
        ↓
latitude & longitude
        ↓
WeatherAPI (current weather)
        ↓
Reverse Geocoding
        ↓
Readable city/area name
        ↓
UI Rendering
```

---

### 5️⃣ Reverse Geocoding
Latitude and longitude are converted into a human-readable location using OpenStreetMap:

```ts
neighbourhood → suburb → city → null
```

This ensures the most accurate location name is shown.

---

### 6️⃣ API Layer (Services)
All API calls are isolated inside the `services` folder:
- `getCurrentWeather`
- `getForecastWeather`
- `getFutureWeather`
- `getMultipleLocations`

This makes the code reusable and easy to maintain.

---

### 7️⃣ Data Visualization (Forecast Chart)
- User clicks on any forecast day
- Hourly data for that day is extracted
- A **line chart** displays hourly temperature changes
- Chart updates dynamically when a different day is selected

---

### 8️⃣ UI Rendering
Based on the selected domain:
- `WeatherCard` renders current or future weather
- `ForeCastCharts` renders forecast + chart
- Multiple weather cards are rendered for multiple cities

---

## ▶️ Setup & Run Locally

### 1. Clone Repository
```bash
git clone https://github.com/riya-provus/WeatherApp-Week2.git
cd WeatherApp-Week2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:5173
```

---

## 🔐 Permissions & Notes

- Location access requires user permission
- GPS works only on HTTPS (localhost is allowed)
- Desktop GPS is approximate (Wi‑Fi/IP based)
- API key is currently stored in code (for learning purposes)

---

## 🚀 Possible Enhancements

- Loading & error states
- Dark mode
- API response caching
- City autocomplete
- Deployment to Netlify / GitHub Pages

---

## 📚 Learning Outcomes

- Using browser APIs safely
- Real-world API integration
- Designing scalable React architecture
- Writing type-safe frontend code
- Working with charts & dynamic data

---

## 👩‍💻 Author

**Riya Jadhav**  
React • TypeScript • Frontend Development

---

✅ *This README is suitable for GitHub, portfolio, exams, and academic submissions.*
