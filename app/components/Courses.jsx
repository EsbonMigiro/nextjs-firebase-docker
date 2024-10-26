import Link from "next/link";

function CoursesPage({ courses }) {
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
