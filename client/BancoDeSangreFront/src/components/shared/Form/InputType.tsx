const InputType = (props: {
    labelFor:string,
    labelText:string,
    inputType:string,
    name:string ,
    value:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <div>
            <div className="form-group mb-4">
                <label htmlFor={props.labelFor}>{props.labelText}</label>
                <input type={props.inputType} className="form-control"  name={props.name} value={props.value} onChange={props.onChange}/>
            </div>
        </div>
    )
}

export default InputType