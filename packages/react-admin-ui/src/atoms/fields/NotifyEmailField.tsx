import EmailField, {EmailFieldProps} from "./EmailField";

export function NotifyEmailField(props: NotifyEmailFieldProps) {
    return <EmailField kind={'notifyEmail'} {...props} />
}

export interface NotifyEmailFieldProps extends EmailFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default NotifyEmailField;
