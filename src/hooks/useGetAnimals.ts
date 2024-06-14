import { useQuery } from "@tanstack/react-query"
import { getAnimals } from "@/app/actions/getAnimals"

export function useGetAnimals() {
  return useQuery({
    queryFn: async () => getAnimals(),
    queryKey: ["animals"],
  })
}