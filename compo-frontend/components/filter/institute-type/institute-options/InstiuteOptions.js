import { useState } from 'react';
import InstituteCheck from '../institute-check/InstituteCheck';

const InstituteOptions = () => {
  const [types, setTypes] = useState({ public: true, private: true });

  return (
    <div className="flex flex-col gap-4">
      <InstituteCheck state={types.public} label="Public" value="public" />
      <InstituteCheck state={types.private} label="Private" value="private" />
    </div>
  );
};

export default InstituteOptions;
