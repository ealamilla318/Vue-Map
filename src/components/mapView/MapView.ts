import { useMapStore, usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "MapView",
  setup() {
    const { isLoading, userLocation, isUserLocationReady } = usePlacesStore();
    const {setMap} = useMapStore();
    const mapElement = ref<HTMLElement>();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation.value) return;
      await Promise.resolve();
      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      const myLocationPopUp = new Mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`
        <h4> MI localizacion actual</h4>
      `);

      const myLocationMarker = new Mapboxgl.Marker()
        .setPopup(myLocationPopUp)
        .setLngLat(userLocation.value)
        .addTo(map);

      setMap(map);
    };

    onMounted(() => {
      if (isUserLocationReady) return initMap();
    });

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap();
    });
    return {
      isLoading,
      userLocation,
      isUserLocationReady,
      mapElement,
    };
  },
});
