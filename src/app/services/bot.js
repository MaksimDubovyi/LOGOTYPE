"use server";
import TelegramBot from "node-telegram-bot-api";
// const token = process.env.NEXT_TOKEN;
const token = "6858761714:AAFLLB7SpZ91bKD6_3aa_8_wUn5FkpCE7q8";
const bot = new TelegramBot(token, { polling: true });
export const startBot = () => {
  bot.setMyCommands([
    { command: "/hello", description: "Привет" },
    { command: "/what_is_your_name", description: "Как вас зовут" },
    {
      command: "/full_list_of_products",
      description: "Полный список продуктов",
    },
    {
      command: "/grain_crops",
      description: "Зерновые",
    },
    {
      command: "/seeds",
      description: "Семена",
    },
    {
      command: "/oilseeds",
      description: "Масличные культуры",
    },
    {
      command: "/legumes",
      description: "Бобовые культуры",
    },
    {
      command: "/animal_food",
      description: "Корм для животных",
    },
    {
      command: "/retail_products",
      description: "Розничная продукция",
    },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://dominishop.ru/upload/resize_cache/webp/iblock/5a4/n3lwfunldnkuf7npl3sof8a31oodyn3l.webp"
      );
      const dayTime = getGreeting();
      await bot.sendMessage(
        chatId,
        `${dayTime} ${msg.from.first_name}.\nКак я могу Вам помочь?\nПросмотрите меню команд.`
      );
    } else if (
      text === "/hello" ||
      text === "Привет" ||
      text === "привет" ||
      text === "Привіт" ||
      text === "привіт" ||
      text === "Hello" ||
      text === "hello" ||
      text === "Hi" ||
      text === "hi"
    ) {
      const dayTime = getGreeting();
      await bot.sendMessage(
        chatId,
        `${dayTime} ${msg.from.first_name}.\nКак я могу Вам помочь?\nПросмотрите меню команд.`
      );
    } else if (text === "/what_is_your_name") {
      await bot.sendMessage(
        chatId,
        `Меня зовут GranoBot рад знакомству!\nКак я могу Вам помочь?`
      );
    } else if (text === "/full_list_of_products")
      await bot.sendMessage(chatId, getAllProducts());
    else if (text === "/grain_crops")
      await bot.sendMessage(chatId, getSeeds(0, 4));
    else if (text === "/seeds") await bot.sendMessage(chatId, getSeeds(4, 12));
    else if (text === "/oilseeds")
      await bot.sendMessage(chatId, getSeeds(12, 21));
    else if (text === "/legumes")
      await bot.sendMessage(chatId, getSeeds(21, 30));
    else if (text === "/animal_food")
      await bot.sendMessage(chatId, getSeeds(30, 34));
    else if (text === "/retail_products")
      await bot.sendMessage(chatId, getSeeds(34, 39));
  });
  console.log("startBot");
};

const dataProducts = [
  {
    id: 1,
    title: "ПШЕНИЦЯ",
    price: 150,
  },
  {
    id: 2,
    title: "ЯЧМІНЬ",
    price: 50,
  },
  {
    id: 3,
    title: "ОВЕС",
    price: 30,
  },
  {
    id: 4,
    title: "КУКУРУДЗА",
    price: 220,
  },
  {
    id: 5,
    title: "ПРОСО ЧЕРВОНЕ",
    price: 50,
  },
  {
    id: 6,
    title: "ПРОСО ЖОВТЕ",
    price: 40,
  },
  {
    id: 7,
    title: "ПРОСО ЧОРНЕ",
    price: 150,
  },
  {
    id: 8,
    title: "СОРГО ЧЕРВОНЕ",
    price: 120,
  },
  {
    id: 9,
    title: "КОРІАНДР",
    price: 550,
  },
  {
    id: 10,
    title: "КАНАРКОВА ТРАВА",
    price: 750,
  },
  {
    id: 11,
    title: "ГРЕЧИХА",
    price: 150,
  },
  {
    id: 12,
    title: "СПЕЛЬТА",
    price: 350,
  },
  {
    id: 13,
    title: "ЛЬОН КОРИЧНЕВИЙ",
    price: 450,
  },
  {
    id: 14,
    title: "ЛЬОН ЗОЛОТИСТИ",
    price: 380,
  },
  {
    id: 15,
    title: "СОНЯШНИК ОЛІЙНИЙ",
    price: 80,
  },
  {
    id: 16,
    title: "СОНЯШНИК КОНДИТЕРСЬКИЙ",
    price: 40,
  },
  {
    id: 17,
    title: "ГІРЧИЦЯ БІЛА",
    price: 98,
  },
  {
    id: 18,
    title: "ГІРЧИЦЯ ЖОВТА",
    price: 88,
  },
  {
    id: 19,
    title: "ГІРЧИЦЯ ЧОРНА",
    price: 188,
  },
  {
    id: 20,
    title: "РІПАК",
    price: 228,
  },
  {
    id: 21,
    title: "СОЯ",
    price: 28,
  },
  {
    id: 22,
    title: "СОЧЕВИЦЯ ЗЕЛЕНА",
    price: 128,
  },
  {
    id: 23,
    title: "СОЧЕВИЦЯ ЧЕРВОНА",
    price: 208,
  },
  {
    id: 24,
    title: "ГОРОХ ЗЕЛЕНИЙ",
    price: 30,
  },
  {
    id: 25,
    title: "ГОРОХ ЖОВТИЙ",
    price: 40,
  },
  {
    id: 26,
    title: "КВАСОЛЯ ЧЕРВОНА",
    price: 46,
  },
  {
    id: 27,
    title: "КВАСОЛЯ БІЛА",
    price: 50,
  },
  {
    id: 28,
    title: "НУТ",
    price: 60,
  },
  {
    id: 29,
    title: "БОБИ",
    price: 70,
  },
  {
    id: 30,
    title: "ВІКА",
    price: 80,
  },
  {
    id: 31,
    title: "СОЄВЕ БОРОШНО",
    price: 180,
  },
  {
    id: 32,
    title: "СОНЯШНИКОВИЙ ШРОТ",
    price: 30,
  },
  {
    id: 33,
    title: "СОЄВИЙ ЖМИХ",
    price: 20,
  },
  {
    id: 34,
    title: "СОНЯШНИКОВИЙ ЖМИХ",
    price: 20,
  },
  {
    id: 35,
    title: "ОБВАЛЕНА СОЧЕВИЦЯ",
    price: 150,
  },
  {
    id: 36,
    title: "ПШОНО",
    price: 180,
  },
  {
    id: 37,
    title: "ВІВСЯНІ ПЛАСТІВЦІ",
    price: 280,
  },
  {
    id: 38,
    title: "КОЛОТИЙ ГОРОХ ЗЕЛЕНИЙ",
    price: 144,
  },
  {
    id: 39,
    title: "КОЛОТИЙ ГОРОХ ЖОВТИЙ",
    price: 144,
  },
];

function getAllProducts() {
  let str = "";
  for (let i = 0; i < dataProducts.length; i++) {
    let temp = `\n ${dataProducts[i].title} Цена: ${dataProducts[i].price} Подробно: https://grano.vercel.app/${dataProducts[i].id}\n`;
    str += temp;
  }
  return str;
}

function getSeeds(start, end) {
  let str = "";
  const seeds = dataProducts.slice(start, end);
  for (let i = 0; i < seeds.length; i++) {
    let temp = `\n ${seeds[i].title} Цена: ${seeds[i].price} Подробно: https://grano.vercel.app/${seeds[i].id}\n`;
    str += temp;
  }
  return str;
}
function getGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Доброе утро";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Добрый день";
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = "Добрый вечер";
  } else {
    greeting = "Доброй ночи";
  }

  return greeting;
}
