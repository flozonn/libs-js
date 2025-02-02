import TextField, { TextFieldProps } from './TextField';

export function DateField(props: DateFieldProps) {
    return <TextField kind={'date'} type={'date'} {...props} />;
}

export type DateFieldProps = TextFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DateField;
