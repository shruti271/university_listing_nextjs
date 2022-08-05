import ActivityIcon from "../../../components/svg/ActivityIcon";

const Activities = () => {
  const ActivitiesList = [
    "Your application has accepted in 3 universities",
    "Your scholarship has approved in EMMED program",
    "Due to incomplete profile your application is on hold",
    "Your application has accepted in 3 Vaccancy",
    "Your scholarship has approved in EMMED program",
    "Due to incomplete profile your application is on hold",
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-[20px] p-5 mt-5 container">
      <p className="font-semibold  text-[#3D3D3D] text-lg">Recent Activities</p>
      <div className="max-h-[300px] overflow-y-auto mt-3">
        {ActivitiesList?.map((itm) => (
          <div className="mt-5 flex gap-4 " key={itm}>
            <div className="p-4 flex items-center justify-center  border border-[#F3EAFF] rounded-[20px] h-[50px]">
              <ActivityIcon />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-sm text-[#616161]">{itm}</div>
              <div className="text-[#AEAEAE] font-normal text-sm">12h ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
