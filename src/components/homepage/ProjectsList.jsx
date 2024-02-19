import ProjectsListItem from "../ui/ProjectListItem";
import projectList from "../../constants/projectData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation]}
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
