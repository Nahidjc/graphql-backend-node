const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4");
const createApolloGraphqlServer = require("./graphql/apolloGraphqlServer");
const { verifyToken } = require("./middleware/authMiddleware");

async function bootstrap() {
  const serverApp = express();
  const port = process.env.PORT || 8000;

  serverApp.use(express.json());

  serverApp.get("/", (req, res) => {
    res.status(200).json({
      status: "ok",
      message: "Backend is live 🚀",
    });
  });

  const graphqlApi = await createApolloGraphqlServer();

  serverApp.use(
    "/graphql",
    expressMiddleware(graphqlApi, {
      context: async ({ req }) => {
        const currentUser = verifyToken(req);
        return { currentUser };
      },
    })
  );

  serverApp.listen(port, () =>
    console.log(`✅ Server running: http://localhost:${port}`)
  );
}

bootstrap();
