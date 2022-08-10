import CardInteractive from '../../shared/card-interactive/CardInteractive';
import RangeSlider from './RangeSlider/RangeSlider';

const StudentPopulation = () => {
  return (
    <CardInteractive
      cardTitle="Student Population"
      bottomComponent={<RangeSlider />}
    />
  );
};

export default StudentPopulation;
