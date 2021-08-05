import EditCurrentUserForm, { EditCurrentUserFormProps } from '../../forms/crud/EditCurrentUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';
import { ComponentType, useCallback } from 'react';
import { WithId, WithMutationName, WithQueryName } from '../../../withs';

export function EditCurrentUserAction({
    component: Component = EditCurrentUserForm,
    spinnerComponent,
    queryName = 'GET_USER',
    mutationName = 'UPDATE_USER',
    id,
    onSuccess,
    prepare,
    ...props
}: EditCurrentUserActionProps) {
    prepare = useCallback(
        (data: any) =>
            prepare
                ? prepare(data)
                : ((data: any) => ({
                      id,
                      data: {
                          firstName: data.firstName,
                          lastName: data.lastName,
                          email: data.email,
                      },
                  }))(data),
        [prepare, id],
    );

    const SpinnerComponent = spinnerComponent || Spinner;

    const { data, props: someProps } = useUpdateAction({
        id,
        queryName,
        mutationName,
        onSuccess,
        prepare,
    });

    if (!data) {
        return <SpinnerComponent />;
    }

    return (
        <>
            <Component {...someProps} defaultValues={data.getUser} {...props} />
        </>
    );
}

export interface EditCurrentUserActionProps
    extends EditCurrentUserFormProps,
        FormActionProps,
        Required<WithId>,
        WithQueryName,
        WithMutationName {
    spinnerComponent?: ComponentType<any>;
}

export default EditCurrentUserAction;
