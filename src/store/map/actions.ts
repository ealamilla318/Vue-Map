import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/api';
import { DirectionsResponse } from '@/interfaces/directions';

export type LngLat = [number,number];

const actions: ActionTree<MapState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    },
    async getRouteBetweenPoints({commit},{start,end}:{start:LngLat,end:LngLat}){
        const resp = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);
        console.log(resp.data.routes[0].geometry.coordinates);
        commit('setDistanceDuration',{
            distance: resp.data.routes[0].distance,
            duration: resp.data.routes[0].distance
        })
        commit('setRoutePolyline',resp.data.routes[0].geometry.coordinates)
    }
}



export default actions;