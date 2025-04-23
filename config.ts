interface Config {
    NODE_ENV: string;
    BETTERAUTH: {
        BASEURL: string;
    };
}

const Config: Config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    BETTERAUTH: {
        BASEURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    },
};

export default Config;