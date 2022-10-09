const COMMON_KEYS = {
  all: ["common"] as const,
  lists: () => [...COMMON_KEYS.all, "list"] as const,
  list: (filters: string) => [...COMMON_KEYS.lists(), { filters }] as const,
  details: () => [...COMMON_KEYS.all, "detail"] as const,
  detail: (id: number) => [...COMMON_KEYS.details(), id] as const,
};

export { COMMON_KEYS };
