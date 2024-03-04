import { reactive } from "vue";

export const store = reactive({
    apiPath: 'http://127.0.0.1:8000',
    projects: [],
    menu: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'blog',
            label: 'Blog'
        }
        
    ]
});