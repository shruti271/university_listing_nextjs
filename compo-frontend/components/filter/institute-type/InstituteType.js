import { useState } from 'react';
import CardInteractive from '../shared/card-interactive/CardInteractive';
import CardWrapper from '../shared/card-wrapper/CardWrapper';
import FilterTitle from '../shared/filter-title/FilterTitle';
import InstituteOptions from './institute-options/InstiuteOptions';

const InstituteType = ({ className = '' }) => {
  const [cardOpen, setCardOpen] = useState(true);
  const handleOpenClick = () => setCardOpen(!cardOpen);

  return (
    <CardInteractive
      cardTitle="Institute Type"
      bottomComponent={<InstituteOptions />}
    />
  );
};

export default InstituteType;
