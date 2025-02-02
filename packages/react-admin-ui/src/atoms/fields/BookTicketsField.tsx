import NumberField, {NumberFieldProps} from "./NumberField";

export function BookTicketsField(props: BookTicketsFieldProps) {
    return <NumberField kind={'bookTickets'} {...props} />;
}

export interface BookTicketsFieldProps extends NumberFieldProps {
}

export default BookTicketsField;
