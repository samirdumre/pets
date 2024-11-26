import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Pets not found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            name={pet.name}
            key={pet.id}
            images={pet.images}
            location={pet.location}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
