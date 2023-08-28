export default async function FetchCurrencyData() {
  try {
    const response = await fetch(
      "http://data.fixer.io/api/latest?access_key=55bbbe69909874dcb3468bd96f4fcf3a&symbols=USD,RUB,GBP"
    );
    if (response.status === 200) {
      return response.json();
    }
    throw new Error(
      `Status code: ${response.status}. Data fetched unsuccessfully`
    );
  } catch (e) {
    console.log(e);
    throw new Error("Data fetched unsuccessfully");
  }
}
