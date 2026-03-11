<script lang="ts">
  import { onMount } from 'svelte';
  import type { Coffee, GeoResult, CurrentWeather } from '$lib/types';

  //  WEATHER CODE LOOKUP
  const weatherDescriptions: Record<number, string> = {
    0: 'Clear sky', 1: 'Mostly clear',
    2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 51: 'Drizzle', 61: 'Rain',
    71: 'Snow', 80: 'Showers', 95: 'Thunderstorm',
  };

  // MY TASTED COFFEES
  // Coffee[] type ensures every entry has the right fields
  const tastedCoffees: Coffee[] = [
    { roaster: '19', country: 'Panama', region: 'Lino', farm: 'Hacienda La Esmeralda', producer: null, variety: 'Gesha', process: 'Washed', rating: 9 },
    { roaster: '19', country: 'Panama', region: 'Cabana Abajo', farm: 'Hacienda La Esmeralda', producer: null, variety: 'Gesha', process: 'Natural', rating: 8 },
    { roaster: 'Aviary', country: 'Rwanda', region: 'Gakenke', farm: null, producer: 'Emmanuel Rusatira', variety: 'Red Bourbon', process: 'Honey + Washed', rating: 9 },
    { roaster: 'Aviary', country: 'India', region: 'Kerehaklu', farm: null, producer: 'Pranoy Thipaiah', variety: 'Selection 9', process: 'Cultured Washed', rating: 6 },
    { roaster: 'Aviary', country: 'Colombia', region: 'La Plata', farm: null, producer: 'Demetrio Sánchez Pino', variety: 'Gesha', process: 'Washed', rating: 8 },
    { roaster: 'Buon', country: 'Ethiopia', region: 'Guji', farm: 'Uraga', producer: null, variety: 'Heirloom', process: 'Washed', rating: 4 },
    { roaster: 'Buon', country: 'Kenya', region: 'Kirinyaga', farm: 'Kamwangi', producer: null, variety: 'SL28, SL34', process: 'Washed', rating: 4 },
    { roaster: 'Forward', country: 'Colombia', region: 'Cali', farm: 'CGLE', producer: null, variety: 'Java', process: 'Natural', rating: 9 },
    { roaster: 'Friedhats', country: 'Ethiopia', region: 'Yirgacheffe', farm: null, producer: 'Negele Gorbitu', variety: 'Ethiopian Landrace', process: 'Anaerobic Natural', rating: 9 },
    { roaster: 'Fuglen', country: 'Peru', region: null, farm: 'La Chancha', producer: null, variety: 'Red & Yellow Caturra', process: 'Washed', rating: 1 },
    { roaster: 'H&S', country: 'Colombia', region: 'Cauca', farm: 'Patio Bonito', producer: 'Paola Trujillo', variety: 'Wush Wush', process: 'Washed', rating: 5 },
    { roaster: 'H&S', country: 'Colombia', region: 'Huila', farm: 'El Diviso', producer: 'Nestor Lasso', variety: 'Gesha', process: 'HI Washed', rating: 8 },
    { roaster: 'H&S', country: 'Ecuador', region: 'Saraguro', farm: 'La Papaya', producer: 'Juan Peña', variety: 'Typica Mejorado', process: 'Washed', rating: 10 },
    { roaster: 'Haimoon', country: 'Colombia', region: null, farm: 'Campo Hermoso', producer: 'Edward Norena', variety: 'Sudan Rume', process: 'Washed CM', rating: 8 },
    { roaster: 'Hydrangea', country: 'USA', region: 'Santa Barbara', farm: 'Finca 1980', producer: 'FRINJ Coffee', variety: 'Gesha', process: 'Yeast Washed', rating: 8 },
    { roaster: 'Hydrangea', country: 'Guatemala', region: 'Suchitan', farm: 'Coffea Diversa', producer: 'Gonzalo Hernandez & Jose Padilla', variety: 'Sudan Rume', process: 'Natural', rating: 7 },
    { roaster: 'Hydrangea', country: 'Panama', region: 'Mt. Totumas, Chiriqui', farm: null, producer: 'Karin De La Rosa', variety: 'Gesha', process: 'Mosto Washed', rating: 8 },
    { roaster: 'Khaos Coffee Noiser', country: 'Malaysia', region: 'Kulai, Johor', farm: 'My Liberica', producer: null, variety: 'Liberica', process: 'Anaerobic Natural', rating: 8 },
    { roaster: 'Kite', country: 'Colombia', region: 'Huila', farm: 'Monte Blanco', producer: null, variety: 'Purple Caturra', process: 'Kumquat Washed', rating: 8 },
    { roaster: 'Kite', country: 'Ethiopia', region: 'Guji', farm: 'Buku Sayisa', producer: null, process: 'SLD Natural', rating: 5 },
    { roaster: 'Kite', country: 'Taiwan', region: 'Alishan', farm: 'Yangui', producer: null, variety: 'Gesha', process: 'Natural', rating: 6 },
    { roaster: 'La Cabra', country: 'Costa Rica', region: 'West Valley', farm: 'Sumava', producer: 'Francisco Mena', variety: 'Gesha', process: 'Honey', rating: 5 },
    { roaster: 'La Cabra', country: 'Ecuador', region: 'Azuay', farm: null, producer: 'Juan Carlos Velez', variety: 'Typica', process: 'Natural', rating: 6 },
    { roaster: 'La Cabra', country: 'Rwanda', region: 'Gakenke', farm: 'Bumbogo', producer: null, variety: 'Bourbon', process: 'Washed', rating: 2 },
    { roaster: 'La Cafe Lontan', country: 'La Réunion', region: 'La Réunion', farm: 'La Cafe Lontan', producer: null, variety: 'Bourbon Pointu', process: null, rating: 7 },
    { roaster: 'Locals', country: 'Tanzania', region: 'Kilimanjaro', farm: 'Kilikafee', producer: null, rating: 0 },
    { roaster: 'Locals', country: 'Tanzania', region: 'Moshi', farm: null, producer: 'Chagga People', rating: 5 },
    { roaster: 'Mame', country: 'Panama', region: 'Chiriqui', farm: 'Mi Finquita', producer: null, variety: 'Caturra', process: 'Natural', rating: 9 },
    { roaster: 'Metric', country: 'Peru', region: null, farm: null, producer: 'Percy Pintado', variety: 'Bouron', process: 'Washed', rating: 5 },
    { roaster: 'noon', country: 'Costa Rica', region: 'West Valley', farm: 'V&G', producer: null, variety: 'H1', process: 'Natural', rating: 9 },
    { roaster: 'Oasis', country: 'Costa Rica', region: 'Tarazu', farm: 'Don Eli', producer: 'Montero Family', variety: 'Catuai', process: 'Yabai', rating: 6 },
    { roaster: 'Oasis', country: 'Ecuador', region: 'Loja', farm: 'La Papaya', producer: 'Guillermo Lomas', variety: 'Sidra', process: 'Washed', rating: 9 },
    { roaster: 'Oasis', country: 'Ecuador', region: 'Loja', farm: 'La Papaya', producer: 'Juan Peña', variety: 'B7', process: 'Anaerobic Natural', rating: 8 },
    { roaster: 'Oasis', country: 'Ethiopia', region: 'West Arsi', farm: 'Mewa', producer: null, variety: '74110, 74112', process: 'Washed', rating: 4 },
    { roaster: 'Ongu', country: 'Colombia', region: 'Huila', farm: 'El Diviso', producer: null, variety: 'Sidra', process: 'Washed', rating: 8 },
    { roaster: 'Ongu', country: 'Ecuador', region: 'Azuay', farm: null, producer: 'Juan Carlos Velez', variety: 'Mejorado', process: 'Washed', rating: 3 },
    { roaster: 'Ongu', country: 'Ecuador', region: 'Saraguro', farm: 'La Papaya', producer: null, variety: 'Mejorado', process: 'Natural', rating: 7 },
    { roaster: 'Ongu', country: 'El Salvador', region: 'Chaltenango', farm: 'El Mural', producer: null, variety: 'Pacas', process: 'Honey', rating: 3 },
    { roaster: 'Ongu', country: 'Honduras', region: 'Marcala', farm: 'El Puente', producer: null, variety: 'Java', process: 'Natural', rating: 3 },
    { roaster: 'Ongu', country: 'Kenya', region: 'Machakos', farm: null, producer: null, variety: 'SL28, SL34', process: 'Washed', rating: 2 },
    { roaster: 'Onyx', country: 'Uganda', region: null, farm: 'Long Miles Lumar Station', producer: null, variety: 'SL28', process: 'Natural', rating: 7 },
    { roaster: 'RockyDoggy', country: 'Ethiopia', region: 'Yirgacheffe', farm: null, producer: 'Shiferaw Kursu', variety: '74110, 74112', process: 'Washed', rating: 6 },
    { roaster: 'RockyDoggy', country: 'Panama', region: 'Boquete', farm: 'Hacienda La Esmeralda', producer: null, variety: 'Gesha', process: 'Washed', rating: 7 },
    { roaster: 'RockyDoggy', country: 'Panama', region: 'Palmira', farm: 'Finca Vanguardia', producer: 'Casa Ruiz', variety: 'Catuai, Caturra', process: 'Natural', rating: 5 },
    { roaster: 'Rufous', country: 'Honduras', region: 'Intibaca', farm: 'Reyes', producer: null, variety: 'IH-90', process: 'Washed', rating: 5 },
    { roaster: 'SEY', country: 'Burundi', region: 'Muramvya', farm: 'Bukeye', producer: 'Musumba Hills', variety: 'Field Blend', process: 'Washed', rating: 5 },
    { roaster: 'SEY', country: 'Colombia', region: 'Huila', farm: 'Las Galaxias', producer: 'Nemesio Ramos', variety: 'Caturra', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Colombia', region: 'Huila', farm: 'El Nacedero', producer: 'Mariela Munoz', variety: 'Pink Bourbon', process: 'Washed', rating: 8 },
    { roaster: 'SEY', country: 'Colombia', region: 'Santa Barbara', farm: 'El Recreo', producer: 'Diego Ucros, Fernando Ucros', variety: 'Gesha', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Colombia', region: 'Huila', farm: 'La Chorrera', producer: 'Voctor Alfonso Bonilla', variety: 'Aruzi', process: 'Washed', rating: 8 },
    { roaster: 'SEY', country: 'Colombia', region: 'Huila', farm: 'La Loma', producer: 'Wilmer Moncayo, Yenni Moncayo', variety: 'Pink Bourbon', process: 'Washed', rating: 5 },
    { roaster: 'SEY', country: 'Ecuador', region: 'Loja', farm: 'Finca Surya', producer: 'Francisco Vintimilla, Pepe Jijon', variety: 'Mejorado', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Ecuador', region: 'Saraguro', farm: null, producer: 'Maritza Dota', variety: 'Mejorao', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Ethiopia', region: 'Bensa, Sidama', farm: 'Hamasho', producer: null, variety: 'Ethiopian Landrace', process: 'Traditional Honey', rating: 5 },
    { roaster: 'SEY', country: 'Ethiopia', region: 'Bona Zuria, Sidama', farm: 'Demeka Becha', producer: null, variety: 'Ethiopian Landrace', process: 'Washed', rating: 7 },
    { roaster: 'SEY', country: 'Ethiopia', region: 'Bensa, Sidama', farm: 'Hamasho', producer: null, variety: 'Ethiopian Landrace', process: 'Dry-Fermented Honey', rating: 5 },
    { roaster: 'SEY', country: 'Honduras', region: 'Santa Barbara', farm: null, producer: 'Daniel Ariel Guzman', variety: 'Pacas', process: 'Washed', rating: 5 },
    { roaster: 'SEY', country: 'Kenya', region: 'Embu', farm: 'Kamavindi Estate', producer: 'Mbature Family', variety: 'SL34, SL28, Ruiru11, Batian', process: 'Washed', rating: 9 },
    { roaster: 'SEY', country: 'Kenya', region: 'Embu', farm: 'Kamavindi Estate', producer: 'Mbature Family', variety: 'SL34', process: 'Washed', rating: 9 },
    { roaster: 'SEY', country: 'Kenya', region: 'Embu', farm: 'Kamavindi Estate', producer: 'Mbature Family', variety: 'SL28', process: 'Washed', rating: 8 },
    { roaster: 'SEY', country: 'Panama', region: 'Alto Quiel, Boquete', farm: 'Elida Estate', producer: 'The Lamastus Family', variety: 'Green Tip Gesha', process: 'Washed', rating: 8 },
    { roaster: 'SEY', country: 'Peru', region: 'Amaybamba, Cusco', farm: 'SOQOY QARA', producer: 'Isidro Orosco', variety: 'SL9', process: 'Washed', rating: 10 },
    { roaster: 'SEY', country: 'Peru', region: 'Incahuasi, Cusco', farm: 'El Nevado', producer: 'Marlene Rojas', variety: 'SL9', process: 'Washed', rating: 10 },
    { roaster: 'SEY', country: 'Peru', region: 'Pacaypata, Cusco', farm: 'Los Pinos', producer: 'Armando Hurtado', variety: 'SL9', process: 'Washed', rating: 10 },
    { roaster: 'SEY', country: 'Peru', region: 'Pacaysuizo', farm: null, producer: 'Familia Quilla', variety: 'Bourbon', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Panama', region: 'Cerra Punta', farm: 'Los Cenizos', producer: 'Estela Pitti', variety: 'Gesha', process: 'Honey', rating: 8 },
    { roaster: 'SEY', country: 'Colombia', region: 'Huila', farm: 'El Cedro', producer: 'Servio Botina', variety: 'Pink Bourbon', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Ethiopia', region: 'Bona', farm: 'Kokobe', producer: 'Lot #158', variety: 'Landrace', process: 'Honey', rating: 7 },
    { roaster: 'SEY', country: 'Ethiopia', region: 'Arbegona, Sidama', farm: 'Yaye Arbegona', producer: null, variety: 'Landrace', process: 'Washed', rating: 6 },
    { roaster: 'SEY', country: 'Colombia', region: 'Huila', farm: 'La Cosechita', producer: null, variety: 'Pink Bourbon', process: 'Washed', rating: 8 },
    { roaster: 'SEY', country: 'Ethiopia', region: 'Hambella, Guji', farm: 'Bishan Wate', producer: null, variety: 'Landrace', process: 'Washed', rating: 8 },
    { roaster: 'SEY', country: 'Colombia', region: 'Palermo, Huila', farm: 'Las Brisas', producer: 'Leonel Oviedo', variety: 'Pink Bourbon', process: 'Washed', rating: 6 },
    { roaster: 'Shoebox', country: 'Ethiopia', region: 'Worka, Yirgacheffe', farm: null, producer: 'Mr. Tadese Teko', variety: 'Landrace', process: 'Washed', rating: 7 },
    { roaster: 'Stopover', country: 'Colombia', region: 'Huila', farm: 'Santa Finca Costa Rica', producer: null, variety: 'Pink Bourbon', process: 'Washed', rating: 6 },
    { roaster: 'Thankfully', country: 'Ecuador', region: 'Imbabura', farm: 'Finca Soledad', producer: null, variety: 'Mejorado', process: 'Honey', rating: 7 },
    { roaster: 'Thankfully', country: 'Ecuador', region: 'Putushio, Loja', farm: 'Finca San Pedro', producer: null, variety: 'Mejorado', process: 'Washed', rating: 7 },
    { roaster: '一街咖啡', country: 'Ethiopia', region: null, farm: null, producer: null, variety: 'Gesha', process: 'Natural', rating: 7 },
    { roaster: '八分目', country: 'Costa Rica', region: 'West Valley Naranjo', farm: 'Rejolla', producer: null, variety: 'Gesha', process: 'Rested Red Honey', rating: 5 },
    { roaster: '卓武山', country: 'Taiwan', region: 'Alishan', farm: '卓武山咖啡農場', producer: null, variety: 'Gesha', process: 'Washed', rating: 7 },
    { roaster: '行動者', country: 'Taiwan', region: 'Taitung', farm: '流淚谷', producer: '瘋狂咖啡師 Amis', variety: 'Typica', process: 'Anaerobic Natural', rating: 6 },
    { roaster: '鄒築園', country: 'Taiwan', region: 'Alishan', farm: '鄒築園', producer: '方政倫', variety: 'Gesha', process: 'Natural', rating: 7 },
    { roaster: 'Ceto', country: 'Costa Rica', region: null, farm: 'Brumas del Zurqui', producer: 'Family Rodríguez Carballo', variety: 'Gesha', process: 'Natural', rating: 3 },
    { roaster: 'Ceto', country: 'Colombia', region: 'La Plata, Huila', farm: 'Mártir Coffee', producer: 'Yesid Pajoy', variety: 'Java', process: 'Natural', rating: 3 },
    { roaster: 'Rising Coffee', country: 'Panama', region: 'Cañas Verdes, Boquete', farm: 'Abu Coffee', producer: 'José Lutrell', variety: 'Gesha', process: 'Natural', rating: 7 },
    { roaster: 'SEY', country: 'Peru', region: 'Inkawasi, Cusco', farm: 'Aromas De Aniz', producer: 'Jhon Saenz', variety: 'SL9', process: 'Washed', rating: 6 },
    { roaster: 'Metric', country: 'Costa Rica', region: 'Tarrazú', farm: 'Don Eli Manzanal', producer: 'The Montero Family', variety: 'Catuai', process: 'Honey', rating: 4 },
    { roaster: 'Metric', country: 'Honduras', region: 'Santa Bárbara', farm: 'La Sierra', producer: 'Alma Pineda', variety: 'Parainema', process: 'Washed', rating: 3 },
  ];

  // SIDEBAR
  const sidebarTitle = 'Coffee Tasting Map';
  const sidebarDesc  = "An interactive, geocoded archive of my single-origin coffee tastings, linking sensory notes to origin regions and real-time weather data to present the relationship between location, terrrain, climate, and flavor. Each pin represents a coffee I've tasted, colored by rating and linked to detailed documentation of its origin, processing method, and roaster.";
  const sidebarNote  = 'Pins are geocoded on load via the Open Meteo API. It may take a few seconds for all pins to appear.';

  // STATS computed automatically from tastedCoffees
  $: totalCoffees   = tastedCoffees.length;
  $: totalCountries = [...new Set(tastedCoffees.map(c => c.country))].length;
  $: topRated       = tastedCoffees.filter(c => c.rating != null && c.rating >= 9).length;

  // MAP STATE
  // Typed so TypeScript knows what each variable holds 
  let map: any;
  // Leaflet library (dynamically imported)
  let L: any; 
  let searchQuery:   string  = '';
  let searchMarker:  any     = null;
  let coffeeMarkers: any[]   = [];
  let isSearching:   boolean = false;
  let searchError:   string  = '';

  // GEOCODING calls Open-Meteo geocoding API 
  async function geocodeQuery(query: string): Promise<GeoResult | null> {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
    const res  = await fetch(url);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      return {
        lat:     data.results[0].latitude,
        lng:     data.results[0].longitude,
        name:    data.results[0].name,
        country: data.results[0].country,
      };
    }
    return null;
  }

  // RATING to COLOR 
  function ratingColor(rating: number): string {
    if (rating === null || rating === undefined) return '#94a3b8';
    if (rating >= 9) return '#22c55e';
    if (rating >= 7) return '#f59e0b';
    if (rating >= 5) return '#f97316';
    return '#ef4444';
  }

  // GEOCODE ALL COFFEES ON LOAD 
  async function geocodeCoffees(): Promise<void> {
    const seen: Record<string, GeoResult | null> = {}; 
    for (const coffee of tastedCoffees) {
      const regionKey  = coffee.region ? `${coffee.region}, ${coffee.country}` : null;
      const countryKey = coffee.country;

      if (regionKey) {
        if (!seen[regionKey]) {
          seen[regionKey] = await geocodeQuery(regionKey);
          await new Promise(r => setTimeout(r, 80));
        }
        coffee._geo = seen[regionKey];
      }

      if (!coffee._geo) {
        if (!seen[countryKey]) {
          seen[countryKey] = await geocodeQuery(countryKey);
          await new Promise(r => setTimeout(r, 80));
        }
        coffee._geo = seen[countryKey];
      }

      // Render this pin immediately as soon as it is ready ──
      if (coffee._geo) renderPin(coffee);
    }
  }

  // RENDER COFFEE PINS appear one by one ──
  function renderPin(coffee: Coffee): void {
    const color = ratingColor(coffee.rating);

    // Pin size
    const icon = L.divIcon({
      html: `<div style="
        width: 14px; height: 14px;
        background: ${color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 1px 4px rgba(0,0,0,0.4);
        cursor: pointer;
      "></div>`,
      className: '',
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });
// jitter to prevent exact overlapping pins from same region
    const jitter = () => (Math.random() - 0.5) * 0.8;
    const marker = L.marker([coffee._geo!.lat + jitter(), coffee._geo!.lng + jitter()], { icon })
      .addTo(map)
      .on('click', async function (this:any) {
        // Fetch live weather from Open-Meteo when pin is clicked 
        let w: CurrentWeather | null = null;
        try {
          const url =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${coffee._geo!.lat}&longitude=${coffee._geo!.lng}` +
            `&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m` +
            `&temperature_unit=celsius&timezone=auto`;
          const res  = await fetch(url);
          const data = await res.json();
          w = data.current as CurrentWeather;
        } catch (e) { w = null; }

        this.bindPopup(`
          <div style="min-width:180px; font-family: inherit;">
            <div style="font-weight:600; font-size:0.95rem;">${coffee.country}</div>
            ${coffee.region   ? `<div style="font-size:0.78rem;color:#555;margin-bottom:6px;">${coffee.region}</div>` : ''}
            ${coffee.producer ? `<div style="font-size:0.8rem;"><span style="color:#555;font-size:0.72rem;text-transform:uppercase;">Producer</span> ${coffee.producer}</div>` : ''}
            ${coffee.farm     ? `<div style="font-size:0.8rem;"><span style="color:#555;font-size:0.72rem;text-transform:uppercase;">Farm</span> ${coffee.farm}</div>` : ''}
            ${coffee.variety  ? `<div style="font-size:0.8rem;"><span style="color:#555;font-size:0.72rem;text-transform:uppercase;">Variety</span> ${coffee.variety}</div>` : ''}
            ${coffee.process  ? `<div style="font-size:0.8rem;"><span style="color:#555;font-size:0.72rem;text-transform:uppercase;">Process</span> ${coffee.process}</div>` : ''}
            <div style="font-size:0.8rem;"><span style="color:#555;font-size:0.72rem;text-transform:uppercase;">Roaster</span> ${coffee.roaster}</div>
            ${coffee.rating != null ? `<div style="font-size:1.2rem;font-weight:700;color:${ratingColor(coffee.rating)};margin-top:6px;">${coffee.rating} / 10</div>` : ''}
            ${w ? `
              <div style="margin-top:8px;padding-top:8px;border-top:1px solid #e5e7eb;">
                <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.05em;color:#555;margin-bottom:4px;">Current Weather</div>
                <span style="font-size:1.2rem;font-weight:700;">${w.temperature_2m}°C</span>
                <span style="font-size:0.8rem;color:#555;margin-left:4px;">${weatherDescriptions[w.weathercode] ?? ''}</span>
                <div style="font-size:0.8rem;color:#555;">${w.relative_humidity_2m}% humidity · ${w.windspeed_10m} km/h</div>
              </div>` : ''}
          </div>
        `).openPopup();
      });

    coffeeMarkers.push(marker);
  }

  //  LOCATION SEARCH
  async function handleSearch(): Promise<void> {
    if (!searchQuery.trim()) return;
    isSearching = true;
    searchError = '';
    const result = await geocodeQuery(searchQuery);
    isSearching = false;
    if (!result) { searchError = 'Location not found.'; return; }
    if (searchMarker) searchMarker.remove();

    const icon = L.divIcon({
      html: `<div style="
        width: 18px; height: 18px;
        background: #3b82f6;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(59,130,246,0.6);
      "></div>`,
      className: '',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });

    searchMarker = L.marker([result.lat, result.lng], { icon })
      .addTo(map)
      .bindPopup(`<b>${result.name}</b><br>${result.country}`)
      .openPopup();

    map.flyTo([result.lat, result.lng], 6, { duration: 1.2 });
  }

  function handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') handleSearch();
  }

  onMount(async () => {
    L = await import('leaflet');
    await import('leaflet/dist/leaflet.css');

    // ── Initial map center [lat, lng] and zoom level ──
    map = L.map('map').setView([5, -20], 4);

    // ── Swap tile URL for different map styles ──
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    await geocodeCoffees();
  });
</script>

<svelte:head>
  <title>Coffee Map — RJC</title>
</svelte:head>

<div class="page">

  <!-- ────────────────────────────────────────────
       CONTROLS BAR full width strip
────────────────────────────────────────────═ -->
  <div class="controls">
    <div class="search-row">
    <input type="text" bind:value={searchQuery} aria-label="Search for a place on the map"
        on:keydown={handleKeydown}
        placeholder="Search a place…"
        class="search-input"
        disabled={isSearching}
      />
      <button on:click={handleSearch} class="search-btn" disabled={isSearching} aria-label="Search for a location">
        {isSearching ? '…' : 'Go'}
      </button>
    </div>

    {#if searchError}
      <p class="search-error">{searchError}</p>
    {/if}

    <div class="legend">
      <span class="legend-dot" style="background:#22c55e"></span><span>9–10</span>
      <span class="legend-dot" style="background:#f59e0b"></span><span>7–8</span>
      <span class="legend-dot" style="background:#f97316"></span><span>5–6</span>
      <span class="legend-dot" style="background:#ef4444"></span><span>0–4</span>
      <span class="legend-dot" style="background:#000000"></span><span>unrated</span>
      <span class="legend-dot" style="background:#3b82f6"></span><span>your search</span>
    </div>
  </div>

  <!-- ────────────────────────────────────────────
       MAP + SIDEBAR
  ──────────────────────────────────────────── -->
  <div class="map-row">

<!-- SIDEBAR -->
    <aside class="sidebar">

      <p class="label sidebar__label">Project</p>
      <h1 class="sidebar__title">{sidebarTitle}</h1>
      <p class="sidebar__desc">{sidebarDesc}</p>

      <!--  Loading notice dot -->
      <div class="sidebar__notice">
        <span class="notice-dot"></span>
        {sidebarNote}
      </div>

      <!-- ── Stats block auto-calculated at bottom ── -->
      <div class="sidebar__stats">
        <div class="sidebar__stat">
          <span class="sidebar__stat-num">{totalCoffees}</span>
          <span class="sidebar__stat-label">single origin coffees documented</span>
        </div>
        <div class="sidebar__stat">
          <span class="sidebar__stat-num">{totalCountries}</span>
          <span class="sidebar__stat-label">countries</span>
        </div>
        <div class="sidebar__stat">
          <span class="sidebar__stat-num">{topRated}</span>
          <span class="sidebar__stat-label">rated 9 or above</span>
        </div>
      </div>

    </aside>

    <!-- MAP -->
    <div id="map"></div>
  </div>

</div>

<style>
  /* ── Outer wrapper — fills viewport below the fixed nav ── */
  .page {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 5rem);
    overflow: hidden;
  }

  /* ── Controls bar ── */
  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0.65rem 1.25rem;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    z-index: 10;
  }

  .search-row { display: flex; gap: 0.4rem; }

  .search-input {
    width: 200px; /* ── input width ── */
    padding: 0.35rem 0.75rem;
    border: 1px solid var(--border-strong);
    border-radius: 2px;
    background: var(--bg);
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 0.82rem;
    outline: none;
    transition: border-color 0.15s;
  }
  .search-input:focus { border-color: var(--accent); }

  .search-btn {
    padding: 0.35rem 0.9rem;
    background: var(--text-primary); 
    color: var(--bg);
    border: none;
    border-radius: 2px;
    font-family: var(--font-body);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.15s;
  }
  .search-btn:disabled { opacity: 0.45; cursor: not-allowed; }
  .search-btn:hover:not(:disabled) { background: var(--accent); }

  .search-error { font-size: 0.78rem; color: #ef4444; margin: 0; }

  .legend {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 1rem;
    color: var(--text-secondary);
    flex-wrap: wrap;
    /* ── pushes legend to the right of the bar ── */
    margin-left: auto;
  }
  .legend-dot {
    display: inline-block;
    width: 9px; height: 9px;
    border-radius: 50%;
    border: 1.5px solid white;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    margin-left: 0.4rem;
  }

  /* ── Map + sidebar row ── */
  .map-row {
    display: grid;
    /* ── sidebar width ── */
    grid-template-columns: 400px 1fr;
    flex: 1;
    overflow: hidden;
  }

  /* ── Map ── */
  #map {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  /* ── Sidebar ── */
  .sidebar {
    border-right: 1px solid var(--border);
    background: var(--bg);
    padding: 2rem 1.5rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  .sidebar__label { margin-bottom: 0.1rem; }

  .sidebar__title {
    margin-top: 1rem;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.2;
  }

  .sidebar__desc {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: var(--text-secondary);
    line-height: 1.25;
  }

  .sidebar__notice {
    margin-top: 2.5rem;
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-size: 1rem;
    color: var(--text-secondary);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 0.65rem 0.85rem;
    border-radius: 2px;
    line-height: 1.6;
  }

  .notice-dot {
    flex-shrink: 0;
    margin-top: 4px;
    width: 9px; height: 9px;
    border-radius: 50%;
    background: var(--accent); /* ── dot color ── */
    animation: pulse 2s ease-in-out infinite; /* ── remove to stop pulsing ── */
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.2; }
  }

  /* ── Stats pushed to bottom of sidebar ── */
  .sidebar__stats {
    margin-top: auto;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .sidebar__stat {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .sidebar__stat-num {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1;
  }

  .sidebar__stat-label {
    font-size: 0.7rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  /* Responsive */
@media (max-width: 640px) {
  .page { height: auto; overflow: auto; }
  .map-row { grid-template-columns: 1fr; display: flex; flex-direction: column; }
  .sidebar { max-height: none; order: 1; }
  #map { height: 50vh; order: 2; }    
  .controls { gap: 0.5rem; }
  .legend { display: none; }
}
</style>