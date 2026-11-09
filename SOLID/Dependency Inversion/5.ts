// Клас WeatherApp напряму викликає OpenWeatherAPI.

/*
class OpenWeatherAPIBad {
  getTemperature(city: string) { console.log(`${city}: 25°C`); }
}
class WeatherAppBad {
  private api = new OpenWeatherAPIBad(); // ❌ неможливо замінити на інший API
  showWeather(city: string) { this.api.getTemperature(city); }
}
*/


interface WeatherProvider {
  getTemperature(city: string): void;
}

class OpenWeatherAPI implements WeatherProvider {
  getTemperature(city: string): void {
    console.log(`OpenWeather API - ${city}: 25°C`);
  }
}

class SinoptikAPI implements WeatherProvider {
  getTemperature(city: string): void {
    console.log(`Sinoptik API - ${city}: 24.5°C`);
  }
}

class WeatherApp {
  constructor(private provider: WeatherProvider) {}

  showWeather(city: string): void {
    this.provider.getTemperature(city);
  }
}