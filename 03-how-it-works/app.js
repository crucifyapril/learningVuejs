const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'Vue 3: Это из свойства template',
        }
    },
    methods: {
        changeTitle() {
            this.title = 'Vue 3!'
        }
    },
//     template: `
//      <div class="card center">
//      <h1>{{ title }}</h1>
//      <button class="btn" @click="title = 'Vue 3'">изменить</button>
// </div>
//     `
    render() {
        return h('div', { class: 'card center' },
            [
                h('h1', {}, this.title),
                h('button', {
                    class: 'btn',
                    onclick: this.changeTitle
                    }, 'изменить'
                )
            ])
    }
})

app.mount('#app')