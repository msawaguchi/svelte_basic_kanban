<script lang="ts">
    import Modal from './Modal.svelte';

    let showModal = false
    const handleToggleModal = () => {
      showModal = !showModal
    }
</script>

<Modal
  title="Add new Task"
  open={showModal}
  on:close={() => handleToggleModal()}
>
  <slot />
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

