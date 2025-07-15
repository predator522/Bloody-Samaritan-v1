
// Bloody Samarit@n v1

const { default: makeWASocket, useSingleFileAuthState } = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const P = require("pino");

const { state, saveState } = useSingleFileAuthState("./auth_info.json");

async function startSock() {
    const sock = makeWASocket({
        logger: P({ level: "silent" }),
        
        auth: state,
        getMessage: async () => '',
browser: ['BloodySamaritan', 'Chrome', '1.0'],
    });

    sock.ev.on("creds.update", saveState);

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const m = messages[0];
        if (!m.message) return;
        const msg = m.message.conversation || m.message.extendedTextMessage?.text;
        const reply = (text) => sock.sendMessage(m.key.remoteJid, { text }, { quoted: m });

        switch (msg?.trim()) {
            case ".menu":
                reply("🔧 Bloody Samarit@n v1 Menu:\n.menu, .bugmenu, .joke, .quote, .love, .fakecrash");
                break;
            case ".bugmenu":
                reply("🐞 Bug Commands:\n.fakecrash, .mentionbug, .lag, .spam, .crash");
                break;
            case ".joke":
                reply("😂 Why do programmers prefer dark mode? Because light attracts bugs.");
                break;
            case ".quote":
                reply("💬 'Hack the planet!' — Anonymous");
                break;
            case ".love":
                reply("❤️ You're the root to my access.");
                break;
            case ".fakecrash":
                reply("‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎‏‏‎");
                break;
        }
    });
}

startSock();
