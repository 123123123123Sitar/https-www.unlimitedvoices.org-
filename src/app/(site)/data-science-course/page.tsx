import type { Metadata } from "next";
import { CourseDetail } from "@/components/courses/CourseDetail";
import { getCourse } from "@/content/courses";

const course = getCourse("data-science-course")!;

export const metadata: Metadata = {
  title: `${course.title} · ${course.pitch}`,
  description: course.description,
};

export default function DataScienceCoursePage() {
  return <CourseDetail slug="data-science-course" />;
}
