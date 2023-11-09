import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'mb-3 flex items-center flex-col my-5',
        message: 'bg-red-500 text-white text-center font-bold uppercase p-2 my-5',
        label: 'block mb-1 font-bold text-xl text-white my-5',
        input: 'w-64 p-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 font-bold',
        textarea: 'w-64 h-40 p-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 font-bold',
        help: 'text-center font-bold text-gray-200',
        inner: 'text-gray-200'
      },
      submit: {
        input: '$reset bg-teal-500 hover:bg-blue-600 rounded-lg p-2 text-white font-bold mt-10 w-64 text-2xl'
      }
    })
  }
}

export default config
