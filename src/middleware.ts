export function onRequest(context: any, next: any) {
  // intercept data from a request
  // optionally, modify the properties in `locals`
  // return a Response or the result of calling `next()`
  const isXML = context.url.pathname === "/sitemap-news.xml";
  return isXML ? next("/api/sitemap") : next(context.locals.url);
}
