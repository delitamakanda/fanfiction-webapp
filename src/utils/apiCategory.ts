import axiosClient from '@/lib/axiosClient'

export interface Category {
  name: string;
  slug: string;
  description: string;
  logic_value: string;
}

export interface Subcategory extends Category {
  category: Category;
}

export const fetchCategories = async () => {
  try {
    const { data, status } = await axiosClient.get<Category[]>('/categories/');
    return { data, error: null, status };
  } catch (error) {
    throw new Error(error as string);
  }
}

export const fetchSubcategories = async () => {
  try {
    const { data, status } = await axiosClient.get<Subcategory[]>('/categories/subcategory/');
    return { data, error: null, status };
  } catch (error) {
    throw new Error(error as string);
  }
}
