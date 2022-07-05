import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 49153,
        username: "postgres",
        password: "postgrespw",
        database: "postgres",
        entities: [
          __dirname + "/../**/*.entity.js",
        ],
        synchronize: true,
        // autoLoadEntities: true,
      });
    }
  }
]