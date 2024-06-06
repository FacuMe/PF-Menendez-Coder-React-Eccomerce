const Form = ({formData, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm}>
        <label>Nombre: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChangeInput} />

        <label>Teléfono: </label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChangeInput} />

        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChangeInput} />

        <label>Reingrese Email: </label>
        <input type="email" name="emailCheck" value={formData.emailCheck} onChange={handleChangeInput} />

        <button type="submit">Enviar orden</button>
    </form>
  )
}

export default Form