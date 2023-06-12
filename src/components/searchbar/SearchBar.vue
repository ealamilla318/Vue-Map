
import SearchResults from '../search-results/SearchResults';

<script lang="ts" src="./SearchBar.ts"/>
<template>
    <div class="searchbar-container">
        <input v-model="searchTerm" type="text" class="form-control" placeholder="Buscar Lugares...">
        <SearchResults/>
    </div>
</template>

<style scoped>
.searchbar-container {
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    z-index: 999;
    box-shadow: 0px 5px 10px rgba(0, 0 0, 0, 0.2);
    width: 250px;
    border-radius: 10px !important;
    overflow: hidden;
    padding: 5px;

}

li {
    position: inherit;
    cursor: pointer;
}
</style>