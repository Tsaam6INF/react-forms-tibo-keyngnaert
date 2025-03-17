export default function GetName({ namen }) {
  return (
    <>
      <h1>Gebruikerslijst</h1>
      {namen.map((naam, ) => (
        <div>
          <span>{naam.first_name} {naam.last_name}</span>
        </div>
      ))}
    </>
  );
}
