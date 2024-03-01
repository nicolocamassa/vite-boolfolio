<script>
import axios from "axios";
import { store } from "../store";

export default {
    name: 'Main',  
    data(){
        return{
            store
        }
    }, mounted(){
        axios.get(this.store.apiPath).then((response) => {
            console.log(response);
        });
    }              
}
</script>
<template lang="">
    <main>

    </main>
</template>
<style lang="">
    
</style>