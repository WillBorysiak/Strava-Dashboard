import { StatViewModel } from "../../../viewmodels/Stat.viewmodel";

const Stat = (props: { stats: StatViewModel }) => {
  const { stats } = props;

  const { name, icon, stat } = stats;

  return (
    <>
      <span className="bg-orange-600 flex items-center justify-center rounded-md">
        {icon}
      </span>
      <div className="ml-5 text-start">
        <p className="font-oswald text-xl font-medium text-gray-900">{name}</p>
        <p className="text-2xl font-semibold italic text-gray-900">{stat}</p>
      </div>
    </>
  );
};

export default Stat;
