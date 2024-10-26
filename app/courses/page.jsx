import Link from "next/link";

async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses");
  return response.json();
}

async function CoursesPage() {
  const courses = await fetchCourses();

  return (
    <div className="courses">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <h1>{course.title}</h1>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>

          <Link href={course.link} className="btn" target="_blank">
            Go to course
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CoursesPage;
