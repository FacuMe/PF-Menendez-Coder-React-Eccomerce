import {mixed, object, string} from "yup";

let userSchema = object({
    name: string().required("El nombre es requerido"),
    phone: string().required("el teléfono es requerido"),
    email: string().email("El e-mail no tiene el formato correcto").required("El e-mail es requerido"),
})

const validateForm = async(formData) => {
    try {
        await userSchema.validate(formData)
        return {status: "success"}
    } catch (error) {
        return {status: "error", message: error.message}
    }
}

export default validateForm