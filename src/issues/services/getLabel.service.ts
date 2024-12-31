import { gitHubApi } from "../../api/github.api"
import { sleep } from "../../helpers/sleep"
import { GitHubLabel } from "../interfaces/label.interface"

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500)
  const { data } = await gitHubApi.get<GitHubLabel[]>('/labels')
  return data
}
