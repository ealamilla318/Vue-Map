<template>
    <button v-if="isButtonReady" @click="onMyLocationClicked" class="btn btn-primary">
        Ir a mi ubicacion
    </button>
</template>
<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { computed } from '@vue/reactivity';

     export default{
         name:"MyLocationButton",
         setup(){

            const {userLocation,isUserLocationReady} = usePlacesStore();
            const {map,isMapReady} = useMapStore();

            return{
                isButtonReady:computed<boolean>(()=>isUserLocationReady.value && isMapReady.value),
                onMyLocationClicked:()=>{
                    map.value?.flyTo({
                        center:userLocation.value,
                        zoom:14
                    })
                }
            }
         }
     }
</script>

<style scoped>
button{
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>