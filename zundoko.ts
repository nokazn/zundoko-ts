type Zundokos = Array<'ズン' | 'ドコ'>;

function random (): string {
  const n = (Math.ceil(Math.random() * 32)).toString(2);
  return `0000${n}`.slice(-5);
}

function zundokoList (n: string): Zundokos {
  return n.split('').map(num => num === '0' ? 'ズン' : 'ドコ');
}

async function printRhythmically (strs: string[], rhythms: number[]): Promise<void> {
  for (const [index, msec] of Array.from(rhythms.entries())) {
    await sleep(msec);
    console.log(strs[index]);
  }
}

function sleep (msec: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, msec);
  });
}

(async () => {
  let n: string;
  let zundokos: Zundokos;
  const rhythms = [1000, 1000, 500, 500, 500];
  do {
    n = random();
    zundokos = zundokoList(n);
    await printRhythmically(zundokos, rhythms);
    await sleep(500);
    console.log(n === '00001' ? 'キヨシ!' : '--------------------');
  } while (n !== '00001');
  sleep(500);
})();
