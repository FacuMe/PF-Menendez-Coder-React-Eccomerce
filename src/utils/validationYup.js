import {mixed, object, string} from "yup";

let userSchema = object({
    name: string().required("El nombre es requerido"),
    phone: string().required("el teléfono es requerido").matches(/^\d+$/, "El teléfono debe contener solo números").min(6, "El teléfono debe tener al menos 6 dígitos").max(15, "El teléfono no puede tener más de 15 dígitos"),
    email: string().email("El e-mail no tiene el formato correcto").required("El Email es requerido"),
    emailCheck: string().email("El e-mail no tiene el formato correcto").required("Reingrese el Email").test('email-match', 'Los emails deben coincidir', 
        function (value) {
            return this.parent.email === value;
        }),
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
