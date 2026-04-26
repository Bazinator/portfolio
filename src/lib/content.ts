import { getCollection, type CollectionEntry } from 'astro:content';

function sortByDate<T extends { data: { date: Date } }>(entries: T[]) {
  return [...entries].sort(
    (left, right) => right.data.date.getTime() - left.data.date.getTime()
  );
}

export function entrySlug(entry: { id: string }) {
  return entry.id.replace(/\\/g, '/').replace(/\.(md|mdx)$/i, '').split('/').pop() ?? entry.id;
}

export async function getAllPosts() {
  return sortByDate(await getCollection('blog'));
}

export async function getLatestPosts(limit = 3) {
  return (await getAllPosts()).slice(0, limit);
}

export async function getAllProjects() {
  //return sortByDate(await getCollection('projects'));
  return [...(await getCollection('projects'))].sort(
    (left, right) => left.data.order - right.data.order
  );
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await getAllProjects();
  return projects.filter((project) => project.data.featured).slice(0, limit);
}

export function projectPath(project: CollectionEntry<'projects'>) {
  return `/projects/${entrySlug(project)}/`;
}
