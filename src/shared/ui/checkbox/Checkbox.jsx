const Checkbox = ({ onChange, checked, ...props }) => {
    return (
        <label htmlFor={props.id} className='checkbox-wrapper'>
            <input
                id={props.id}
                type='checkbox'
                className='checkbox'
                onChange={onChange}
                checked={checked}
                {...props}
            />
        </label>
    );
};

export default Checkbox;
