<template>
  <MapView />
  <SearchBar/>
  <MyLocationBtn/>
  <TripDetails/>
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapView/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue';// @ is an alias to /src
import SearchBar from '@/components/searchbar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetais.vue';

export default defineComponent({
  components: {
    MapView,
    MyLocationBtn,
    SearchBar,
    TripDetails
  },
  setup() {
    usePlacesStore();
  }
});
</script>
