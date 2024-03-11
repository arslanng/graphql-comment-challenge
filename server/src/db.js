import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // .env dosyasından ortam değişkeni almak için kullanıldı. "process.env.MONGO_URI" bu şekilde çağırıldı.

export default () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useUnifiedTopology: true,
    }
  );

  mongoose.connection.on(`open`, () =>
    console.log(`MongoDB: Connected`)
  );
  mongoose.connection.on(`error`, (e) =>
    console.log(`MongoDB: Not Connected!`, e)
  );
};
