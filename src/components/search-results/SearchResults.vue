<script lang="ts" src="./SearchResults.ts" />
<template>
    <div v-if="isLoadingPlaces" class="aler alert-primary text-center">
    <h5>Cargando</h5>
    <span>Espere por favor</span>
</div>
    <ul v-else-if="places.length > 0" class="list-group mt-3">
        <li @click="onPlaceClicked(place)" :class="{'active' : place.id === activePlace}" v-for="place in places" :key="place.id" class="list-group-item list-group-item-action">
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div align="right">
                <button @click.self="getRouteDirections(place)" :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'" class="btn btn-outline-primary btn-sm">
                    Direcciones
                </button>
            </div>
        </li>
    </ul>
</template>
<style scoped>
li{
    cursor: pointer;
}
h5{
    font-size: 15px !important;
}
p{
    font-size: 10px !important;
}
</style>