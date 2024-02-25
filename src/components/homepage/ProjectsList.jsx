import ProjectsListItem from "../ui/ProjectListItem";
import projectList from "../../constants/projectData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ProjectsList() {
  return (
    <section className="home__projects">
      <header>
        <h2>Projects</h2>
      </header>
      <Swiper
        slidesPerView={'auto'}
        navigation
        modules={[Navigation, Keyboard]}
        keyboard={{
          enabled: true,
        }}

      >
        {projectList.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectsListItem projectItem={project}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
