<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="add" type="text">
        <button @click="add">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '' // two way data biding
        }
    },
    methods: {
        add() {
            // vai emitir o evento que uma task foi adicionada e o componente app vai ver
            this.$emit('taskAdded', { name: this.name })
            this.name = ''
        }
    }

}
</script>

<style>

</style>
