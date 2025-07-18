import type { SearchResponse } from "@/types/search-results";
import { Button } from "@/components/ui/button";
import type { SearchParams } from "@/types/search";
import { useTranslation } from "react-i18next";
import SearchResultItem from "./SearchResultItem";

export default function SearchResults({
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
        <SearchResultItem
          key={result.id}
          result={result}
          queryString={queryString}
          searchTerm={searchTerm}
          t={t}
        />
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
