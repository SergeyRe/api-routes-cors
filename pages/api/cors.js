import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    methods: ["POST", "OPTIONS"],
    origin: [
      /^(https:\/\/(?:.*\.)?yandex\.(?:ru|by|uz|com|com\.tr))$/,
      /^(https:\/\/(?:.*\.)?turbopages.org)$/
    ],
    credentials: true,
  })
);
export default async function handler(req, res) {
  await cors(req, res);
//остальная логика 
  res.json([
    {
      field: "description",
      value:
        "Спасибо за подписку .Мы сообщим , как только так сразу",
    },
    {
      field: "link",
      value: "На главную",
      href: "https://batteryhelp.ru",
    },
  ]);
}
