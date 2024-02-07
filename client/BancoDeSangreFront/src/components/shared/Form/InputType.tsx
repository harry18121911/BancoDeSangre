const InputType = (props: {
    id:string,
    labelFor:string,
    labelText:string,
    inputType:string,
    name:string ,
    value:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <div>
            <div className="form-group mb-4">
                <label  htmlFor={props.id}>{props.labelText}</label>
                <input id={props.id} type={props.inputType} className="form-control"  name={props.name} value={props.value} onChange={props.onChange}/>
            </div>
        </div>
    )
}

export default InputType