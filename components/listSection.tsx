import { PostData } from "@lib/post";
import { ListItem } from "./listItem";

interface ListSectionProps {
  year: string;
  posts: PostData[];
}

export const ListSection: React.FC<ListSectionProps> = (props) => {
  return (
    <section className="border-t border-mono-5 relative">
      {/* Year label */}
      <time className="text-mono-9 absolute top-3 font-header text-sm pointer-events-none">
        {props.year}
      </time>
      {/* Grouped posts */}
      {props.posts.map((post) => {
        return <ListItem key={`${post.title}-${post.date}`} {...post} />;
      })}
    </section>
  );
};
