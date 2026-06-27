import type { Metadata } from "next";
import { CourseDetail } from "@/components/courses/CourseDetail";
import { getCourse } from "@/content/courses";

const course = getCourse("java-course")!;

export const metadata: Metadata = {
  title: `${course.title} · ${course.pitch}`,
  description: course.description,
};

export default function JavaCoursePage() {
  return <CourseDetail slug="java-course" />;
}
