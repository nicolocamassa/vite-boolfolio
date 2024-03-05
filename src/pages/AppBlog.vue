<script>
import axios from "axios";
import { store } from "../store";
import Card from '../components/Card.vue'


export default {
    name: 'blog',  
    components: {
        Card
    },
    data(){
        return{
            store,
            page: 1,
            totalPages: null
        };
    }, mounted(){
        this.apiRequest();
    }, methods: {
        apiRequest(){
            axios.get(`${this.store.apiPath}/api/projects?page=${this.page}`).then((response) => {
                this.store.projects = response.data.result.data;
                this.totalPages = response.data.result.last_page;
            });
        },

        nextPage(){
            if (this.page < this.totalPages) { 
                this.page++;
                this.apiRequest();
            }
        },

        prevPage(){
            if (this.page != 1) { 
                this.page--;
                this.apiRequest();
            }
        }
    }              
}
</script>
<template lang="">
    <main class="p-5">

        <div class="container mx-auto">
            <div class="row">
                    <Card v-for="project, index in this.store.projects" :project="project" :key="index" />
            </div>
        </div>
        
        <button type="button" class="btn btn-primary me-2" @click="prevPage">Previous</button>
        <button type="button" class="btn btn-primary" @click="nextPage">Next</button>
    </main>
</template>
<style lang="">
    
</style>./Card.vue