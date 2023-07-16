<script lang="ts">
    import { enhance } from '$app/forms'
    import type { ActionData, SubmitFunction } from './$types'
    
    import Modal from './Modal.svelte';

    export let form: ActionData

    let showModal = false
    const handleToggleModal = () => {
      showModal = !showModal
    }
    
    let loading = false
    const addTask: SubmitFunction = () => {
        loading = true

        return async ({ update }) => {
            loading = false
            await update()
        }
    }
</script>

<Modal
  title="Add new Task"
  open={showModal}
  on:close={() => handleToggleModal()}
>
  <svelte:fragment>
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
  </svelte:fragment>
</Modal>

<nav class="flex items-center justify-between flex-wrap bg-gray-800 p-3">
    <div class="block lg:hidden">
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
               <!--I wish I have-->
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
               <!--Some cool stuff to put here-->
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
               <!--But I don't.-->
            </a>
            <button on:click={() => handleToggleModal()} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-white mt-4 lg:mt-0">+ Add new Task</button>
         </div>
    </div>
  </nav>

<style>
  .error { 
    color: tomato;
}
</style>