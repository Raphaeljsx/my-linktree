import { type inputProps } from "../types/Inputprops";

export const Input = ({name, onChange, id, type, placeholder}: inputProps) => {
  return(
    <>
     <label htmlFor={id} 
      className="block mb-2 text-sm font-medium text-gray-900">
        Nome
        <input 
      type={type} 
      id={id} 
      value={name}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
      </label>
    </>
  )
}