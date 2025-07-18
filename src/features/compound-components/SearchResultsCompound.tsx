import { Link } from "react-router-dom";
import { trimTo500Chars } from "@/helpers/TruncateText";
import type { SearchResponse } from "@/types/search-results";
import { parseISO, format } from "date-fns";
import { Button } from "@/components/ui/button";
import type { SearchParams } from "@/types/search";
import { useTranslation } from "react-i18next";
import {
  SearchResultsCard,
  SearchResultsCardHeader,
  SearchResultsCardTitle,
  SearchResultsCardAuthor,
  SearchResultsCardForum,
  SearchResultsCardDate,
  SearchResultsCardContent,
} from "./SearchResultsCard";

// TODO: Implement actual functions
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const highlightText = (text: string, _search: string) => text;
const sanitize = (html: string) => ({ __html: html });

export default function SearchResultsCompound({
  data,
  onNextPage,
  onPreviousPage,
  searchTerm,
  params,
  nextpage,
  prevpage,
}: {
  data: SearchResponse;
  onPreviousPage: () => void;
  onNextPage: () => void;
  searchTerm: string;
  params: SearchParams;
  nextpage: string | null;
  prevpage: string | null;
}) {
  const { t } = useTranslation();
  const queryString =
    Object.keys(params).length > 0
      ? new URLSearchParams(params as Record<string, string>)
      : "";
  return (
    <>
      {data?.results?.map((result) => (
        <SearchResultsCard key={result.id}>
          <SearchResultsCardHeader>
            <SearchResultsCardTitle
              to={`/thread/posts/${result.id}${queryString ? `?${queryString}` : ""}`}
            >
              {result.thread.title}
            </SearchResultsCardTitle>
          </SearchResultsCardHeader>
          <SearchResultsCardAuthor>
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
          </SearchResultsCardAuthor>
          <SearchResultsCardForum>
            <p className="font-sans text-xs font-semibold uppercase text-neutral-400">
              {t("search.forum")}:
            </p>
            <span
              className="text-white"
              dangerouslySetInnerHTML={sanitize(
                highlightText(result.thread.forum.name, searchTerm)
              )}
            />
          </SearchResultsCardForum>
          <SearchResultsCardDate>
            {format(parseISO(result.creation_time), "dd MMMM yyyy")}
          </SearchResultsCardDate>
          <SearchResultsCardContent
            dangerouslySetInnerHTML={sanitize(
              highlightText(trimTo500Chars(result.content), searchTerm)
            )}
          />
        </SearchResultsCard>
      ))}
      <div className="buttons flex gap-4">
        <Button
          onClick={onPreviousPage}
          disabled={!prevpage}
          className="my-10 rounded-sm bg-neutral-700 p-2 px-5 text-white"
        >
          {t("generic.previous")}
        </Button>
        <Button
          onClick={onNextPage}
          disabled={!nextpage}
          className="my-10 rounded-sm bg-neutral-700 p-2 px-5 text-white"
        >
          {t("generic.next")}
        </Button>
      </div>
    </>
  );
}
