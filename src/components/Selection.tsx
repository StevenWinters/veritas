import { HashLink } from "react-router-hash-link";

interface Props {
  id: number;
  path: string;
  image: string;
  name: string;
}

const Selection = ({ ...data }: Props) => {
  return (
    <HashLink
      key={data.id}
      to={data.path}
      className="flex flex--column align--center gap--sm selection__container"
    >
      <img src={data.image} alt={data.name} className="img img--circle" />
      <span className="selection__name">{data.name}</span>
    </HashLink>
  );
};

export default Selection;
