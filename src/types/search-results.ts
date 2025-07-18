export interface SearchResult {
  id: string;
  thread: {
    title: string;
    forum: {
      name: string;
    };
  };
  author: {
    id: string;
    username: string;
  };
  creation_time: string;
  content: string;
}

export interface SearchResponse {
  results: SearchResult[];
}
