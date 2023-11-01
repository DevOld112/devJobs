import { generateClasses } from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'mb-3 flex items-center justify-center gap-5 my-10',
                message: 'bg-red-500 text-white text-center font-bold uppercase p-2 my-5',
                label: 'block mb-1 font-bold text-xl text-white',
                input: 'w-64 p-2  border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 font-bold',
                textarea: 'w-full h-40'
            },
            submit: {
                input: '$reset bg-teal-500 hover:bg-blue-600 rounded-lg p-2 text-white font-bold mt-10 w-64 text-2xl'
            }
        })

    }
}

export default config