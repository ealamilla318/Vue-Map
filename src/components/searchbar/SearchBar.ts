import { computed, defineComponent, ref } from "vue";
import SearchResults from "@/components/search-results/SearchResults.vue";
import { usePlacesStore } from "@/composables";


export default defineComponent({
    name:"SearchBar",
    components:{
        SearchResults
    },
    setup() {
        const debounceValue =  ref('');
        const debounceTimeOut = ref();
        const {searchPlacesByTerm} = usePlacesStore();

        return{
            debounceValue,
            searchTerm:computed({
                get(){return debounceValue.value},
                set(val:string){
                    if(debounceTimeOut.value) clearTimeout(debounceTimeOut.value)
                    debounceTimeOut.value = setTimeout(()=>{
                        debounceValue.value = val;
                        searchPlacesByTerm(val);
                    },500)
                }
            })
        }
    },
})