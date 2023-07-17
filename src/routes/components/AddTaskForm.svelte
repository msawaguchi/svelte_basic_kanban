<script lang="ts">
        import type { ActionData, SubmitFunction } from './$types'
    import { enhance } from '$app/forms'

    let loading = false
    let form: ActionData

    const addTask: SubmitFunction = () => {
        loading = true

        return async ({ update }) => {
            loading = false
            await update()
        }
    }
</script>

<div>
    <form method="POST" action="?/addTodo" use:enhance={addTask} class="shadow-md rounded mb-6">
        <div>
            <label for="task_title" class="block text-gray-200 text-sm font-bold mb-2">Task Title:</label> 
            <input name="title" type="text" class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" />
            {#if form?.missing}
                <p class="error"> This field is required</p>
            {/if}       
        </div>
        <div class="mt-8">
            <label for="task_desc" class="block text-gray-200 text-sm font-bold mb-2">Description:</label> 
            <textarea name="desc" class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500"  />
            {#if form?.missing}
                <p class="error"> This field is required</p>
            {/if}   
        </div>
        <div class="mt-6">
            <label for="task_priority" class="block text-gray-200 text-sm font-bold mb-2">Priority</label> 
            <select name="priority" class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" >
                <option value="Low Priority" selected>Low Priority</option>
                <option value="Medium Priority" >Medium Priority</option>
                <option value="High Priority" >High Priority</option>
            </select>
        </div>
        <div class="mt-6">
            <label for="assign" class="block text-gray-200 text-sm font-bold mb-2">Assign to</label> 
            <select name="assign" class="bg-gray-800 shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500" >
                <option value="Front-end" selected>Front-end</option>
                <option value="Back-end" >Back-end</option>
                <option value="DevOps" >DevOps</option>
            </select>
        </div>
        {#if form?.success}
            <p class="block font-bold mb-2">Added task!</p>    
        {/if}
        <button 
            type="submit" 
            aria-busy={loading} 
            class:secondary={loading} 
            class="p-3 rounded-3xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mt-6">
            {#if !loading}
                + add task
            {/if}   
        </button>   
    </form>
</div>

<style>
    .error { 
      color: tomato;
    }
</style>