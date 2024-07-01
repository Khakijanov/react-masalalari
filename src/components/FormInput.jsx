function FormInput({label, type, name, placeholder}) {
  return <label className="form-control w-full ">
  <div className="label">
    <span className="label-text font-bold text-black">{label}</span>
  </div>
  <input type={type} name={name} placeholder={placeholder} className="input input-bordered w-full " />
  
</label>
   
  
}

export default FormInput