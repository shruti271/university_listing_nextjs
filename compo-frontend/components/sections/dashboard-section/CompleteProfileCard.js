const CompleteProfileCard = () => {
  return (
    <div className="w-[100%] !bg-cover profile-cover rounded-xl animate__animated animate__zoomIn p-12">
      <div className="w-[60%] relative">
        <div className="text-[#FFFFFF] text-xl font-extrabold uppercase mt-5">
          Welcome Back! Ali
        </div>
        <div className="text-[#FFFFFF] text-sm leading-[22px] font-normal  mt-1">
          You have completed 60% of your goal this week! start a new goal and
          improve your result
        </div>
        <div className="mt-7 pb-5">
          <button
            className="bg-[#C86DFF] hover:bg-[#C86DFF] text-[#FFFFFF] px-8 py-3  rounded
                  font-semibold focus:outline-none focus:shadow-outline text-sm tracking-wide
                  shadow-lg flex items-center justify-center whitespace-nowrap	"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfileCard;
