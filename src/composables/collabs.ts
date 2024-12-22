import type { GroupedCollabs } from '@/types/GroupedCollabs'

export const useCollabs = () => {
  const groupedCollabs = ref<GroupedCollabs>({})

  return {
    groupedCollabs,
  }
}
