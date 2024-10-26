"use client";
import Link from "next/link";
import CoursesPage from "./components/Courses";
import LoadingPage from "./loading";
import { useState, useEffect } from "react";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      console.log(data);

      setCourses(data);
      setIsLoading(false);
    };

    fetchdata();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <CourseSearch getSearchResult={(results) => setCourses(results)} />
      <CoursesPage courses={courses} />
    </div>
  );
};

export default HomePage;
