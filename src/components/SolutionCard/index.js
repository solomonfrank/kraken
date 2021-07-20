import React from "react";
import { FiChevronUp } from "react-icons/fi";

import { TagItem } from "../TagCard";
import classes from "./index.module.scss";

const SolutionCard = ({ solution }) => {
  return (
    <div className={classes.solution_list}>
      <div className={classes.solution_list_countBadge}>
        <span>
          <FiChevronUp size="13" />
        </span>
        <span>{solution.id}</span>
      </div>
      <div className={classes.solution_list_content}>
        <div className={classes.solution_list_content_title}>
          {solution.title}
        </div>
        <div className={classes.solution_list_content_subtitle}>
          {solution.subtitle}
        </div>
        {solution.tag.length > 0 &&
          solution.tag.map((tag) => (
            <TagItem item={tag} activeClassName="active" />
          ))}
      </div>
      <div className={classes.solution_list_count}>
        <span className={classes.solution_list_count_circle}></span>
        <span className={classes.solution_list_count_value}>
          {solution.count}
        </span>
      </div>
    </div>
  );
};

export default SolutionCard;
