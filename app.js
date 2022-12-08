const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'Male',
            picture: 'https://randomuser.me/api/portraits/men/62.jpg'
        }
    }
})

app.mount('#app')