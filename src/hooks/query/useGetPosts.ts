import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/app/actions/json-server/getPosts";

export function useGetPosts() {
  return useQuery({
    queryFn: async () => getPosts(),
    queryKey: ["posts"],
  });
}
