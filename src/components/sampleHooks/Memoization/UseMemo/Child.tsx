interface Props {
  number?: number;
}

const Child: React.FC<Props> = ({ number }) => {
  console.log("child rendered");
  return <div>Child:{number}</div>;
};

export default Child;
