import Table from '@genstackio/react-admin-ui/lib/molecules/Table';
import Alert from '@genstackio/react-admin-ui/lib/atoms/Alert';
import useQueryApi from "@genstackio/react-contexts/lib/hooks/useQueryApi";
import useMutationApi from "@genstackio/react-contexts/lib/hooks/useMutationApi";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import Button from "@genstackio/react-admin-ui/lib/atoms/Button";
import Spinner from "@genstackio/react-admin-ui/lib/atoms/Spinner";
import SwitchField from "@genstackio/react-admin-ui/lib/atoms/fields/SwitchField";
import Tag from "@genstackio/react-admin-ui/lib/atoms/Tag";
import {breadcrumb_item, breadcrumb_item_adhoc} from "@genstackio/react-admin-ui/lib/types";
import {useHistory, useParams} from "react-router-dom";
import useList from "../../hooks/useList";
import {list} from "@genstackio/react-admin-ui/lib/types";
import useListFactory from "@genstackio/react-contexts/lib/hooks/useListFactory";
import {GridPageChangeParams} from '@material-ui/data-grid';
import ScreenHeader from "@genstackio/react-admin-ui/lib/organisms/ScreenHeader";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import useBreadcrumbsFactory from "@genstackio/react-contexts/lib/hooks/useBreadcrumbsFactory";

const rowsPerPageOptions = [10, 20, 50, 100];

function ListScreenTemplate({ search = true, navigationMode = 'page', deleteQueryName = 'DELETE_{singularName}', name, singularName, columns: forcedColumns = undefined, listRoute = '/{name}/page/{pPage}/{pSize}/{pMode}/{pCursors}', listFirstPageRoute = '/{name}', displayRoute = '/{name}/{id}', editRoute = '/{name}/{id}/edit', newRoute = '/{singularName}/new', defaultRowsPerPage = 10, onNewClick }: ListScreenTemplateProps) {
    const { t } = useTranslation();
    const history = useHistory();
    const listFactory = useListFactory();
    const breadcrumbsFactory = useBreadcrumbsFactory();
    const {pPage = 1, pSize = undefined, pMode = undefined, pCursors = undefined} = useParams<{ pPage?: string, pSize?: string, pMode?: string, pCursors?: string}>();
    const splitPCursors: string[]  = pCursors ? pCursors.split(/:/g) : [''];
    const [page, setPage] = useState<{size: number, index: number, previousCursors: string[], currentCursor?: string}>(() => ({size: (pSize ? parseInt(pSize) : undefined) || defaultRowsPerPage, index: parseInt((pPage || '1') as string) - 1, previousCursors: splitPCursors.slice(0, -1), currentCursor: splitPCursors.slice(-1)[0]}))
    const list = useList(name, listFactory, {});

    const [sortModel, setSortModel] = useState<any[]>([]);
    const [searchMode, setSearchMode] = useState<boolean>(pMode ? ('search' === pMode) : search);
    singularName = singularName || name.slice(0, -1);

    const goDoc = useCallback(id => {
        history.push(displayRoute.replace('{name}', name).replace('{id}', id).replace('{singularName}', singularName as string))
    }, [name, history, singularName, displayRoute]);
    const goNew = useCallback(() => {
        history.push(newRoute.replace('{name}', name).replace('{singularName}', singularName as string))
    }, [name, history, singularName, newRoute]);

    onNewClick = onNewClick || (list['globalActions'] || []).includes('add') ? goNew : undefined;

    const goEdit = useCallback(id => {
        history.push(editRoute.replace('{name}', name).replace('{id}', id).replace('{singularName}', singularName as string))
    }, [name, history, singularName, editRoute]);
    const goPublicPage = useCallback(url => {
        ('undefined' !== typeof window) && url && window.open(url);
    }, []);

    const [deleteDoc] = useMutationApi(deleteQueryName.replace('{name}', name).replace('{singularName}', singularName as string).toUpperCase(), {});

    const cursor = page.currentCursor;
    const fetchSortVariables = useMemo(() => sortModel.length ? {sort: `${sortModel[0].field}:${sortModel[0].sort}`} : {}, [sortModel]);
    const {data, loading, error, refetch} = useQueryApi(`${searchMode ? 'SEARCH' : 'FIND'}_${name.toUpperCase()}`, {
        fetchPolicy: 'cache-and-network',
        variables: {
            ...(cursor ? {offset: cursor} : {}),
            limit: page.size,
            ...fetchSortVariables,
        }
    }) as any;
    const handleDelete = useCallback(id => () => {
        deleteDoc({variables: {id}})
        setPage({size: page.size, index: page.index, previousCursors: page.previousCursors, currentCursor: page.currentCursor});
        refetch({variables: {offset: page.currentCursor, limit: page.size, ...fetchSortVariables}})
    }, [fetchSortVariables, deleteDoc, setPage, page.size, page.index, page.previousCursors, page.currentCursor, refetch])

    const columns = useMemo(() => {
        if (forcedColumns) return forcedColumns;
        const xx = ((searchMode ? ((list as any)['opensearchColumns'] || list['columns']) : list['columns']) || []).map((c: any) => {
            const cc = {...c};
            cc['label'] = 'string' === typeof cc['label'] ? t(cc['label'] || '') : cc['label'];
            return cc;
        })
        if (list['actions'] && list['actions'].length) {
            xx.push({id: 'actions', flex: 0, width: (list['actions'] || []).length * (50 + (8 - 1.5*(list['actions'] || []).length)), label: t('column_actions_label'), render: (_: any, doc: any) => {
                    const xxxx = ((searchMode ? ((list as any)['opensearchActions'] || list['actions']) : list['actions']) || []).map((xxx0: any, i: number) => {
                        let color: any = undefined;
                        let variant: any = undefined;
                        let onClick: any = undefined;
                        let label: any = undefined;
                        let icon: any = undefined;
                        let confirm: any = undefined;
                        let confirmKind: any = undefined;
                        let confirmDanger: any = undefined;
                        const xxx = ('string' === typeof xxx0) ? xxx0 : xxx0?.type;
                        const mapper = ('string' === typeof xxx0) ? undefined : xxx0?.map;
                        doc = mapper ? mapper(doc) : doc;
                        switch (xxx) {
                            case 'display':
                                onClick = () => goDoc(doc.id);
                                color = 'primary';
                                variant = 'contained';
                                icon = 'fa-far--eye';
                                break;
                            case 'edit':
                                onClick = () => goEdit(doc.id);
                                color = 'secondary';
                                variant = 'contained';
                                icon = 'fa-fas--pen-to-square';
                                break;
                            case 'download':
                                if (!doc?.row?.publicFile || !doc?.row?.publicFile?.url) return null;
                                onClick = doc?.row!.publicFile!.url;
                                color = 'dark';
                                variant = 'contained';
                                icon = 'fa-fas--download';
                                break;
                            case 'go_public_page':
                                if (!doc?.row?.publicPageUrl && !doc?.row?.publicPageShortUrl) return null;
                                onClick = () => goPublicPage(doc?.row?.publicPageUrl || doc?.row?.publicPageShortUrl);
                                color = 'dark';
                                variant = 'contained';
                                icon = 'fa-fas--up-right-from-square';
                                break;
                            case 'delete':
                                onClick = handleDelete(doc.id);
                                color = 'danger';
                                variant = 'contained';
                                icon = 'fa-fas--trash';
                                confirm = true;
                                confirmKind = `delete_${singularName?.toLowerCase()}`;
                                confirmDanger = true;
                                break;
                        }
                        return (
                            <Button key={i} onClick={onClick} color={color} variant={variant} size={'xs'} icon={icon} confirm={confirm} confirmKind={confirmKind} confirmDanger={confirmDanger}>
                                {label ? t(label) : null}
                            </Button>
                        );
                    });
                    return xxxx.length ? <div className={'flex space-x-1'}>{xxxx}</div> : xxxx;
                }})
        }
        return xx;
    }, [searchMode, list, t, goDoc, goEdit, handleDelete, singularName, forcedColumns, goPublicPage]);

    const key = `${searchMode ? 'search' : 'find'}${name[0].toUpperCase() + name.slice(1)}`;
    const items = ((data || {})[key] || {})['items'] || [];
    const total = searchMode ? ((data || {})[key] || {})['count'] || 0 : undefined;
    const nextCursor = ((data || {})[key] || {})['cursor'];
    const handlePageSizeChange = useCallback((params: GridPageChangeParams) => {
        const u = listRoute.replace('{name}', name).replace('{pPage}', String(1)).replace('{pSize}', String(params.pageSize)).replace('{pMode}', searchMode ? 'search' : 'default' ).replace('{pCursors}', '');
        u && history.push(u);
        setPage({...page, size: params.pageSize, index: 0, previousCursors: [], currentCursor: undefined});
    }, [history, listRoute, name, setPage, page, searchMode]);
    const handlePageChange = useCallback(({page: nextPage}) => {
        if ('page' === navigationMode) {
            let u: string = '';
            if (nextPage === 0) {
                u = listRoute.replace('{name}', name).replace('{pPage}', String(page.index)).replace('{pSize}', String(page.size)).replace('{pMode}', searchMode ? 'search' : 'default' ).replace('{pCursors}', '');
            } else if (nextPage > page.index) {
                u = listRoute.replace('{name}', name).replace('{pPage}', nextPage + 1).replace('{pSize}', String(page.size)).replace('{pMode}', searchMode ? 'search' : 'default' ).replace('{pCursors}', [...(page.previousCursors as unknown as any || []), cursor, nextCursor].join(':'));
            } else if (nextPage < page.index) {
                u = listRoute.replace('{name}', name).replace('{pPage}', nextPage + 1).replace('{pSize}', String(page.size)).replace('{pMode}', searchMode ? 'search' : 'default' ).replace('{pCursors}', [...(page.previousCursors.slice(0, -1) || []), page.previousCursors.slice(-1)[0]].join(':'));
            }
            u && history.push(u);
            return;
        }
        if (nextPage > page.index) {
            setPage({size: page.size, index: nextPage, previousCursors: [...(page.previousCursors as unknown as any || []), cursor], currentCursor: nextCursor});
        } else if (nextPage < page.index) {
            setPage({size: page.size, index: nextPage, previousCursors: page.previousCursors.slice(0, -1), currentCursor: page.previousCursors.slice(-1)[0]});
        }
    }, [searchMode, navigationMode, history, listRoute, name, page.size, cursor, nextCursor, setPage, page.previousCursors, page.index]);
    const displayPage = (!!items.length || !loading) && ((page.index > 0) || !!nextCursor);
    const breadcrumbs = useBreadcrumbs(name, breadcrumbsFactory, {});
    const handleSwitchChange = useCallback((e: any) => {
        e.stopPropagation();
        const u = listRoute.replace('{name}', name).replace('{pPage}', String(1)).replace('{pSize}', String(page.size)).replace('{pMode}', !searchMode ? 'search' : 'default' ).replace('{pCursors}', '');
        u && history.push(u);
        setPage({size: page.size, index: 0, previousCursors: [], currentCursor: undefined});
        setSearchMode(!searchMode);
    }, [history, listRoute, name, setSearchMode, searchMode, setPage, page.size]);
    const switchDefaultValues = useMemo(() => ({searchMode}), [searchMode]);
    useEffect(() => {
        if ("page" === navigationMode) {
            const pp = (parseInt((pPage || '1') as string) - 1);
            if (pp > page.index) {
                setPage({
                    size: page.size,
                    index: pp,
                    previousCursors: [...(page.previousCursors as unknown as any || []), cursor],
                    currentCursor: nextCursor
                });
            } else if (pp < page.index) {
                setPage({
                    size: page.size,
                    index: pp,
                    previousCursors: page.previousCursors.slice(0, -1),
                    currentCursor: page.previousCursors.slice(-1)[0]
                });
            } else { /* equals */
                setPage({size: page.size, index: pp, previousCursors: page.previousCursors, currentCursor: page.currentCursor});
            }
        }
    }, [pPage, setPage, cursor, page.currentCursor, page.size, page.index, page.previousCursors, nextCursor, navigationMode]);
    const handleSortModelChange = useCallback((model) => {
        setSortModel([...model.sortModel]);
    }, [setSortModel]);

    return (
        <>
            {!!breadcrumbs.length && <ScreenHeader items={breadcrumbs as breadcrumb_item_adhoc[]} className={'mt-3 mb-5'} />}
            {(!!onNewClick || displayPage) && (
                <div className={'flex space-x-4 items-center mb-1'}>
                    {!!onNewClick && <Button onClick={(onNewClick ? onNewClick : (list['globalActions'] || []).includes('add') ? goNew : undefined)} icon={'fa-fas--plus'} variant={'contained'}>{t('button_add_label')}</Button>}
                    {(!!items.length || !loading) && ((page.index > 0) || !!nextCursor) && <Tag variant={"contained"} className={'rounded'} text={`Page ${page.index + 1}`}/>}
                    <div className={'flex flex-col justify-center -mt-2'}>
                        <SwitchField name={'searchMode'} defaultValues={switchDefaultValues} label={'opensearch'} onChange={handleSwitchChange}/>
                    </div>
                </div>
            )}
            {!!error && <Alert color={'danger'} className={'mb-2'}>{error.message}</Alert>}
            {!items.length && !loading && <Alert color={'warning'}>{t([`screen_${name}_list_table_empty`, 'screen_generic_list_table_empty'])}</Alert>}
            {!items.length && loading && <Spinner />}
            {!!items.length && <Table onSortModelChange={handleSortModelChange} disableColumnFilter showCellRightBorder showColumnRightBorder rowHeight={40} hideFooterRowCount rowsPerPageOptions={rowsPerPageOptions} onPageSizeChange={handlePageSizeChange} page={page.index} items={items} columns={columns as any} loading={loading} defaultRowsPerPage={page.size} onPageChange={handlePageChange} total={(undefined !== total) ? total : (nextCursor ? 1000 : ((page.index) * (page.size) + items.length))} />}
        </>
    );
}

export interface ListScreenTemplateProps {
    navigationMode?: 'page' | 'state';
    name: string;
    onNewClick?: Function;
    columns?: {id: string; format?: any; label?: string; width?: number; render?: Function;}[];
    list?: list;
    breadcrumbs?: breadcrumb_item[];
    defaultRowsPerPage?: number;
    singularName?: string;
    listRoute?: string;
    listFirstPageRoute?: string;
    displayRoute?: string;
    editRoute?: string;
    newRoute?: string;
    deleteQueryName?: string;
    search?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default ListScreenTemplate
