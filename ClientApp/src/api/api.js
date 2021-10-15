// GET ALL AFFILIATES
export const getAllAffiliates = async () => {
  const response = await fetch("https://localhost:5001/api/affiliates");
  if (response.ok) {
    return await response.json();
  }
};

// POST NEW AFFILIATE
export const createAffiliate = async (newAffiliate) => {
  await fetch("https://localhost:5001/api/affiliates", {
    method: "POST",
    body: JSON.stringify(newAffiliate),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// GET ONE AFFILIATE
export const getAffiliate = async (id) => {
  const url = `https://localhost:5001/api/affiliates/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    // console.log(await response.json());
    return await response.json();
  }
};

//UPDATE AFFILIATE
export const updateAffiliate = async (upatedAffiliate) => {
  fetch("https://localhost:5001/api/affiliates", {
    method: "PUT",
    body: JSON.stringify(upatedAffiliate),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return "affiliate updated!";
};

// GET ACTIVES AFFILIATES
export const getActivesAffiliates = async () => {
  const response = await fetch("https://localhost:5001/api/affiliates/actives");
  if (response.ok) {
    return await response.json();
  }
};

// GET INACTIVES AFFILIATES
export const getInactivesAffiliates = async () => {
  const response = await fetch(
    "https://localhost:5001/api/affiliates/inactives"
  );
  if (response.ok) {
    return await response.json();
  }
};
