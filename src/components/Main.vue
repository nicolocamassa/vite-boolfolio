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
    <main class="p-5">

        <div class="container">
            <div class="row">
                    <Card v-for="project, index in this.store.projects" :project="project" :key="index" />
            </div>
        </div>

    </main>
</template>
<style lang="">
    
</style>