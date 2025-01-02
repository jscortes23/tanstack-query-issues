import { sleep } from "../../helpers/sleep"
import { gitHubApi } from "../../api/github.api"
import { GitHubIssues, State } from "../interfaces/issue.interface"

export const getIssues = async (state: State, selectedLables: string[], page: number): Promise<GitHubIssues[]> => {
  await sleep(1500)

  const params = new URLSearchParams()

  if (state !== State.All) {
    params.append('state', state)
  }

  if (selectedLables.length > 0) {
    params.append('labels', selectedLables.join(','))
  }

  params.append('per_page', '5')
  params.append('page', `${page}`)

  const { data } = await gitHubApi.get<GitHubIssues[]>('/issues', {
    params
  })

  return data
}
