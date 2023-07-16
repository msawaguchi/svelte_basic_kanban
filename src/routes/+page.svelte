<script lang="ts">
	 import type {  PageData } from './$types'
	 
	import Column from "./components/Column.svelte";
	import Navbar from "./components/Navbar.svelte";
	
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

	function handleFinalize(columnIdx: number, newItems: Task[]) {
		data.tasks[columnIdx].items = newItems;
		onFinalUpdate([...data.tasks]);
	}

	function onFinalUpdate(newColumnsData: Column[]) {
		data.tasks = newColumnsData;
	}
</script>

<Navbar />

<div class="container w-full flex m-5 divide-x divide-slate-700">
	{#each data.tasks as {id, title, items}, idx (id)}
		<div class="column"  >    
			<Column title={title} items={items} onDrop={(newItems) => handleFinalize(idx, newItems)} />
		</div>
	{/each} 
</div>