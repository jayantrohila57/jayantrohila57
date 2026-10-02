import { PrevNext } from "./prev-next";

export function KbDocFooter({
  previous,
  next,
}: {
  previous?: { name: string; url: string };
  next?: { name: string; url: string };
}) {
  return <PrevNext previous={previous} next={next} />;
}
