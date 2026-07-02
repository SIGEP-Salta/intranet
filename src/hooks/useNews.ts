'use client'
import { useEffect, useState } from "react";

export type New = {
  image: string
  title: string
  content: string
  date: string
  post_type: string
}

export default function useNews() {
  const [news, setNews] = useState<New[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/news`
      );

      if (!res.ok) throw new Error("Error al obtener novedades");

      const data = await res.json();
      setNews(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { news, loading, error, refetch: fetchNews };
}