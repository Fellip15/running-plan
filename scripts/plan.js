// Plano de 29 semanas: começa segunda 2026-06-08, termina domingo 2026-12-27.
// Cada semana tem 3 slots de sessão; faça 2 ou 3 — dia sim dia não.
// "Aquecimento" e "desaquecimento" de 5min de caminhada são padrão em TODAS as sessões.

window.START_DATE = '2026-06-08'; // segunda-feira
window.GOAL_DATE = '2026-12-27';  // domingo da semana 29

const W = (week, range, block, summary, sessions) => ({ week, range, block, summary, sessions });

window.PLAN = [
  // ───────────────────────── BLOCO A: Aclimatação (caminhar vira hábito) ─────────────────────────
  W(1, '08/jun – 14/jun', 'A', 'Bloco A · Caminhar vira hábito 🚶‍♀️', [
    'Caminhada acelerada 20 min',
    'Caminhada acelerada 20 min',
    'Caminhada acelerada 20 min (bônus)',
  ]),
  W(2, '15/jun – 21/jun', 'A', 'Bloco A · Caminhar vira hábito 🚶‍♀️', [
    'Caminhada 25 min + 2× trotinho leve de 30s',
    'Caminhada 25 min + 2× trotinho leve de 30s',
    'Caminhada 25 min + 3× trotinho leve de 30s (bônus)',
  ]),
  W(3, '22/jun – 28/jun', 'A', 'Bloco A · Caminhar vira hábito 🚶‍♀️', [
    'Caminhada 30 min + 4× trotinho leve de 30s',
    'Caminhada 30 min + 4× trotinho leve de 30s',
    'Caminhada 30 min + 4× trotinho leve de 30s (bônus)',
  ]),

  // ───────────────────────── BLOCO B: Couch-to-5K esticado ─────────────────────────
  W(4, '29/jun – 05/jul', 'B', 'Bloco B · Começou a correr 🏃‍♀️', [
    '7× (correr 1min / caminhar 1min30) — total ~18min de bloco',
    '7× (correr 1min / caminhar 1min30)',
    '7× (correr 1min / caminhar 1min30) (bônus)',
  ]),
  W(5, '06/jul – 12/jul', 'B', 'Bloco B · Começou a correr 🏃‍♀️', [
    '6× (correr 1min30 / caminhar 2min)',
    '6× (correr 1min30 / caminhar 2min)',
    '6× (correr 1min30 / caminhar 2min) (bônus)',
  ]),
  W(6, '13/jul – 19/jul', 'B', 'Bloco B · Começou a correr 🏃‍♀️', [
    '2× [correr 1:30 / cam 1:30 / correr 3:00 / cam 3:00]',
    '2× [correr 1:30 / cam 1:30 / correr 3:00 / cam 3:00]',
    'Repetir o do dia (bônus)',
  ]),
  W(7, '20/jul – 26/jul', 'B', 'Bloco B · Repeteco da confiança 💪', [
    'Mesma sessão da semana 6 (consolidar)',
    'Mesma sessão da semana 6',
    'Mesma sessão da semana 6 (bônus)',
  ]),
  W(8, '27/jul – 02/ago', 'B', 'Bloco B · Subindo o nível 🚀', [
    'correr 3 / cam 1:30 / correr 5 / cam 2:30 / correr 3 / cam 1:30 / correr 5',
    'Mesma sessão',
    'Mesma sessão (bônus)',
  ]),
  W(9, '03/ago – 09/ago', 'B', 'Bloco B · Primeira corrida longa 👀', [
    'S1: correr 5 / cam 3 / correr 5 / cam 3 / correr 5',
    'S2: correr 8 / cam 5 / correr 8',
    'S3: 🌟 correr 20 minutos seguidos 🌟',
  ]),
  W(10, '10/ago – 16/ago', 'B', 'Bloco B · Mais um marco 🌟', [
    'S1: correr 5 / cam 3 / correr 8 / cam 3 / correr 5',
    'S2: correr 10 / cam 3 / correr 10',
    'S3: 🌟 correr 25 minutos seguidos 🌟',
  ]),
  W(11, '17/ago – 23/ago', 'B', 'Bloco B · Corrida contínua 🏃‍♀️💨', [
    'Correr 25 min seguidos',
    'Correr 25 min seguidos',
    'Correr 25 min (bônus)',
  ]),
  W(12, '24/ago – 30/ago', 'B', 'Bloco B · Quase lá 🔥', [
    'Correr 28 min seguidos',
    'Correr 28 min seguidos',
    'Correr 28 min (bônus)',
  ]),
  W(13, '31/ago – 06/set', 'B', 'Bloco B · GRADUAÇÃO 🎓', [
    '🎓 Correr 30 min seguidos',
    '🎓 Correr 30 min seguidos',
    '🎉 Festejar (e correr 30min se quiser)',
  ]),
  W(14, '07/set – 13/set', 'B', 'Bloco B · Consolidar 💪', [
    'Correr 30 min seguidos, foco na postura',
    'Correr 30 min seguidos',
    'Correr 30 min (bônus)',
  ]),
  W(15, '14/set – 20/set', 'B', 'Bloco B · Esticando o tempo 📈', [
    'Correr 32 min seguidos',
    'Correr 32 min seguidos',
    'Correr 32 min (bônus)',
  ]),

  // ───────────────────────── BLOCO C: Construção dos 5K ─────────────────────────
  W(16, '21/set – 27/set', 'C', 'Bloco C · Mira nos 5km 🎯', [
    'Correr 3.5 km (devagar)',
    'Correr 3.5 km',
    'Correr 3.5 km (bônus)',
  ]),
  W(17, '28/set – 04/out', 'C', 'Bloco C · Mira nos 5km 🎯', [
    'Correr 3.8 km',
    'Correr 3.8 km',
    'Correr 3.8 km (bônus)',
  ]),
  W(18, '05/out – 11/out', 'C', 'Bloco C · Mira nos 5km 🎯', [
    'Correr 4.0 km',
    'Correr 4.0 km',
    'Correr 4.0 km (bônus)',
  ]),
  W(19, '12/out – 18/out', 'C', 'Bloco C · Easy week 🌿', [
    'Correr 4.2 km tranquilo',
    'Correr 4.2 km tranquilo',
    'Repetir só se quiser (bônus)',
  ]),
  W(20, '19/out – 25/out', 'C', 'Bloco C · Mira nos 5km 🎯', [
    'Correr 4.5 km',
    'Correr 4.5 km',
    'Correr 4.5 km (bônus)',
  ]),
  W(21, '26/out – 01/nov', 'C', 'Bloco C · Mira nos 5km 🎯', [
    'Correr 4.7 km',
    'Correr 4.7 km',
    'Correr 4.7 km (bônus)',
  ]),
  W(22, '02/nov – 08/nov', 'C', 'Bloco C · PRIMEIRO 5K 🚀', [
    '🚀 Correr 5.0 km — PRIMEIRA VEZ',
    'Correr 5.0 km de novo (porque deu, né?)',
    'Correr 4 km easy (bônus)',
  ]),
  W(23, '09/nov – 15/nov', 'C', 'Bloco C · 5K vira rotina 💅', [
    'Correr 5 km',
    'Correr 5 km',
    'Correr 5 km (bônus)',
  ]),

  // ───────────────────────── BLOCO D: Consolidar e celebrar ─────────────────────────
  W(24, '16/nov – 22/nov', 'D', 'Bloco D · Diversão de verdade 🎉', [
    'Correr 5 km',
    'Correr 5 km em rota nova (parque, trilha)',
    'Correr 5 km (bônus)',
  ]),
  W(25, '23/nov – 29/nov', 'D', 'Bloco D · Variando o estilo 🎧', [
    'Correr 5 km com playlist nova',
    'Correr 5 km com alguém (amiga / namorado escroto 😎)',
    'Correr 5 km (bônus)',
  ]),
  W(26, '30/nov – 06/dez', 'D', 'Bloco D · Deload 🌿', [
    'Correr 4 km easy',
    'Correr 4 km easy',
    'Caminhada longa de bônus (opcional)',
  ]),
  W(27, '07/dez – 13/dez', 'D', 'Bloco D · Tempo run ⚡', [
    'Correr 5 km um pouco mais rápido',
    'Correr 5 km easy',
    'Correr 5 km (bônus)',
  ]),
  W(28, '14/dez – 20/dez', 'D', 'Bloco D · Reta final 🏁', [
    'Correr 5 km easy',
    'Correr 5 km easy',
    'Descanso ativo (caminhada) — bônus',
  ]),
  W(29, '21/dez – 27/dez', 'D', 'Bloco D · 🏆 5K Celebratório 🏆', [
    '🏆 5K celebratório — corrida-prova!',
    'Comemoração (bolo, abraço, foto)',
    'Próximo ciclo? Quem sabe 10K? 👀',
  ]),
];

window.BLOCK_TITLES = {
  A: 'Bloco A · Aclimatação',
  B: 'Bloco B · Couch-to-5K',
  C: 'Bloco C · Construção dos 5km',
  D: 'Bloco D · Celebração',
};
