import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: '#app',
        data: {
            country: null
        },
        methods: {
            fetchData(){
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(data => this.country = data[26].name);
            }
        }
    });
});