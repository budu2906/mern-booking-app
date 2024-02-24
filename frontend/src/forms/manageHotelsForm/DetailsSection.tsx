import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"


const DetailsSection = () => {
    const {register, formState: {errors}} = useFormContext<HotelFormData>()
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
        <label htmlFor="" className="text-grat-700 text-sm font-bold flex-1">
            Name
            <input className="border rounded w-full py-1 px-2 font-normal" type="text" {...register('name', {required: 'this field is required'})} />
            {errors.name&&(
                <span className="text-red-500">{errors.name.message}</span>
            )}
        </label>
        <div className="flex gap-4">
        <label htmlFor="" className="text-grat-700 text-sm font-bold flex-1">
            City
            <input className="border rounded w-full py-1 px-2 font-normal" type="text" {...register('city', {required: 'this field is required'})} />
            {errors.city&&(
                <span className="text-red-500">{errors.city.message}</span>
            )}
        </label>

        <label htmlFor="" className="text-grat-700 text-sm font-bold flex-1">
            Country
            <input className="border rounded w-full py-1 px-2 font-normal" type="text" {...register('country', {required: 'this field is required'})} />
            {errors.country&&(
                <span className="text-red-500">{errors.country.message}</span>
            )}
        </label>
        </div>
        <label htmlFor="" className="text-grat-700 text-sm font-bold flex-1">
            Description
            <textarea rows={10} className="border rounded w-full py-1 px-2 font-normal"  {...register('description', {required: 'this field is required'})} ></textarea>
            {errors.description&&(
                <span className="text-red-500">{errors.description.message}</span>
            )}
        </label>

        <label htmlFor="" className="text-grat-700 text-sm font-bold max-w-[50%]">
            Price Per Night
            <input min={1} className="border rounded w-full py-1 px-2 font-normal" type="number" {...register('pricePerNight', {required: 'this field is required'})} />
            {errors.pricePerNight&&(
                <span className="text-red-500">{errors.pricePerNight.message}</span>
            )}
        </label>

        <label htmlFor="" className="text-grat-700 text-sm font-bold max-w-[50%]">
            Star Rating
           <select className="border rounded w-full p-2 text-gray-700 font-normal" {...register('starRating',{
            required: 'This field is required'
           
           })}>
            
            <option className="text-sm font-bold" value="">
                Select as Rating
            </option>
            {[1,2,3,4,5].map((num)=>{
               return <option value={num}>{num}</option>
            })}
           </select>
            {errors.starRating&&(
                <span className="text-red-500">{errors.starRating.message}</span>
            )}
        </label>
    </div>
  )
}

export default DetailsSection