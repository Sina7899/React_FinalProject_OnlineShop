async function fetchUserInfo() {
  const response = await fetch("https://fakestoreapi.com/users/1");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch User Info");
  }

  return resData;
}

async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch Products");
  }

  return resData;
}

export { fetchUserInfo, fetchProducts };
