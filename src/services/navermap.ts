interface NaverMapConfig {
  clientId: string;
}

class NaverMapLatLng {
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

class NaverMapMap {
  container: string;
  options: any;

  constructor(container: string, options: any) {
    this.container = container;
    this.options = options;
  }
}

interface NaverMapService {
  LatLng: NaverMapLatLng;
  Map: NaverMapMap;
}

interface NaverService {
  maps: NaverMapService;
}

declare const global: {
  NaverMapScript?: HTMLScriptElement;
  naver?: NaverService;
};

let loadingPromise: Promise<NaverService> | undefined;

export default class NaverMap {
  config: NaverMapConfig;

  constructor(config: NaverMapConfig) {
    this.config = config;
  }

  load() {
    const { config } = this;
    if (config) {
      this.loadScript(config);
    }
  }

  private async loadScript(config: NaverMapConfig) {
    const { clientId } = config;

    if (!loadingPromise) {
      loadingPromise = new Promise<NaverService>((resolve, reject) => {
        const script = (global.NaverMapScript =
          document.createElement("script"));
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?govClientId=${clientId}}`;
        script.defer = true;
        script.onload = () => {
          if (global.naver) {
            resolve(global.naver);
          } else {
            reject();
          }
        };
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    return loadingPromise;
  }

  drawMap(center: { lat: number; lng: number }, zoom: number) {
    const { naver } = global;
    if (naver) {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(
          center?.lat ?? 37.3595704,
          center?.lng ?? 127.105399
        ),
        zoom: 10,
      });
    }
  }
}
