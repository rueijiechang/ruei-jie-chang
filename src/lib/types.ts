
// ── PoetryDB poem result ──
// Used in: src/routes/+page.svelte
export type Poem = {
  title:  string;
  author: string;
  lines:  string[];
};

// ── A featured project card on the homepage ──
// Used in: src/routes/+page.svelte
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
// Used in: src/routes/+page.svelte
export type FragmentPart = {
  text:      string;
  highlight: boolean;
};

// ── A single coffee tasting entry ──
// Used in: src/routes/projects/coffee-map/+page.svelte
export type Coffee = {
  roaster:   string;
  country:   string;
  region:    string | null;
  farm:      string | null;
  producer:  string | null;
  variety?:  string;
  process?:  string | null;
  rating:    number;
  _geo?:     GeoResult | null; // ← added at runtime after geocoding
};

// ── Open-Meteo geocoding result ──
// Used in: src/routes/projects/coffee-map/+page.svelte
export type GeoResult = {
  lat:     number;
  lng:     number;
  name:    string;
  country: string;
};

// ── Open-Meteo current weather (shown in coffee map popups) ──
// Used in: src/routes/projects/coffee-map/+page.svelte
export type CurrentWeather = {
  temperature_2m:       number;
  weathercode:          number;
  windspeed_10m:        number;
  relative_humidity_2m: number;
};
