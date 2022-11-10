import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            { label && (
                <FormInputLabel shrin={otherProps.value.lengt} >{label}</FormInputLabel>
            )}
        </Group>
    );
}
export default FormInput;