<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.name" 
                :task="task"
                @taskDeleted="$emit('taskDeleted', i)"
                @taskStateChanged="$emit('taskStateChanged', i)"></Task>
        </template>
        <p v-else class="no-task">Sua vida está em dia!</p>
    </div>
</template>

<script>
// importar o que preciso
import Task from '@/components/Task.vue'

export default {
    components: { Task }, // registrar os componentes
    props: {
        tasks: {type: Array, required: true}
    }
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
