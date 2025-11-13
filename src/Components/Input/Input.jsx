import './Input.css'

function Input(props) {
  return (
    <>
        <div>
            <label className="input-label" htmlFor="">{props.label}</label>
            <input className='input-input' type={props.type}  placeholder={props.placeholder} />
        </div>
    </>
  )
}

export default Input
