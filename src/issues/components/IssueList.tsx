import { GitHubIssues, State } from '../interfaces/issue.interface';
import { IssueItem } from './IssueItem';

interface IssueListProps {
  issues: GitHubIssues[]
  state: State,
  onStateChange: (state: State) => void
}

export const IssueList = ({ issues, onStateChange, state }: IssueListProps) => {

  const isActive = (currentState: State) => state === currentState ? 'active' : ''

  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button onClick={() => onStateChange(State.All)} className={`btn ${isActive(State.All)}`}>All</button>
        <button onClick={() => onStateChange(State.Open)} className={`btn ${isActive(State.Open)}`}>Open</button>
        <button onClick={() => onStateChange(State.Close)} className={`btn ${isActive(State.Close)}`}>Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues?.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
