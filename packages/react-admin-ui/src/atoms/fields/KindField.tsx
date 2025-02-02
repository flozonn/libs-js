import TextField, {TextFieldProps} from "./TextField";

export function KindField(props: KindFieldProps) {
    return <TextField kind={'kind'} {...props} />
}

export interface KindFieldProps extends TextFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default KindField;
