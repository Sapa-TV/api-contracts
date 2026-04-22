import { ResultAsync, okAsync, errAsync } from "neverthrow";

export interface ApiConfig {
    baseUrl: string;
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string;
    protected securityData: SecurityDataType | null = null;

    constructor(config: ApiConfig) {
        this.baseUrl = config.baseUrl;
    }

    protected async request<T, E>(params: { path: string; method: string; body?: unknown; query?: Record<string, string> }): Promise<ResultAsync<T, E>> {
        const { path, method, body, query } = params;
        const url = new URL(path, this.baseUrl);
        if (query) url.search = new URLSearchParams(query).toString();

        const response = await fetch(url.toString(), {
            method,
            headers: { "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : undefined,
        });

        const data = response.status === 204 ? null : await response.json();

        if (!response.ok) {
            return errAsync(data as E);
        }

        return okAsync(data as T);
    }
}
