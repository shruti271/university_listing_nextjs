import InstituteCheck from '../institute-check/InstituteCheck';

const InstituteOptions = () => {
  return (
    <div class="flex flex-col gap-4">
      <InstituteCheck initialState={true} label="Public" />
      <InstituteCheck label="Private non-profit" />
      <InstituteCheck label="Private profit" />
    </div>
  );
};

export default InstituteOptions;
