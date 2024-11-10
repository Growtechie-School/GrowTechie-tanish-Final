import Razorpay from "razorpay";
import fs from "fs";
import path from "path";


const razorpay = new Razorpay({
  key_id: "rzp_test_Y2wy8t1wD1AFaA", // Testing key
  key_secret: "zSqRMpIa2ljBBpkieFYGmfLa", //Testing id
});

const ordersFilePath = path.resolve(process.cwd(), "orders.json");

const readData = () => {
  if (fs.existsSync(ordersFilePath)) {
    const data = fs.readFileSync(ordersFilePath);
    return JSON.parse(data);
  }
  return [];
};

const writeData = (data) => {
  fs.writeFileSync(ordersFilePath, JSON.stringify(data, null, 2));
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { amount, currency, receipt, notes } = req.body;

      const options = {
        amount: amount * 100,
        currency,
        receipt,
        notes,
      };

      const order = await razorpay.orders.create(options);
      const orders = readData();
      orders.push({
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: "created",
      });
      writeData(orders);

      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating order" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}