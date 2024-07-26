import axios from 'axios'
import {toast} from 'react-toastify'

export const ScrapedData = async(product) =>{
    const toastId = toast.loading("Loading...")
    let result = [];
    try{
        // console.log("reaching")
        const responce = await axios.post("http://localhost:4000/scrape", {product});
        result = responce.data
        toast.success("Product Found")
    }catch(error){
        toast.error("Product not found")
    }
    toast.dismiss(toastId)
    return result;
} 