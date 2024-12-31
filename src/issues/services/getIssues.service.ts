import { sleep } from "../../helpers/sleep"
import { gitHubApi } from "../../api/github.api"
import { GitHubIssues } from "../interfaces/issue.interface"

export const getIssues = async (): Promise<GitHubIssues[]> => {
  await sleep(1500)
  const { data } = await gitHubApi.get<GitHubIssues[]>('/issues')
  return data
}
