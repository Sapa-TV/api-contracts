import { Err, Ok, Result } from "ts-results-es";

export interface ApiConfig {
    baseUrl: string;
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string;
    protected securityData: SecurityDataType | null = null;

    constructor(config: ApiConfig) {
        this.baseUrl = config.baseUrl;
    }

    protected async request<T, E>({ path, method, body, query }: any): Promise<Result<T, E>> {
        const url = new URL(path, this.baseUrl);
        if (query) url.search = new URLSearchParams(query).toString();

        try {
            const response = await fetch(url.toString(), {
                method,
                headers: { "Content-Type": "application/json" },
                body: body ? JSON.stringify(body) : undefined,
            });

            const data = response.status === 204 ? null : await response.json();

            return response.ok ? new Ok(data) : new Err(data);
        } catch (e: any) {
            return new Err({ message: e.message } as any);
        }
    }
}