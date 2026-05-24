import type { CollectionEntry } from "astro:content";

export function sortPosts(posts: CollectionEntry<"blog">[]) {
  return [...posts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function getReadingTime(body = "") {
  const latinWords = body.trim().match(/[A-Za-z0-9_]+/g)?.length ?? 0;
  const cjkChars = body.trim().match(/[\u4e00-\u9fff]/g)?.length ?? 0;
  const estimatedWords = latinWords + cjkChars / 2;
  return Math.max(1, Math.ceil(estimatedWords / 250));
}
