import type { Post } from "../models/post.model";

export function setPost(data: Post, postNumber: number, postType: string) {
  console.log(data, postNumber, postType);

  const title: any = document.querySelector(
    `.${postType}-${postNumber}--title`
  );
  const topic: any = document.querySelector(
    `.${postType}-${postNumber}--topic`
  );
  const creationTime: any = document.querySelector(
    `.${postType}-${postNumber}--creationTime`
  );
  const image: any = document.querySelector(
    `.${postType}-${postNumber}--image`
  );
  if (title) {
    title.textContent = data.title;
    title.setAttribute('title', data.title)
    title.setAttribute('href', `/${data.slug}`)
  }
  if (topic) {
    topic.textContent = data.topic;
  }
  if (creationTime) {
    creationTime.textContent = data.creationTime?.substring(0, 10);
  }
  if (image) {
    image.setAttribute("src", data.image?.url);
    image.alt = data.image?.alt;
  }
}