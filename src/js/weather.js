const weather = {
  "cod": `200`,
  "message": 0.0032,
  "city": {
    "id": 1851632,
    "name": `Shuzenji`,
    "coord": {
      "lon": 138.933334,
      "lat": 34.966671
    },
    "country": `JP`
  },
  "cnt": 10,
  "list": [
    {
      "dt": 1406080800,
      "temp": {
        "day": 297.77,
        "min": 293.52,
        "max": 297.77,
        "night": 293.52,
        "eve": 297.77,
        "morn": 297.77
      },
      "pressure": 925.04,
      "humidity": 76,
      "weather": [
        {
          "id": 803,
          "main": `Clouds`,
          "description": `broken clouds`,
          "icon": `04d`
        }
      ]
    }
  ]
};

export default weather;
