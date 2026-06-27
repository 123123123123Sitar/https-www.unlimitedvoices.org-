import type { Metadata } from "next";
import { CourseDetail } from "@/components/courses/CourseDetail";
import { getCourse } from "@/content/courses";

const course = getCourse("python-course")!;

export const metadata: Metadata = {
  title: `${course.title} · ${course.pitch}`,
  description: course.description,
};

export default function PythonCoursePage() {
  return <CourseDetail slug="python-course" />;
}
