var root = new Vue({
    el: '#root',
    data: {
        songs: []
    },
    mounted() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
               this.songs = result.data.response;
               console.log(result.data.response);
            });
    },
    methods: {
        
    }
});

