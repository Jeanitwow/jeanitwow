import React from "react";
import {
  AboutSection,
  ArticlesSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
  Link,
} from "theme";
import Price from "../components/Price"
import "./index.css";

export default function IndexPage() {
  return (
    <>
      <Seo title="JeaniT" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading={<Link to="/blog">Статьи и Гайды</Link>} sources={['Blog']}/>
        <AboutSection sectionId="about" heading="Обо мне" />
        <ProjectsSection sectionId="coaching" heading="Процесс обучения индивидуален, всё зависит от уровня игрока. Вот так выглядит план обучения человека с нуля" />
        <Price/>
      </Page>
    </>
  );
}
