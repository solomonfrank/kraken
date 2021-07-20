import React from "react";
import { RiAwardFill } from "react-icons/ri";
import { SiBing } from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

import classes from "./index.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_left}>
        <span className={classes.header_left_icon}>
          <RiAwardFill size={20} color="#fff" />
        </span>
        <div className={classes.header_left_title}>
          <span className={classes.header_left_title_logo}>
            <SiBing size={10} color="#fff" />
          </span>
          <span className={classes.header_left_title_text}>Suggestions</span>
        </div>
        <div className={classes.header_left_sortContainer}>
          <div className={classes.header_left_sortContainer_sort}>Sort by:</div>
          <div className={classes.header_left_sortContainer_sortList}>
            <span>Most upvotes</span>

            <span className={classes.header_left_sortContainer_sortList_dw}>
              <FiChevronDown size="15" />
            </span>
          </div>
        </div>
      </div>
      <div className={classes.header_right}>
        <span className={classes.header_right_icon}>+</span>{" "}
        <span className={classes.header_right_text}>Add Feedback</span>
      </div>
    </header>
  );
};

export default Header;
