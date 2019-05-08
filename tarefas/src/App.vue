<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask" />
		<TaskGrid 
			@taskDeleted="deleteTask" 
			@taskStateChanged="toggleTaskState" 
			:tasks="tasks"/>
	</div>
</template>

<script>
// @ indica que está partindo da pasta src
import TasksProgress from '@/components/TasksProgress.vue'
import NewTask from '@/components/NewTask.vue'
import TaskGrid from '@/components/TaskGrid.vue'

export default {
	components: { TasksProgress, TaskGrid, NewTask },
	data() {
		return {
			tasks: [
				{name: 'Lavar louça', pending: false},
				{name: 'Comprar blusa', pending: true},
			]
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			// se der uma divisão por 0 a função irá retornar 0
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true, // para monitorar os elementos dentro do array
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
