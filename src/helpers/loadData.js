async function loadData(dataUrl) {
  try {
    const response = await fetch(dataUrl);
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    throw error;
  }
}

export default loadData;
