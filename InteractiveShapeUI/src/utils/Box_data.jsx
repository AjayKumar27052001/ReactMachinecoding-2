import Shape from "../components/Shape";

const box_data = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const Abc = () => {
  return <Shape data={box_data} />;
};
export default Abc;
