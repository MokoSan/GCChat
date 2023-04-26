export default async function (req, res) {

  const response = await fetch("http://mrsharm.pythonanywhere.com/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Query: req.body.question,
    }),
  });

    const data = await response.json();
    res.status(200).json({ result: data })
}