import {mixed, object, string} from "yup";

let userSchema = object({
    emailCheck: string().email("El Email no tiene el formato correcto").required("Reingrese el Email").test('email-match', 'Los Emails deben coincidir', 
        function (value) {
            return this.parent.email === value;
        }),
    email: string().email("El Email no tiene el formato correcto").required("El Email es requerido"),
    phone: string().required("El teléfono es requerido").matches(/^\d+$/, "El teléfono debe contener solo números").min(6, "El teléfono debe tener al menos 6 dígitos").max(15, "El teléfono no puede tener más de 15 dígitos"),
    name: string().required("El nombre es requerido"),
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
