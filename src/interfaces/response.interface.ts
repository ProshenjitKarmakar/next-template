export interface WithPagination<T> {
    data: T[];
    current_page: number;
    per_page: number;
    last_page: number;
    total: number;
}

export interface WithPaginationNew<T> {
    data: T[];
    total: number;
    current_page: number;
    per_page: number;
    nextPage: number;
    totalPages: number;
}

interface SuccessResponseIn<T> {
    status: number;
    success: true;
    message?: string;
    data: T;
}

export interface ErrorResponseInterface {
    status: number;
    success: false;
    message: string;
}

export type ResponseInterface<T> = SuccessResponseIn<T> | ErrorResponseInterface;

export default ResponseInterface;
