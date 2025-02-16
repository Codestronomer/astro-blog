import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Byte Scrolls',
    description: 'Exploring the realms of computers, programming and technological wonders',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<languages>en-us</languages>`,
  });
}