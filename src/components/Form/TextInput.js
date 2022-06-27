import ConnectForm from './ConnectForm'

const TextInput = ({ name, label, button }) => (
  <ConnectForm>
    {({ register }) => {
      return (
        <>
          {label && (
            <label for={name} class="mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {label}
            </label>
          )}

          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            {...register(name)}
            type={'text'}
          />
        </>
      )
    }}
  </ConnectForm>
)

export default TextInput
