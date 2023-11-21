import CoursesList from "../../components/Courses/CoursesList";
import { useLocation, useParams } from "react-router-dom";
import { categeories, coursesList } from "../../mocks/Courses/courses.list";

const CoursesCategories = () => {
  const { slug } = useParams();

  const items = coursesList.filter((item) => item.category.slug === slug);

  return (
    <div>
      <h1>Courses Categories</h1>

      <CoursesList items={items} />
    </div>
  )
}

export default CoursesCategories;