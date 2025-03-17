export default function GetName({ namen }) {
    return (
      <>
        <h1>Namen</h1>
        {namen.map((naam) => (
          <p>{naam.first_name}</p>
        ))}
      </>
    );
  }
  