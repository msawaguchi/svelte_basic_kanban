<script lang="ts">
	import type {  PageData, ActionData, SubmitFunction } from './$types'
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';		
	import Column from "./components/Column.svelte";
	import Navbar from "./components/Navbar.svelte";

    import { enhance } from '$app/forms'
	 	
	interface Column {
		id: number
		title: string
		items: Task[]
	}

	interface Task {
		id: number
		title: string
		description: string
		tags: string[]
	}

	export let data: PageData
    export let form: ActionData

	let loading = false

	const t: ToastSettings = {
		message: 'Added task successfully!.',
		background: 'variant-filled-primary',
		hideDismiss: true,
		timeout: 1000
	};

    const addTask: SubmitFunction = () => {
        loading = true

        return async ({ update }) => {
            loading = false
            await update()
			form = null
        }
    }

	function handleFinalize(columnIdx: number, newItems: Task[]) {
		data.tasks[columnIdx].items = newItems;
		onFinalUpdate([...data.tasks]);
	}

	function onFinalUpdate(newColumnsData: Column[]) {
		data.tasks = newColumnsData;
	}
</script>

<Navbar>
	<div class="card p-4">
		<form method="POST" action="?/addTask" use:enhance={addTask}>
			<label class="label">
				Title
				<input class="input" name="title" type="text" placeholder="Task title" />
				{#if form?.missing}
					<p class="error"> This field is required</p>
				{/if}  
			</label>
			<label class="label mt-6">
				Description
				<textarea class="textarea" name="desc" rows="4" placeholder="Task description" />
				{#if form?.missing}
					<p class="error"> This field is required</p>
				{/if}  
			</label>
			
			<label class="label mt-6">
				<span>Select priority</span>
				<select class="select" name="priority">
					<option value="Low Priority">Low Priority</option>
					<option value="Medium Priority">Medium Priority</option>
					<option value="High Priority">High Priority</option>
				</select>
			</label>

			<label class="label mt-6">
				<span>Assign to</span>
				<select class="select" name="assign">
					<option value="Front-end">Front-end</option>
					<option value="Back-end">Back-end</option>
					<option value="DevOps">DevOps</option>
				</select>
			</label>

			{#if form?.success && toastStore.trigger(t)}
				<Toast />
			{/if}

			<button type="submit" class="mt-6 btn variant-filled bg-violet-500 hover:bg-violet-600">
				{#if loading}
					<span>⌛</span>
				{/if}  
				{#if !loading}
					<span>ADD TASK</span>
				{/if}  
			</button>      
		</form>
	</div>
</Navbar>

<div class="container w-full flex m-5 divide-x divide-slate-700">
	{#each data.tasks as {id, title, items}, idx (id)}
		<div class="column"  >    
			<Column title={title} items={items} onDrop={(newItems) => handleFinalize(idx, newItems)} />
		</div>
	{/each} 
</div>

<style>
	.error { 
		color: tomato;
  	} 
</style>
