import React from "react";
import classes from "./index.module.scss";

const MentorCard = ({ title, subtitle }) => (
  <div className={classes.card}>
    <div className={classes.card__title}>{title}</div>
    <div className={classes.card__subtitle}>{subtitle}</div>
  </div>
);

export default MentorCard;
