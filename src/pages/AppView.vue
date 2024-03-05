<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            project: null
        }
    }, 
    created(){
        this.getCardInfo();
    },
    methods: {
        getCardInfo(){
            axios.get(`${this.store.apiPath}/api/projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data.project;
            });
        }
    }    
};
</script>
<template lang="">
   <div v-if="project" class="text-dark">
        <img :src="`${this.store.apiPath}/storage/${project.image}`" alt="">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <p>{{ project.date }}</p>
        <p>{{ project.languages }}</p>
    </div>
    <div v-else>Loading...</div>
</template>
<style lang=""></style>
