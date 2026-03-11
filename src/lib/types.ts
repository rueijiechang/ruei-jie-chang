
// ── PoetryDB poem result ──
export type Poem = {
  title:  string;
  author: string;
  lines:  string[];
};

// ── A featured project card on the homepage ──
export type FeaturedProject = {
  slug:   string;
  image:  string;
  title:  string;
  tags:   string[];
  desc:   string;
  status: string;
  year?:  string; 
};

// ── One fragment part for the typewriter highlight ──
export type FragmentPart = {
  text:      string;
  highlight: boolean;
};

// ── A single coffee tasting entry ──
export type Coffee = {
  roaster:   string;
  country:   string;
  region:    string | null;
  farm:      string | null;
  producer:  string | null;
  variety?:  string;
  process?:  string | null;
  rating:    number;
  _geo?:     GeoResult | null;
};

// ── Open-Meteo geocoding result ──
export type GeoResult = {
  lat:     number;
  lng:     number;
  name:    string;
  country: string;
};

// ── Open-Meteo current weather (shown in coffee map popups) ──
export type CurrentWeather = {
  temperature_2m:       number;
  weathercode:          number;
  windspeed_10m:        number;
  relative_humidity_2m: number;
};
