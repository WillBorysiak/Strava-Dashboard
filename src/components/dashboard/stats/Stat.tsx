import { StatViewModel } from "../../../viewmodels/Stat.viewmodel";

interface StatsProps {
  stats: StatViewModel;
}

const Stat = (props: StatsProps) => {
  const { stats } = props;

  const { name, icon, stat } = stats;

  return (
    <>
      <span className="flex items-center justify-center rounded-md">
        {icon}
      </span>
      <div className="ml-5 text-start">
        <p className="font-oswald text-xl font-medium text-gray-900">{name}</p>
        <p className="text-2xl font-semibold text-gray-900 italic">{stat}</p>
      </div>
    </>
  );
};

export default Stat;
