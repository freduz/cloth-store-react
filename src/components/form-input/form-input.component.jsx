import './form-input.styles.scss';

const FormInput = ({label,...otherProps}) => {

  const handleChange = (event) => {
    otherProps.onChange(event);
  }
    return(
        <div className='group'>
            <label  className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}>{label}</label>
            <input className='form-input' {...otherProps} onChange={handleChange} />
        </div>
    )

}

export default FormInput;