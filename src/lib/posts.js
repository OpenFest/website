import { cache } from 'react';

import { markdownToHtml, markdownToText } from './markdown';
import { i18n } from '../../i18n-config';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import process from 'process';

async function getTruncatedPostContent(content) {
  const words = content.split(' ');
  const truncatedWords = 9;
  const truncatedContent =
    words.length > truncatedWords
      ? words.slice(0, truncatedWords).join(' ') + '...'
      : content;
  const truncatedContentAsText = await markdownToText(truncatedContent);

  return truncatedContentAsText;
}

export const getSortedPostsData = cache(async (locale) => {
  const postsDirectory = path.join(process.cwd(), `src/posts/${locale}`);
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsDataPromises = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const content = matterResult.content;
    const truncatedContent = await getTruncatedPostContent(content);
    const contentAsHtml = await markdownToHtml(content);

    return {
      id,
      content: contentAsHtml,
      truncatedContent,
      ...matterResult.data,
    };
  });
  const allPostsData = await Promise.all(allPostsDataPromises);

  const sortedPostsData = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedPostsData;
});

export const getAllPosts = cache(async () => {
  const allPosts = {};

  for (const locale of i18n.locales) {
    const { posts } = await getSortedPostsData(locale);
    allPosts[locale] = posts;
  }

  return allPosts;
});
