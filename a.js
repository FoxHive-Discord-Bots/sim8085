const cmd = [
    '!sim code\n```\nMVI A, 01H\nSTA 3000H\nHLT\n```',
]
const regex = /^!sim\s+(\S*)\s*(?:(?<=```)\n?(.*?)(?=\n?```))?$|^(.*?)$/ms;

cmd.forEach(str => console.log(str.match(regex)))