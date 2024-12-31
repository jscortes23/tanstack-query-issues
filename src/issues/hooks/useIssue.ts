import { useQuery } from "@tanstack/react-query"
import { getIssue } from "../services/getIssue.service"
import { getComments } from "../services/getComments.service"

export const useIssue = (issueNumber: number) => {

  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60
  })

  // const commentsQuery = useQuery({
  //   queryKey: ['issue', issueNumber, 'comments'],
  //   queryFn: () => getComments(issueNumber),
  //   staleTime: 1000 * 60
  // })

  const commentsQuery = useQuery({
    queryKey: ['issue', issueQuery.data?.number, 'comments'],
    queryFn: () => getComments(issueQuery.data!.number),
    staleTime: 1000 * 60,
    enabled: issueQuery.data !== undefined
  })

  return {
    issueQuery,
    commentsQuery
  }
}