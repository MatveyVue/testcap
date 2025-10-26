const app = Vue.createApp({
    data() {
        return {
            currentIndex: 0,
            photos: [
                'https://github.com/MatveyVue/caps/blob/main/RgbGlitch.gif?raw=true',
                'https://github.com/MatveyVue/caps/blob/main/Voltage.gif?raw=true',
                'https://github.com/MatveyVue/caps/blob/main/Jade.gif?raw=true',
                'https://github.com/MatveyVue/caps/blob/main/RedRum.gif?raw=true',
                'https://github.com/MatveyVue/caps/blob/main/Asterix.gif?raw=true',
            ],
        };
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.photos.length;
        },
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
        },
    },
});

app.mount('#app');