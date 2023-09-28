import {defineStore} from 'pinia'

export const vlueInfo = defineStore({
    id: 'info',
    state: () => ({
        user: [] as any[],
        drivers: [] as any[]
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        construct() {
            user:[
                {
                    name:'',
                    avatar:''
                }
            ]

        }
    }
})