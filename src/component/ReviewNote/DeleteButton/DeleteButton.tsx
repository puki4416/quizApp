interface DeleteButtonProps {
  eventHandler: () => void;
}

const DeleteButton = ({ eventHandler }: DeleteButtonProps) => {
  return <button onClick={eventHandler}>삭제</button>;
};

export default DeleteButton;
