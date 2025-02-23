import { useState } from 'react';

const PetFilter = ({ onFilter }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a pet..."
      value={search}
      onChange={handleSearch}
      className="p-2 border rounded w-full"
    />
  );
};

export default PetFilter;