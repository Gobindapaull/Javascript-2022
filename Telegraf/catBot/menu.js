import { keyboard } from "telegraf/markup"

export const showMenu = (bot, chatId) => {
    bot.telegram.sendMessage(chatId, "show menu icon", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "hi",
                        request_location: true
                    }
                ],
                ["cat"],
                ["close"]
            ]
        }
    })
}

export const closeMenu = (bot, chatId) => {
    bot.telegram.sendMessage(chatId, "close menu", () => {
        reply_markup: {
            remove_keyboard: true
        }
    })

}
