import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import * as React from "react";

const SearchResultsCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-2 mt-5 flex w-full flex-col items-start justify-center gap-1 rounded bg-neutral-800 p-4",
      className
    )}
    {...props}
  />
));
SearchResultsCard.displayName = "SearchResultsCard";

const SearchResultsCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex w-full items-center justify-between", className)}
    {...props}
  />
));
SearchResultsCardHeader.displayName = "SearchResultsCardHeader";

const SearchResultsCardTitle = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn(
      "shrink grow cursor-pointer self-stretch font-sans text-lg font-medium text-blue-400 no-underline hover:underline",
      className
    )}
    {...props}
  />
));
SearchResultsCardTitle.displayName = "SearchResultsCardTitle";

const SearchResultsCardAuthor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("inline-flex items-center justify-start gap-1", className)}
    {...props}
  />
));
SearchResultsCardAuthor.displayName = "SearchResultsCardAuthor";

const SearchResultsCardForum = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn("inline-flex items-center justify-start gap-1", className)}
    {...props}
  />
));
SearchResultsCardForum.displayName = "SearchResultsCardForum";

const SearchResultsCardDate = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-sans text-sm font-normal text-neutral-400", className)}
    {...props}
  />
));
SearchResultsCardDate.displayName = "SearchResultsCardDate";

const SearchResultsCardContent = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "text-wrap self-stretch text-left text-sm font-normal text-white",
      className
    )}
    {...props}
  />
));
SearchResultsCardContent.displayName = "SearchResultsCardContent";

export {
  SearchResultsCard,
  SearchResultsCardHeader,
  SearchResultsCardTitle,
  SearchResultsCardAuthor,
  SearchResultsCardForum,
  SearchResultsCardDate,
  SearchResultsCardContent,
};
