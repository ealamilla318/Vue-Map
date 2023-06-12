import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex";

export type LngLat = [number,number];

export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    distance:computed(()=>store.state.map.distance),
    duration:computed(()=>store.state.map.duration),
    isMapReady:computed(()=>store.getters['map/isMapReady']),
    setMap:(map:mapboxgl.Map)=>store.commit('map/setMap',map),
    setPlaceMarkers:(places:Feature[])=> store.commit('map/setPlaceMarkers',places),
    getRouteBetweenPoints: (start:LngLat,end:LngLat) => store.dispatch('map/getRouteBetweenPoints',{start,end})
  };
};
