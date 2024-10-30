async function fetchUserInfo() {
  const response = await fetch("https://fakestoreapi.com/users/1");

  if (!response.ok) {
    throw new Error("Failed to fetch User Info");
  }

  const resData = await response.json();

  return resData;
}

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch Products");
  }

  const resData = await response.json();

  return resData;
}

export { fetchUserInfo, fetchProducts };
