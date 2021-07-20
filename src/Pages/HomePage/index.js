import React from "react";

import classes from "./index.module.scss";
import MentorCard from "../../components/MentorCard";
import TagCard from "../../components/TagCard";
import RoadMap from "../../components/RoadMap";
import Header from "../../components/Header";
import SolutionCard from "../../components/SolutionCard";
import SOLUTIONS from "../../constants/solution";

const HomePage = () => {
  return (
    <main className={classes.container}>
      <aside className={classes.container__leftAside}>
        <MentorCard title="Frontend Master" subtitle="Feedback Board" />
        <section className={classes.container__leftAside_tagContainer}>
          <TagCard />
        </section>
        <section className={classes.container__leftAside_roadMap}>
          <RoadMap />
        </section>
      </aside>
      <aside className={classes.container__rightAside}>
        <Header />
        <section className={classes.itemListContainer}>
          {SOLUTIONS.map((solution) => (
            <SolutionCard solution={solution} />
          ))}
        </section>
      </aside>
    </main>
  );
};

export default HomePage;
