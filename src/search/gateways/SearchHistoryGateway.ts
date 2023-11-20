export interface SearchHistoryGateway {
  history: () => Promise<string[]>
  add: (query: string) => Promise<void>
}
