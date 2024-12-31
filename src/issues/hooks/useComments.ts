import { useQuery } from "@tanstack/react-query"
import { getComments } from "../services/getComments.service"

export const useComments = (issueNumber: number) => {
  const commentsQuery = useQuery({
    queryKey: ['comments', issueNumber],
    queryFn: () => getComments(issueNumber),
    staleTime: 1000 * 60,
  })

  return { commentsQuery }
}
