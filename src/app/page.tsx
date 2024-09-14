import BtnCv from "./components/btn-cv/btn-cv";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Welcome from "./components/welcome/welcome";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome />
      <Skills />
      <Projects />
      <BtnCv />
    </div>
  )
}
