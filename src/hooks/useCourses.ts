'use client'
import { useEffect, useState } from "react";

export type Course = {
  image: string
  title: string
  description: string
}

export default function useNews() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/courses`
      );

      if (!res.ok) throw new Error("Error al obtener novedades");

      const data = await res.json();
      setCourses(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, loading, error, refetch: fetchCourses };
}