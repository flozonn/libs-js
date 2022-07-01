import { CreateFormProps } from '../../forms/crud/CreateForm';
import useAction from '@genstackio/react-admin-ui/lib/hooks/useAction';
import FormActionProps from '@genstackio/react-admin-ui/lib/molecules/forms/FormActionProps';
import { WithMutationName } from '@genstackio/react-admin-ui/lib/withs';
import useCreateActionPrepare from "../../hooks/useCreateActionPrepare";
import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function CreateAction({name, singular, new: newInfos = {}, onSuccess, prepare, ...props}: CreateActionProps) {
    const {attributes = [], form = true} = newInfos;
    const Component = useComponent('form', form ? 'crud/create' : `${name}/create${name.slice(0, 1).toUpperCase()}${name.slice(1)}`);
    const mutationName = `CREATE_${singular.toUpperCase()}`;
    prepare = useCreateActionPrepare(prepare, attributes);
    return <Component {...useAction(mutationName, { onSuccess, prepare })} {...props} name={name} new={newInfos} singular={singular} />;
}

export interface CreateActionProps extends CreateFormProps, FormActionProps, WithMutationName {
    name: string;
    singular: string;
    new?: {
        content?: any;
        form?: boolean;
        attributes?: string[];
    };
}

// noinspection JSUnusedGlobalSymbols
export default CreateAction;
