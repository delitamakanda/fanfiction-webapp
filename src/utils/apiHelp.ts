import axiosClient from '@/lib/axiosClient';

export interface FAQ {
  id: number;
  libelle: string;
  question: string;
  reponse: string;
}

export interface Lexique {
  id: number;
  title: string;
  definition: string;
  created: string;
  updated: string;
}

export const fetchQuestions = async () => {
  try {
    const { data: { results }, status } = await axiosClient.get<{ count: number; next: string; previous: string; results: FAQ[] }>('/help/faq/');
    return { data: results, error: null, status };
  } catch (error) {
    throw new Error(error as string);
  }
}

export const fetchLexique = async (searchParams = '') => {
  try {
    const { data: { results }, status } = await axiosClient.get<{ count: number; next: string; previous: string; results: Lexique[] }>(`/help/lexique/?q=${searchParams}`);
    return { data: results, error: null, status };
  } catch (error) {
    throw new Error(error as string);
  }
}
