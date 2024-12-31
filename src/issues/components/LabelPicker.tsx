import { LoadingSpinner } from "../../shared/LoadingSpinner";
import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const { labelQuery } = useLabels()

  if (labelQuery.isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="grid gap-y-2">
      {
        labelQuery.data?.map(({ id, name, color }) => (
          <span
            key={id}
            className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
            style={{ border: `1px solid #${color}`, color: `#${color}` }}
          >
            {name}
          </span>
        ))
      }
    </div>
  );
};
