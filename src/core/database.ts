import mongoose from "mongoose";

export default class Database {
  url: string = process.env.MONGO_URL || "mongodb://localhost: 27017/blog_ts";

  connect() {
    return mongoose.connect(
      this.url,
      {
        // useNewUrlParser: true,
        // userFindAndModify: false,
        serverSelectionTimeoutMS: 6000,
      },
      (error) => {
        if (error) {
          console.error(`Database connection error: ${error}`);
        }
      }
    );
  }
}
