export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body || {};
  const DEMO_EMAIL = "customer@example.com";
  const DEMO_PW = "joinup123";

  if (email === DEMO_EMAIL && password === DEMO_PW) {
    return res.status(200).json({
      token: "demo.jwt.token.value",
      user: { email },
    });
  }

  return res.status(401).json({ message: "Invalid email or password" });
}
