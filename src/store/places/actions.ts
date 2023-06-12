import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import { searchApi } from "@/api";
import { Feature, PlacesResponse } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
  getInitialLocation({ commit }) {
    console.log("Entrando a la accion para setear la locacion")
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        commit("setLngLat", {lng:coords.longitude,lat:coords.latitude});
      },
      (err) => {
        console.log(err);
        throw new Error("No geolocation :C");
      }
    );
  },
  async searchPlacesByTerm({commit,state},query:string):Promise<Feature[]>{
    if(query.length === 0 ){
      commit('setPlaces',[])
      return [];
    }
    if(!state.userLocation){
      throw new Error('No existe ubicacion de usuario')
    }
    commit('setIsLoadingPlaces');
    
    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`,{
      params:{
        proximity: state.userLocation?.join(',')
      }
    });
    commit('setPlaces',resp.data.features)
    return resp.data.features;
  }
};


export default actions;
