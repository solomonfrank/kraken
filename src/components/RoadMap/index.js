import React from "react";

import classes from "./index.module.scss";

const roadMapData = [
  {
    id: 1,
    name: "Planned",
    count: "2",
    colorCode: "#efcf2e",
  },
  {
    id: 1,
    name: "InProgress",
    count: "3",
    colorCode: "#bd40c3",
  },
  {
    id: 1,
    name: "Live",
    count: "1",
    colorCode: "#1e7518",
  },
];

const RoadMap = ({ data = roadMapData }) => {
  return (
    <section className={classes.roadMap}>
      <div className={classes.roadMap_header}>
        <div className={classes.roadMap_header_title}>Roadmap</div>
        <div className={classes.roadMap_header_view}>View</div>
      </div>
      <div className={classes.roadMap_contentContainer}>
        {data.length > 0 && data.map((item) => <RoadMapItem item={item} />)}
      </div>
    </section>
  );
};

export const RoadMapItem = ({ item: { name, count, colorCode } }) => (
  <div className={classes.roadMapItem_content}>
    <div className={classes.roadMapItem_content_item}>
      <span
        className={classes.roadMapItem_content_item_color}
        style={{ backgroundColor: `${colorCode}` }}
      ></span>
      <span className={classes.roadMapItem_content_item_name}>{name}</span>
    </div>
    <div className={classes.roadMapItem_content_count}>{count}</div>
  </div>
);

export default RoadMap;
