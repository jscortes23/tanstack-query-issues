import { gitHubApi } from "../../api/github.api"
import { GitHubIssues } from "../interfaces/issue.interface"

export const getComments = async (issueNumber: number): Promise<GitHubIssues[]> => {
  const { data } = await gitHubApi.get<GitHubIssues[]>(`issues/${issueNumber}/comments`)
  return data
}
