import GoalList from "./components/goal";

const GoalsPage = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* <AppSidebar /> */}
      <div className="flex-1 h-full p-4">
        <div className="h-full w-full bg-white rounded-2xl max-w-[800px] max-h-[988px] overflow-y-auto pl-16 pt-2">
          <h1 className="text-lg font-semibold">목표</h1>
          {/* <GoalList /> */}
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;
