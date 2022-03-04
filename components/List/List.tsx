import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Category, PostData } from "../../lib/Post";
import { styled } from "../../stitches.config";
import { ListItem, ListItemWrapper } from "./ListItem";

interface ListProps {
  posts: PostData[];
  categories: Category[];
}

export const List: React.FC<ListProps> = (props) => {
  const [selected, setSelected] = useState(0);
  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    let newPosts: PostData[];
    if (selected === 0) {
      newPosts = props.posts;
    } else {
      const selectedCategory = props.categories[selected];
      newPosts = props.posts.filter((post) => {
        return post.category === selectedCategory.name;
      });
    }
    setPosts(newPosts);
  }, [selected]);

  return (
    <>
      <CategoryWrapper>
        {props.categories.map((category, idx) => (
          <CategoryItem
            key={idx}
            className={idx === selected ? "selected" : ""}
            onClick={() => setSelected(idx)}
            tabIndex={0}
          >
            <Dot
              className={idx === selected ? "selected" : ""}
              css={{
                backgroundColor: category.color,
                boxShadow: `0 0 5px 0px ${category.color}`,
              }}
            />
            <Title
              css={{
                marginLeft: "12px",
                marginRight: "24px",
              }}
            >
              {category.name}
            </Title>
          </CategoryItem>
        ))}
      </CategoryWrapper>
      <ListWrapper>
        <AnimatePresence initial={false}>
          {posts.map((post) => {
            const category = props.categories.find(
              (category) => category.name === post.category
            );

            return (
              <ListItem
                key={`${post.title}-${post.date}`}
                color={category.color}
                title={post.title}
                date={post.date}
                slug={post.slug}
              />
            );
          })}
        </AnimatePresence>
      </ListWrapper>
    </>
  );
};

const Dot = styled("div", {
  backgroundColor: "black",
  borderRadius: "50%",
  minWidth: "8px",
  minHeight: "8px",
  width: "8px",
  height: "8px",
});

const Title = styled("h4", {
  height: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginRight: "16px",
});

const ListWrapper = styled("div", {
  width: "100%",

  [`&:hover ${ListItemWrapper}, &:focus-within ${ListItemWrapper}`]: {
    opacity: "$faded",
  },
});

const CategoryItem = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "opacity 0.25s",
  flexShrink: "1",
  minWidth: "0",

  "&:hover, &:focus": {
    opacity: "1 !important",
  },
});

const CategoryWrapper = styled("div", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "60px",
  lineHeight: "60px",
  width: "100%",

  "> :not(.selected)": {
    opacity: "$faded",
  },
});
