import { useMemo, useState } from "react";
import { Category, PostData } from "@lib/post";
import { ListItem } from "./listItem";
import dayjs from "dayjs";
import { ListSection } from "./listSection";

interface ListProps {
  posts: PostData[];
  categories: Category[];
}

export const List: React.FC<ListProps> = (props) => {
  const groupedPosts = useMemo(() => groupPosts(props.posts), [props.posts]);

  return (
    <div className="group w-full">
      {Object.entries(groupedPosts)
        .reverse()
        .map(([year, posts]) => (
          <ListSection year={year} posts={posts} key={year} />
        ))}
    </div>
  );
};

const groupPosts = (posts: PostData[]) => {
  const newPosts: Record<number, PostData[]> = {};

  posts.forEach((post) => {
    const year = dayjs(post.date).year();
    if (year in newPosts) {
      newPosts[year].push(post);
    } else {
      newPosts[year] = [post];
    }
  });

  return newPosts;
};
