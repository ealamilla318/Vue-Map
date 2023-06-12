<script lang="ts" src="./MapView.ts" />
<template>
    <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere por favor</h3>
            <span>Localizando...</span>
        </div>
    </div>
    <div v-show="isUserLocationReady" class="map-container" ref="mapElement"></div>
</template>


<style scoped>
.loading-map{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vmax;
    height: 100vh;
    z-index: 9999;
    color:white;
    background-color: black;
}
.map-container{
    position: fixed;
    width: 100vmax;
    height: 100vh;
    background-color: wheat;
}
</style>