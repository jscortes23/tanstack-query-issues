import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../services/getIssues.service"

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: getIssues,
    staleTime: 1000 * 60 * 60,
  })

  return {
    issuesQuery
  }
}
