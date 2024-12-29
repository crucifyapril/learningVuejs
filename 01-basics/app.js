const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')