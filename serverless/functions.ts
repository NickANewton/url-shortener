import type { AWS } from '@serverless/typescript';

const functions: AWS["functions"] = {
  combinationAPI: {
    handler: "src/functions/combinationAPI/index.handler",
    events: [
      {
        httpAPI: {
          path: "/gameDeals",
          method: "get",
        },
      },
    ],
  },
};

export default functions;
