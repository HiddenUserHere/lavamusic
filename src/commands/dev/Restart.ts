import { exec } from "child_process";
import { Command, type Context, type Lavamusic } from "../../structures/index.js";

export default class Eval extends Command {
    constructor(client: Lavamusic) {
        super(client, {
            name: "restart",
            description: {
                content: "Restart Bot",
                examples: ["restart"],
                usage: "restart",
            },
            category: "dev",
            aliases: ["ev"],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: true,
                client: ["SendMessages", "ViewChannel", "EmbedLinks"],
                user: [],
            },
            slashCommand: false,
            options: [],
        });
    }

    public async run(client: Lavamusic, ctx: Context, args: string[]): Promise<any> {
        try {
            await ctx.sendMessage("Restarting...");
            //Shell command to restart the bot
            exec("systemctl restart proguinhomusic", (error, stdout, stderr) =>
            {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);
            });
        } catch (e) {
            console.error(e);
        }
    }
}

/**
 * Project: lavamusic
 * Author: Appu
 * Main Contributor: LucasB25
 * Company: Coders
 * Copyright (c) 2024. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
