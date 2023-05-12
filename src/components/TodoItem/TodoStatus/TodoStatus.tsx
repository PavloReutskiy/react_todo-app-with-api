interface Props {
  checked: boolean;
  onChangeStatus: () => void;
}

export const TodoStatus: React.FC<Props> = ({ checked, onChangeStatus }) => {
  return (
    <label className="todo__status-label">
      <input
        type="checkbox"
        className="todo__status"
        checked={checked}
        onChange={onChangeStatus}
      />
    </label>
  );
};