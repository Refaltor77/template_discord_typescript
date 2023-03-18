import {PrismaClient} from '@prisma/client';

export default class SQL {
    connection(): PrismaClient {
        return new PrismaClient();
    }


    async  createGuild(guild_id: string, name: string) {
        let prisma = this.connection();
        return await prisma.guild.create({
            data: {
                guild_id,
                name,
            },
        });
    }
}