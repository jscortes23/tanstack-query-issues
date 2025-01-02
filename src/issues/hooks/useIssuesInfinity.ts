import { useInfiniteQuery } from "@tanstack/react-query"
import { getIssues } from "../services/getIssues.service"
import { State } from "../interfaces/issue.interface"

interface useIssuesProps {
  state: State
  selectedLabels: string[]
}

export const useIssuesInfinity = ({ state, selectedLabels }: useIssuesProps) => {

  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinity', { state, selectedLabels }],
    queryFn: ({ pageParam, queryKey }) => {

      const [, , args] = queryKey;
      const { selectedLabels, state } = args as useIssuesProps

      return getIssues(state, selectedLabels, pageParam)
    },
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, page) => lastPage.length > 0 ? lastPage.length + 1 : undefined,
  })

  return {
    issuesQuery,
  }
}
