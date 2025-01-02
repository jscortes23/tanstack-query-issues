import { FC } from "react";
import { LoadingSpinner } from "../../shared/LoadingSpinner";
import { useLabels } from "../hooks/useLabels";

interface LabelPickerProps {
  selectedLabels: string[]
  onLabelSelected: (label: string) => void
}

export const LabelPicker: FC<LabelPickerProps> = ({ onLabelSelected, selectedLabels }) => {
  const { labelQuery } = useLabels()

  const isSelected = (name: string) => selectedLabels.includes(name) ? 'selectedLabel' : ''

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
            onClick={() => onLabelSelected(name)}
            className={`px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn ${isSelected(name)}`}
            style={{ border: `1px solid #${color}`, color: `#${color}` }}
          >
            {name}
          </span>
        ))
      }
    </div>
  );
};
