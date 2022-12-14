const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Comments = require("./models/Comments");

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Acess-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, 'Authorization'"
  );
  app.use(cors());
  next();
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "*",
  })
);

process.on("uncaughtException", (error) => {
  console.log("Alert! ERROR : ", error);
  process.exit(1); // Exit your app
});

app.get("/exp", async (req, res) => {
  return res.json({
    error: false,
    career: [
      {
        title: "Estudante Autodidata",
        time: "12 19 - ∞",
        text1:
          "Mesmo desde pequeno por dentro da tecnologia, foi o começo do estudo da programação. Desdobrando-se para estudar tecnologia durante o tempo livre, baseado em material gratuito na Internet.",
        text2:
          "Depois de algumas pesquisas, a área inicial escolhida foi o desenvolvimento WEB, tendo como base o HTML, CSS e JAVASCRIPT, PHP, banco de dados e principalmente, a biblioteca REACT-JS e suas ramificações/addons.",
        text3:
          "O objetivo é não conter-se apenas em uma área da tecnologia, mas ter amplitude de conhecimento nas esferas computacionais, como segurança da informação, ciência de dados, UX, etc...",
      },
      {
        title: "Includer Tecnologia",
        time: "04 22 - xx xx",
        text1:
          "Primeiro emprego como desenvolvedor. A Includer Tecnologia é uma startup localizada em Bento Gonçalves - RS, focada no desenvolvimento de soluções empresariais",
        text2:
          "Atuando como desenvolvedor WEB FULLSTACK, utilizando o framework Laravel e o React JS como tecnologias primárias. Desenvolvimento de CRUD's, com frontend baseado na biblioteca de JavaScript REACT-Js, e BACKEND via Laravel, com a manipulação de dados via a ORM ELOQUENT, e gerenciamento de banco de dados pelo POSTGRESQL.",
        text3:
          "Gerenciamento de sprints pelo método SCRUM, e versionamento GIT feitos pelo suporte do sistema da Microsoft Azure Devops.",
        progress: "20%",
        level: "Cargo Nível Junior",
        popover_text:
          "Marcando o ingresso no mercado de trabalho da programação.",
      },
    ],
  });
});
// hRdtF9KSSfsyExxa
// mongodb+srv://Yoarajota:hRdtF9KSSfsyExxa@yjcluster.runkvch.mongodb.net/?retryWrites=true&w=majority
app.get("/menu", async (req, res) => {
  return res.json({
    error: false,
    menu: [
      { key: 0, title: "Home", link: "/"},
      { key: 1, title: "Tecnologias", link: "/tec"},
      { key: 2, title: "Experiências", link: "/exp"},
      { key: 3, title: "Extra", link: "/extra"},
    ],
  });
});

// API

app.post("/comments", async (req, res) => {
  const { name, comment } = req.body;

  try {
    if (!name || !comment) {
      var err = new Error("Preencha todos os campos!");
      throw err;
    }

    let date = new Date();

    const Comment = {
      name,
      comment,
      date,
    };

    await Comments.create(Comment);
    res.status(201).json({ status: 'success', message: "Comentário depositado com sucesso!" });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
});

app.get("/comments", async (req, res) => {
  try {
    const comments = await Comments.find();

    res.status(200).json({ status: 'success', data: comments });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
})

//

mongoose
  .connect(
    "mongodb+srv://Yoarajota:hRdtF9KSSfsyExxa@yjcluster.runkvch.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(
    app.listen(8000, () => {
      console.log("Servidor Iniciado.");
    })
  );

//
//  ,&#.    .(&/   /&(                        *%*                   (@@@@@@@@.           *@@@@@@@@@@@@@@@@@@@*
//   ,%&*  ,%%,    /@(                      ,%@@*                         (@@.           *@@.           ,@@(
//     /@#/@#       /@(                    ,%@@@@*                         (@@.           ,##          .&@&
//      *@@/       /@(                  .#@&/(@@*                         (@@.                       #@%,
//      ,&&*      .%@(                .#@@/  /@@*                         (@@.                     (@@,
//      .//.  ./(#(*.               .(@@(.   /@@*                         (@@.                   ,@@/
//                                 (@@#.     /@@*                         (@@.                 .&@@&%/.
//                              .(@@#,       /@@*                         (@@.                ,*,..,*(%@@%/
//                             (@@%,         /@@*           ,             (@@.                           (@@&
//                           /&@%,           /@@*         /@@@(           (@@.                             #@@,
//                         *@@%,             /@@*                         (@@.                              #@@.
//                       *&@@@@@@@@@@@@@@@@@@@@@@@@@@@*                   (@@.                              *@@*
//                                           /@@*                         (@@.                              #@@.
//                                           /@@*                         (@@.                             #@@*
//                                           /@@*                         (@@.           */              /@@&.
//                                      .,***#@@(****.    *&@@/      ,****#@@/****      ,#@@&(*,. ..,*#&@@(.
//                                      *%&&&&&&&&&&&*     /&(.      (&&&&&&&&&&&&,         ,#@@@@@@@@(,

//                                      .              .,,,,,,         .,,,,,,,,,,,,,,.
//      #@.  (&.  .@,                 #@*              .****&@         (@/*********@@,
//       ,@/@#    .@,               (@@@*                  .&@         *#        #@(
//        ,@(     ,@,             /@&.%@*                  .&@                 *@#
//        ,@(  &@@@/            /@&,  %@*                  .&@               ,&@.
//                            ,@@,    %@*                  .&@              &@&%*
//                          *@@*      %@*                  .&@                  .(&@/
//                        ,&@/        %@*       %@@.       .&@                     .%@/
//                      .&@(          %@*                  .&@                       #@*
//                     (%%%%%%%%%%%%%%@@&%%%%              .&@                       *@(
//                                    %@*                  .&@                      .@&.
//                                    %@*                  .&@         *.          #@&
//                                *%%%@@&%%%    &@@,    (%%%@@%%%(     /&@@#///#&@@(
