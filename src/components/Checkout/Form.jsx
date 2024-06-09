const Form = ({formData, handleChangeInput, handleSubmitForm}) => {
  return (
    <>
      <h4 className="mb-3">Complete con sus datos para continuar</h4>
      <form className="form-checkout" onSubmit={handleSubmitForm}>

        <div className="box-input">
          <label>Nombre: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChangeInput} />
        </div>

        <div className="box-input">
          <label>Teléfono: </label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChangeInput} />
        </div>

        <div className="box-input">
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChangeInput} />
        </div>

        <div className="box-input">
          <label>Reingrese Email: </label>
          <input type="email" name="emailCheck" value={formData.emailCheck} onChange={handleChangeInput} />
        </div>

        <button type="submit" className="button-submit">
          Enviar Orden
        </button>
      </form>
    </>
  );
};

export default Form

{/* <form onSubmit={handleSubmitForm}>
        <label>Nombre: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChangeInput} />

        <label>Teléfono: </label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChangeInput} />

        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChangeInput} />

        <label>Reingrese Email: </label>
        <input type="email" name="emailCheck" value={formData.emailCheck} onChange={handleChangeInput} />

        <button type="submit">Enviar orden</button>
    </form> */}