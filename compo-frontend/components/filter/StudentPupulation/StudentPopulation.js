import CardInteractive from '../shared/card-interactive/CardInteractive';

const StudentPopulation = () => {
  return (
    <CardInteractive
      cardTitle="Student Population"
      bottomComponent={<h2>range</h2>}
    />
  );
};

export default StudentPopulation;
