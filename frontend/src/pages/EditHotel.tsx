import { useMutation, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import * as apiClient from '../api-client'
import { useAppContext } from "../contexts/AppContext"
import ManageHotelForm from "../forms/manageHotelsForm/ManageHotelForm"


const EditHotel = () => {
    const {hotelId} = useParams()
    const {showToast} = useAppContext()
    const {data:hotel} = useQuery('fetchMyHotelById', ()=> apiClient.fetchMyHotelsById(hotelId || ''),{
        enabled: !!hotelId
    })
    const {mutate, isLoading} = useMutation(apiClient.updateMyHotelById, {
        onSuccess: () =>{
            showToast({message: 'Hotel Saved!', type: 'SUCCESS'})
        },
        onError: ()=>{
            showToast({message: 'Error Saving Hotel', type:'ERROR'})
        }
    })
    const handleSave = (hotelFormData : FormData)=>{
        mutate(hotelFormData)
    }
  return <ManageHotelForm isLoading={isLoading} onSave={handleSave} hotel={hotel}/>
}

export default EditHotel