<script lang="ts">
	import { flip } from 'svelte/animate';
    import { dndzone } from 'svelte-dnd-action';

	const flipDurationMs = 100;

	export let title: string;
	export let items: ListItem[];
	export let onDrop: (myArgument: ListItem[]) => void;;

    interface ListItem {
		id: number
		title: string
		description: string
		tags: string[]
	}
	
	function handleConsider(e: CustomEvent<DndEvent<ListItem>>) {
		items = e.detail.items;
    }

    function handleFinalize(e: CustomEvent<DndEvent<ListItem>>) {
        onDrop(e.detail.items);
    }
</script>
 
<div class="container flex-col items-center m-3 p-4 w-72 my-0.5 mb-0.5 rounded-md ">
    <h1>{title}</h1>
    <section
        use:dndzone="{{ items: items, flipDurationMs: flipDurationMs, dropTargetStyle:{}}}"
        on:consider="{handleConsider}"
        on:finalize="{handleFinalize}"
    >
        {#each items as item (item.id)}
            <div class="card card-hover my-4 variant-glass-surface" animate:flip="{{ duration: flipDurationMs }}">
                <header class="card-header">
                    <h4>{item.title}</h4>
                </header>
                <section class="p-4 text-gray-400">
                    <p>{item.description}</p>
                </section>
                <footer class="card-footer inline-block">
                    {#each item.tags as tag}
                        {#if tag == "Low Priority"}
                            <span class="chip bg-emerald-600 mr-1">{tag}</span>
                        {:else if tag == "Medium Priority"}
                            <span class="chip bg-amber-500 mr-1">{tag}</span>
                        {:else if tag == "High Priority"}
                            <span class="chip bg-rose-700 mr-1">{tag}</span>
                        {:else}
                            <span class="chip variant-filled-secondary mr-1">{tag}</span>
                        {/if}         
                    {/each}
                </footer>
            </div>
        {/each}
    </section>
 </div>