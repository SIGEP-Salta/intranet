'use client'

import { useEffect, useState, useCallback } from "react";

export type Course = {
  id: number;
  image: string;
  name: string;
  description: string;
  type: string;
};

type Pagination = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
};

export default function useCourses(page = 1, perPage = 8, search = "") {
  const [courses, setCourses] = useState<Course[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async () => {
  try {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({
      page: String(page),
      per_page: String(perPage),
      search
    });

    const res = await fetch(`/api/courses?${params}`);

    if (!res.ok) {
      throw new Error("Error al obtener cursos");
    }

    const response = await res.json();

    setCourses(response.data);
    setPagination(response.meta);

  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}, [page, perPage, search]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    pagination,
    loading,
    error,
    refetch: fetchCourses
  };
}