import Vue from 'vue';

document.addEventListener('DOMContentLoaded', ()=> {
    new Vue({
        el: '#app',
        data: {
            countries: [],
            selectedCountry: null,
            favouriteCountries: []
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
            },
            addToFavourites() {
                this.favouriteCountries.push(this.selectedCountry.name);
            },
            findCountryByCode(code) {
               return this.countries.filter(country => code === country.alpha3Code)[0]
            }
        }
    });
});