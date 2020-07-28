import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: '#app',
        data: {
            countries: []
        },

        mounted() {
            this.fetchData();
        },
        
        computed: {
        totalPopulation: function() {
            return this.countries.reduce((total, country) => total + country.population, 0);
          },
        },

        methods: {
            fetchData(){
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(data => this.countries = data);
            }
        }
    });
});