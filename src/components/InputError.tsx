type InputErrorProps = {
  message?: string;
};
const InputError = ({ message }: InputErrorProps) => {
  return <p className="my-1 px-1 text-red-700 text-sm">{message}</p>;
};
export default InputError;
