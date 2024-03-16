export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    res.status(200).json({ message: "Subscribed successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
