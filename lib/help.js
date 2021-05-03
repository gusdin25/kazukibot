const help = (pushname, prefix, botName, ownerName, time, ucapanSalam, kyun, uptime, reqXp, totalchat, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *MENU ${botName}* ]----- 🔰
halo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ UANG : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ STATUS ON : ${kyun(uptime)}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ CHAT : ${totalchat.length}
┃│➸ JAM : ${time}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Fitur Premium sudah free
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│➸ *${prefix}ping*
┃│➸ *${prefix}donasi*
┃│➸ *${prefix}report*
┃│➸ *report jika ada masalah dengan bot*
┃│➸ *${prefix}requestfitur*
┃│➸ * insyaallah di buatkan*
┃│➸ *${prefix}error*
┃│➸ list fitur error/maintenance
┃│➸ *${prefix}update*
┃│➸ list fitur yang telah di perbaiki ato fitur baru
┃│➸ *${prefix}owner*
┃│───────────────────
┃│➸ *${prefix}simplemenu*
┃│➸ *${prefix}makermenu*
┃│➸ *${prefix}gabutmenu*
┃│➸ *${prefix}downloadmenu*
┃│➸ *${prefix}randommenu*
┃│➸ *${prefix}dompetmenu*
┃│➸ *${prefix}animemenu*
┃│➸ *${prefix}othermenu*
┃│➸ *${prefix}sarananime*
┃│➸ *${prefix}groupmenu*
┃│➸ *${prefix}edukasimenu*
┃│➸ *${prefix}soundmenu*
║│➸ *${prefix}kodebahasa*
┃│➸ *${prefix}premiummenu*
┃│➸ *${prefix}ownermenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.help = help