import { redirect } from "react-router-dom"
import { deleteItem } from "../helpers"
import { toast } from "react-toastify"

export async function logoutAction(){
    deleteItem({
        key: "userName"
    })
    toast.success("You have successfully logged out of your account!")
    return redirect("/")
}