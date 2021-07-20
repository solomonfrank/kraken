import React from "react";
import classes from "./index.module.scss";

const tags = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "UI",
  },
  {
    id: 3,
    name: "UX",
  },
  {
    id: 4,
    name: "Entertainment",
  },
  {
    id: 5,
    name: "Bug",
  },
  {
    id: 6,
    name: "Features",
  },
];

const TagCard = ({ data = tags }) => {
  return (
    <section className={classes.tagContainer}>
      {data.length > 0 && data.map((tag) => <TagItem item={tag} />)}
    </section>
  );
};

export const TagItem = ({ item, activeClassName }) => {
  return (
    <div className={`${classes.tagItem} ${classes[activeClassName]}`}>
      {item.name}
    </div>
  );
};

export default TagCard;
