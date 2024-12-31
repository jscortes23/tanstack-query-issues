import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { FiSkipBack } from 'react-icons/fi';
import { useIssue } from '../hooks/useIssue';
import { LoadingSpinner } from '../../shared/LoadingSpinner';

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams()

  const issueNumber = Number(params.issueNumber)
  const { issueQuery, commentsQuery } = useIssue(issueNumber)

  if (issueQuery.isLoading) {
    return <LoadingSpinner />
  }

  if (!issueQuery.data) {
    return <Navigate to="/404" />
  }

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={issueQuery.data} />

      {/* Comentario de otros */}
      {
        commentsQuery.isLoading
          ? <LoadingSpinner />
          : (
            commentsQuery.data?.map((data) => <IssueComment issue={data} />)
          )
      }
    </div>
  );
};
