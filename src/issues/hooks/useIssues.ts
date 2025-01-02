import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../services/getIssues.service"
import { State } from "../interfaces/issue.interface"
import { useEffect, useState } from "react"

interface useIssuesProps {
  state: State
  selectedLabels: string[]
}

export const useIssues = ({ state, selectedLabels }: useIssuesProps) => {

  const [page, setPage] = useState(1)

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return

    setPage((nextPage) => nextPage + 1)

  }

  const prevPage = () => {
    if (page === 1) return

    setPage((prevPage) => prevPage - 1)
  }

  useEffect(() => {
    setPage(1)
  }, [state, selectedLabels])

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60 * 60,
  })

  return {
    issuesQuery,
    page,
    nextPage,
    prevPage,
  }
}
