import { Link } from "react-router-dom";
import { trimTo500Chars } from "@/helpers/TruncateText";
import type { SearchResult } from "@/types/search-results";
import { parseISO, format } from "date-fns";
import type { TFunction } from "i18next";

// TODO: Implement actual functions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const highlightText = (text: string, _search: string) => text;
const sanitize = (html: string) => ({ __html: html });

interface SearchResultItemProps {
  result: SearchResult;
  queryString: URLSearchParams | "";
  searchTerm: string;
  t: TFunction<"translation", undefined>;
}

export default function SearchResultItem({ result, queryString, searchTerm, t }: SearchResultItemProps) {
  return (
    <div
      key={result.id}
      className="mb-2 mt-5 flex w-full flex-col items-start justify-center gap-1 rounded bg-neutral-800 p-4"
    >
      <div className="flex w-full items-center justify-between">
        <Link
          to={`/thread/posts/${result.id}${queryString ? `?${queryString}` : ""}`}
          className="shrink grow cursor-pointer self-stretch font-sans text-lg font-medium text-blue-400 no-underline hover:underline"
        >
          {result.thread.title}
        </Link>
      </div>
      <section className="inline-flex items-center justify-start gap-1">
        <p className="font-sans text-xs font-semibold uppercase text-neutral-400">
          {t("search.username")}:
        </p>
        <Link
          to={`/${result.author.id}/${result.thread.forum.name}/info${
            queryString ? `?${queryString}` : ""
          }`}
          className="cursor-pointer font-sans text-xs font-normal text-white no-underline hover:text-blue-400 hover:underline"
        >
          <span
            dangerouslySetInnerHTML={sanitize(
              highlightText(result.author.username, searchTerm)
            )}
          />
        </Link>
      </section>
      <section className="inline-flex items-center justify-start gap-1">
        <p className="font-sans text-xs font-semibold uppercase text-neutral-400">
          {t("search.forum")}:
        </p>
        <span
          className="text-white"
          dangerouslySetInnerHTML={sanitize(
            highlightText(result.thread.forum.name, searchTerm)
          )}
        />
      </section>
      <p className="font-sans text-sm font-normal text-neutral-400">
        {format(parseISO(result.creation_time), "dd MMMM yyyy")}
      </p>
      <h5
        className="text-wrap self-stretch text-left text-sm font-normal text-white"
        dangerouslySetInnerHTML={sanitize(
          highlightText(trimTo500Chars(result.content), searchTerm)
        )}
      />
    </div>
  );
}
