const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *RANDOM MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}wibu*
┃│➸ random anime
┃│➸ *${prefix}loli*
┃│➸ random loli
┃│➸ *${prefix}husbu*
┃│➸ random husbu
┃│➸ *${prefix}waifu*
┃│➸ random waifu
┃│➸ *${prefix}anjing*
┃│➸ hmmmm
┃│➸ *${prefix}pokemon*
┃│➸ hmmmm
┃│➸ *${prefix}darkjokes*
┃│➸ random darkjokes
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random