const app = new Vue({
    el: '#app',
    data: {
        url: '',
        slug: '',
        created: null, // API response
    },
    methods: {
        createUrl() {
            console.log(this.url, this.slug);
        }
    }
})