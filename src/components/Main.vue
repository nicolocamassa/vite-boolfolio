<script>
import axios from "axios";
import { store } from "../store";
import Card from './Card.vue'


export default {
    name: 'Main',  
    components: {
        Card
    },
    data(){
        return{
            store,
        }
    }, mounted(){
        axios.get(`${this.store.apiPath}/api/projects`).then((response) => {
            this.store.projects = response.data.result;
        });
    }              
}
</script>
<template lang="">
    <main>
        <Card v-for="project, index in this.store.projects" :project="project" :key="index" />
    </main>
</template>
<style lang="">
    
</style>