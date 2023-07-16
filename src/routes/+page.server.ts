import type { PageServerLoad } from './$types';
import { fail, type Actions } from '@sveltejs/kit'

import { addTask, getTasks } from '$lib/server/database';

export const load: PageServerLoad = async () => {
    const tasks = getTasks()
    return { tasks }
}

async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const actions: Actions = {
    addTodo: async({ request }) => {

        const formData = await request.formData()
        const title = String(formData.get('title'))
        const description = String(formData.get('desc'))
        const tags = []
        tags.push(String(formData.get('priority')))
        tags.push(String(formData.get('assign')))

        const newTask = {
            title, description, tags
        }
    
        if (!title) {
            return  fail(400, { title, missing: true })
        }

        if (!description) {
            return  fail(400, { description, missing: true })
        }
        
        await sleep(1000)
        addTask(newTask)

        return { success: true }
    }
}