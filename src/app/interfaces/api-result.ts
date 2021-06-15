import { NamedApiResult } from './named-api-result';

export interface ApiResult {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedApiResult[];
}
