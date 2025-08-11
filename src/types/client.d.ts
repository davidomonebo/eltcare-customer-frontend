interface ILink {
  href: string;
  label: string;
}

interface IPageResponse<T> {
  results: T;
  next?: string;
  prev?: string;
  count: number;
}
