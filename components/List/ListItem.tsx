import { motion } from "framer-motion";
import { useMemo } from "react";
import { styled } from "../../stitches.config";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";

interface ListItemProps {
  title: string;
  date: string;
  color: string;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("Do"),
    [props.date]
  );

  return (
    <ListItemWrapper
      initial={{ scaleY: 0, height: 0 }}
      animate={{ scaleY: 1, height: 60 }}
      exit={{ scaleY: 0, height: 0 }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }}
    >
      <Dot
        css={{
          backgroundColor: props.color,
          marginRight: "12px",
        }}
      />
      <Title>{props.title}</Title>
      <DatePublished>{dateNumber}</DatePublished>
      <Expand />
    </ListItemWrapper>
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

const DatePublished = styled("h4", {
  opacity: "0.3",
  transition: "opacity 0.25s",
  marginLeft: "auto",
});

const Expand = styled(ArrowTopRightIcon, {
  opacity: "0",
  width: "0",
  height: "100%",
  backgroundPosition: "center bottom",
  transition: "all 0.25s",
});

export const ListItemWrapper = styled(motion.a, {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  borderTop: "1px solid $gray5",
  boxShadow: "inset 0 -1px 0 0 $gray5",
  marginTop: "-1px",
  width: "100%",
  height: "60px",
  lineHeight: "60px",
  transition: "opacity 0.25s",
  transformOrigin: "top",
  cursor: "pointer",

  "&:hover": {
    opacity: "1 !important",
  },
  [`&:hover ${Expand}`]: {
    width: "22px",
    opacity: "1",
    marginLeft: "2px",
  },
  [`&:hover ${DatePublished}`]: {
    opacity: "1",
  },
});