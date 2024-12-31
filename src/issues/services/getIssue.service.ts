import { gitHubApi } from "../../api/github.api"
import { sleep } from "../../helpers/sleep"
import { GitHubIssues } from "../interfaces/issue.interface"

export const getIssue = async (issueNumber: number): Promise<GitHubIssues> => {
  await sleep(1500)
  const { data } = await gitHubApi.get<GitHubIssues>(`/issues/${issueNumber}`)
  return data
}
