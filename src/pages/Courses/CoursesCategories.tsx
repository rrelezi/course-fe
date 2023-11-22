import CoursesList from "../../components/Courses/CoursesList";
import { useLocation, useParams } from "react-router-dom";
import { categeories, coursesList } from "../../mocks/Courses/courses.list";

const CoursesCategories = () => {
  const { slug } = useParams();

  const items = coursesList.filter((item) => item.category.slug === slug);
  const category = categeories.find((item) => item.slug === slug);

  return (
    <div>
      <div>
        <span className={'text-black font-semibold text-3xl px-4 mt-8 pb-5'}>Courses: {category?.name}</span>
      </div>

      <CoursesList items={items} />
    </div>
  )
}

export default CoursesCategories;