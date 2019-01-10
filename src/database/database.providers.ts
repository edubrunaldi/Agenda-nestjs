import * as mongoose from 'mongoose';
import 'dotenv/config';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(process.env.URL_DB, {useNewUrlParser: true}),
    },
];
