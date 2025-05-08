interface Config {
  NODE_ENV: string;
  BETTERAUTH: {
    BASEURL: string;
  };
  DATABASEURL: string | null;
  NEXT_PUBLIC_URL: string;
}

const Config: Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  BETTERAUTH: {
    BASEURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  },
  DATABASEURL: process.env.DATABASE_URL || null,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
};

export default Config;
