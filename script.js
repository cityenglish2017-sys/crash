/* ======================================= */
/* 등장인물 */
/* ======================================= */

const characters = {

  ajun: {
    name: "아준 관제사",
    emoji: "👦"
  },

  wheelTeam: {
    name: "바퀴 정비팀",
    emoji: "👨‍🔧"
  },

  doorTeam: {
    name: "출입문 정비팀",
    emoji: "👩‍🔧"
  },

  electricTeam: {
    name: "전기 정비팀",
    emoji: "🧑‍🔧"
  },

  trackTeam: {
    name: "선로 정비팀",
    emoji: "👷"
  },

  radioTeam: {
    name: "통신팀",
    emoji: "🧑‍💻"
  },

  inspector: {
    name: "안전 점검팀",
    emoji: "🕵️"
  }

};


/* ======================================= */
/* 복구 임무 */
/* ======================================= */

const missions = [

  {
    phase: "1단계",

    type: "상황 파악",

    icon: "🚨",

    title: "사고 직후 가장 먼저",

    characters: [
      "ajun"
    ],

    text:
      "KTX-산천과 무궁화호가 접촉한 뒤 멈췄어요. 가장 먼저 무엇을 해야 할까요?",

    choices: [
      "다른 열차가 접근하지 못하도록 신호를 정지한다",
      "어느 기차가 더 빠른지 확인한다",
      "사진부터 찍는다",
      "두 열차를 다시 출발시킨다"
    ],

    answer: 0,

    feedback:
      "맞아요! 먼저 다른 열차가 접근하지 못하도록 안전을 확보해야 해요.",

    speech:
      "“모든 열차는 현재 위치에서 정지해 주세요. 안전을 확인하겠습니다.”라고 말해보세요.",

    progress: {
      ktx: 5,
      mugunghwa: 5
    },

    team: "inspect"
  },


  {
    phase: "2단계",

    type: "상황 파악",

    icon: "🔍",

    title: "고장 부위를 확인해요",

    characters: [
      "ajun",
      "inspector"
    ],

    text:
      "KTX-산천은 출입문과 전기, 무궁화호는 바퀴와 선로를 점검해야 해요. 어떻게 하는 것이 좋을까요?",

    choices: [
      "고장 위치를 확인하고 정비팀을 나눈다",
      "모든 정비사를 한곳에 보낸다",
      "열차 색깔부터 확인한다",
      "기관사에게 알아서 고치라고 한다"
    ],

    answer: 0,

    feedback:
      "정답! 문제에 맞는 정비팀을 배치해야 해요.",

    speech:
      "“각 열차의 고장 위치를 확인하고 필요한 정비팀을 배치해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 10,
      mugunghwa: 10
    },

    team: "inspect"
  },


  {
    phase: "3단계",

    type: "작업 지시",

    icon: "🛞",

    title: "무궁화호 바퀴",

    characters: [
      "ajun",
      "wheelTeam"
    ],

    text:
      "무궁화호 오른쪽 바퀴에서 문제가 발견됐어요. 가장 정확한 지시는 무엇일까요?",

    choices: [
      "빨리 고쳐요!",
      "무궁화호 오른쪽 바퀴를 먼저 확인해 주세요",
      "기차 좀 봐주세요",
      "아무거나 고쳐주세요"
    ],

    answer: 1,

    feedback:
      "좋아요! 어느 열차의 어느 부분인지 정확히 말했어요.",

    speech:
      "“바퀴 정비팀, 무궁화호 오른쪽 바퀴를 먼저 확인해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 0,
      mugunghwa: 20
    },

    team: "wheel",

    fixFault: {
      train: "mugunghwa",
      fault: "wheel"
    }
  },


  {
    phase: "4단계",

    type: "작업 지시",

    icon: "🚪",

    title: "KTX 출입문",

    characters: [
      "ajun",
      "doorTeam"
    ],

    text:
      "KTX-산천 출입문이 제대로 닫히지 않아요. 어떻게 지시하면 좋을까요?",

    choices: [
      "문 고쳐!",
      "KTX-산천 2호차 출입문을 확인해 주세요",
      "저기 이상해요",
      "다른 기차부터 보세요"
    ],

    answer: 1,

    feedback:
      "맞아요! 작업 위치를 구체적으로 알려줬어요.",

    speech:
      "“출입문 정비팀, KTX-산천 2호차 출입문을 확인해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 20,
      mugunghwa: 0
    },

    team: "door",

    fixFault: {
      train: "ktx",
      fault: "door"
    }
  },


  {
    phase: "5단계",

    type: "질문에 대답",

    icon: "❓",

    title: "어느 열차부터 할까요?",

    characters: [
      "ajun",
      "wheelTeam"
    ],

    text:
      "정비사가 “어느 열차 작업을 먼저 계속할까요?”라고 물었어요. 무궁화호 바퀴 작업이 남았다면 어떻게 말할까요?",

    choices: [
      "아무거나 하세요",
      "무궁화호 바퀴 작업을 먼저 마쳐 주세요",
      "잘 모르겠어요",
      "KTX가 더 빠르니까 KTX부터요"
    ],

    answer: 1,

    feedback:
      "좋아요! 질문에 맞게 현재 필요한 작업을 정확히 대답했어요.",

    speech:
      "“무궁화호 바퀴 작업을 먼저 마쳐 주세요.”라고 말해보세요.",

    progress: {
      ktx: 0,
      mugunghwa: 15
    },

    team: "wheel"
  },


  {
    phase: "6단계",

    type: "대화 기술",

    icon: "📡",

    title: "무전이 끊겼어요",

    characters: [
      "ajun",
      "radioTeam"
    ],

    text:
      "정비팀 무전이 끊겨서 마지막 내용을 잘 못 들었어요. 어떻게 해야 할까요?",

    choices: [
      "대충 알아들은 척한다",
      "마지막 내용을 다시 말해 달라고 한다",
      "내 생각대로 작업한다",
      "정비팀에게 화를 낸다"
    ],

    answer: 1,

    feedback:
      "맞아요! 잘 못 들었으면 다시 확인해야 해요.",

    speech:
      "“죄송합니다. 마지막 내용을 다시 한 번 말씀해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 5,
      mugunghwa: 5
    },

    team: "radio"
  },


  {
    phase: "7단계",

    type: "작업 지시",

    icon: "⚡",

    title: "KTX 전기 점검",

    characters: [
      "ajun",
      "electricTeam"
    ],

    text:
      "KTX-산천 전기 계통 점검이 필요해요. 가장 좋은 지시는 무엇일까요?",

    choices: [
      "전기팀 알아서 해주세요",
      "전기 정비팀, KTX-산천 전원 계통을 점검해 주세요",
      "전기를 켜보세요",
      "무궁화호부터 보세요"
    ],

    answer: 1,

    feedback:
      "좋아요! 담당 팀과 작업 대상을 정확히 말했어요.",

    speech:
      "“전기 정비팀, KTX-산천 전원 계통을 점검해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 20,
      mugunghwa: 0
    },

    team: "electric",

    fixFault: {
      train: "ktx",
      fault: "electric"
    }
  },


  {
    phase: "8단계",

    type: "작업 지시",

    icon: "🛤️",

    title: "선로 점검",

    characters: [
      "ajun",
      "trackTeam"
    ],

    text:
      "무궁화호 아래쪽 선로를 점검해야 해요. 가장 좋은 지시는 무엇일까요?",

    choices: [
      "선로팀, 무궁화호 아래쪽 선로를 점검해 주세요",
      "선로가 이상해요",
      "빨리 좀 보세요",
      "KTX만 확인하세요"
    ],

    answer: 0,

    feedback:
      "정답! 어디를 확인할지 정확하게 전달했어요.",

    speech:
      "“선로 정비팀, 무궁화호 아래쪽 선로를 점검해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 0,
      mugunghwa: 20
    },

    team: "track",

    fixFault: {
      train: "mugunghwa",
      fault: "track"
    }
  },


  {
    phase: "9단계",

    type: "돌발 상황",

    icon: "🌧️",

    title: "비가 와요",

    characters: [
      "ajun",
      "trackTeam"
    ],

    text:
      "수리 도중 비가 많이 오기 시작했어요. 정비팀에게 어떻게 이야기하면 좋을까요?",

    choices: [
      "빨리 끝내라고 한다",
      "미끄러운 구간을 조심하고 안전부터 확인해 달라고 한다",
      "비가 와도 똑같이 작업하라고 한다",
      "모두 뛰라고 한다"
    ],

    answer: 1,

    feedback:
      "맞아요! 상황이 달라졌다면 새로운 위험도 알려줘야 해요.",

    speech:
      "“비가 많이 옵니다. 미끄러운 구간을 조심하고 안전을 먼저 확인해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 5,
      mugunghwa: 5
    },

    team: "track"
  },


  {
    phase: "10단계",

    type: "다시 설명하기",

    icon: "🗣️",

    title: "정비사가 잘 이해하지 못했어요",

    characters: [
      "ajun",
      "doorTeam"
    ],

    text:
      "정비사가 어느 문을 확인해야 하는지 모르겠다고 해요. 어떻게 다시 설명할까요?",

    choices: [
      "아까 말했잖아요!",
      "KTX-산천 2호차 오른쪽 출입문을 확인해 주세요",
      "그냥 찾아보세요",
      "모르면 하지 마세요"
    ],

    answer: 1,

    feedback:
      "좋아요! 상대가 이해하지 못하면 더 구체적으로 다시 설명할 수 있어요.",

    speech:
      "“KTX-산천 2호차 오른쪽 출입문을 확인해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 10,
      mugunghwa: 0
    },

    team: "door"
  },


  {
    phase: "11단계",

    type: "상황 보고",

    icon: "📋",

    title: "현재 상황 보고",

    characters: [
      "ajun",
      "inspector"
    ],

    text:
      "정비 책임자가 현재 수리 상황을 물었어요. 가장 정확한 보고는 무엇일까요?",

    choices: [
      "거의 다 됐어요",
      "KTX는 출입문과 전기, 무궁화호는 바퀴와 선로 점검이 완료됐습니다",
      "다 고쳤어요 아마도",
      "정비팀이 알아서 합니다"
    ],

    answer: 1,

    feedback:
      "좋아요! 완료된 작업을 구체적으로 보고했어요.",

    speech:
      "“KTX-산천은 출입문과 전기, 무궁화호는 바퀴와 선로 점검이 완료됐습니다.”라고 말해보세요.",

    progress: {
      ktx: 15,
      mugunghwa: 15
    },

    team: "inspect"
  },


  {
    phase: "12단계",

    type: "최종 판단",

    icon: "✅",

    title: "다시 출발!",

    characters: [
      "ajun",
      "inspector"
    ],

    text:
      "두 열차의 수리가 끝났어요. 다시 출발하기 전에 무엇을 해야 할까요?",

    choices: [
      "바로 최고 속도로 출발한다",
      "최종 안전 점검과 신호를 확인한 뒤 출발한다",
      "두 열차를 동시에 출발시킨다",
      "정비팀이 떠나기 전에 출발한다"
    ],

    answer: 1,

    feedback:
      "정답! 마지막으로 안전 점검과 신호 확인을 해야 해요.",

    speech:
      "“최종 안전 점검 완료. 신호 확인 후 천천히 출발해 주세요.”라고 말해보세요.",

    progress: {
      ktx: 10,
      mugunghwa: 10
    },

    team: "inspect",

    final: true
  }

];


/* ======================================= */
/* DOM */
/* ======================================= */

const ktxStartBtn =
  document.getElementById("ktxStartBtn");

const mugunghwaStartBtn =
  document.getElementById("mugunghwaStartBtn");

const departureSignal =
  document.getElementById("departureSignal");

const departureText =
  document.getElementById("departureText");

const impactZone =
  document.getElementById("impactZone");

const sceneMessage =
  document.getElementById("sceneMessage");


const ktxTrain =
  document.getElementById("ktxTrain");

const mugunghwaTrain =
  document.getElementById("mugunghwaTrain");


const ktxFaults =
  document.getElementById("ktxFaults");

const mugunghwaFaults =
  document.getElementById("mugunghwaFaults");


const ktxProgress =
  document.getElementById("ktxProgress");

const mugunghwaProgress =
  document.getElementById("mugunghwaProgress");

const ktxPercent =
  document.getElementById("ktxPercent");

const mugunghwaPercent =
  document.getElementById("mugunghwaPercent");


const scoreEl =
  document.getElementById("score");

const streakEl =
  document.getElementById("streak");

const missionTypeEl =
  document.getElementById("missionType");

const phaseBadge =
  document.getElementById("phaseBadge");

const missionIcon =
  document.getElementById("missionIcon");

const missionTitle =
  document.getElementById("missionTitle");

const missionText =
  document.getElementById("missionText");

const characterArea =
  document.getElementById("characterArea");

const choiceArea =
  document.getElementById("choiceArea");

const feedback =
  document.getElementById("feedback");

const speechBox =
  document.getElementById("speechBox");

const speechPrompt =
  document.getElementById("speechPrompt");

const speechDoneBtn =
  document.getElementById("speechDoneBtn");

const startBtn =
  document.getElementById("startBtn");

const nextBtn =
  document.getElementById("nextBtn");

const soundBtn =
  document.getElementById("soundBtn");

const successModal =
  document.getElementById("successModal");

const restartBtn =
  document.getElementById("restartBtn");

const teamCards =
  document.querySelectorAll(".team-card");


/* ======================================= */
/* 상태 */
/* ======================================= */

let ktxDeparted = false;

let mugunghwaDeparted = false;

let crashOccurred = false;

let currentIndex = 0;

let currentMission = null;

let score = 0;

let streak = 0;

let ktxRepair = 0;

let mugunghwaRepair = 0;

let awaitingSpeech = false;


/* ======================================= */
/* KTX 출발 */
/* ======================================= */

function startKtx() {

  if (
    ktxDeparted ||
    crashOccurred
  ) {
    return;
  }

  ktxDeparted = true;

  ktxStartBtn.disabled =
    true;

  ktxStartBtn.classList.add(
    "departed"
  );

  ktxStartBtn.textContent =
    "🚄 운행 중";

  ktxTrain.classList.add(
    "departing"
  );

  departureSignal.textContent =
    "🟢";

  departureText.textContent =
    "KTX-산천 출발!";

  sceneMessage.textContent =
    "🚄 KTX-산천이 출발했습니다.";

  checkCrash();

}


/* ======================================= */
/* 무궁화 출발 */
/* ======================================= */

function startMugunghwa() {

  if (
    mugunghwaDeparted ||
    crashOccurred
  ) {
    return;
  }

  mugunghwaDeparted = true;

  mugunghwaStartBtn.disabled =
    true;

  mugunghwaStartBtn.classList.add(
    "departed"
  );

  mugunghwaStartBtn.textContent =
    "🚆 운행 중";

  mugunghwaTrain.classList.add(
    "departing"
  );

  departureSignal.textContent =
    "🟢";

  departureText.textContent =
    "무궁화호 출발!";

  sceneMessage.textContent =
    "🚆 무궁화호가 출발했습니다.";

  checkCrash();

}


/* ======================================= */
/* 충돌 확인 */
/* ======================================= */

function checkCrash() {

  if (
    !ktxDeparted ||
    !mugunghwaDeparted ||
    crashOccurred
  ) {
    return;
  }


  departureText.textContent =
    "⚠️ 두 열차가 같은 구간으로 진입!";


  departureSignal.textContent =
    "🟡";


  sceneMessage.textContent =
    "⚠️ 같은 선로 구간으로 접근 중!";


  setTimeout(
    causeCrash,
    950
  );

}


/* ======================================= */
/* 충돌 발생 */
/* ======================================= */

function causeCrash() {

  crashOccurred =
    true;


  ktxTrain.classList.remove(
    "departing"
  );


  mugunghwaTrain.classList.remove(
    "departing"
  );


  ktxTrain.classList.add(
    "crashed"
  );


  mugunghwaTrain.classList.add(
    "crashed"
  );


  impactZone.classList.remove(
    "hidden"
  );


  ktxFaults.classList.remove(
    "hidden"
  );


  mugunghwaFaults.classList.remove(
    "hidden"
  );


  departureSignal.textContent =
    "🔴";


  departureText.textContent =
    "🚨 열차 정지";


  sceneMessage.textContent =
    "💥 접촉 발생! 두 열차가 정지했습니다.";


  missionTypeEl.textContent =
    "사고 발생";


  phaseBadge.textContent =
    "긴급";


  missionIcon.textContent =
    "🚨";


  missionTitle.textContent =
    "복구 준비!";


  missionText.textContent =
    "두 열차가 멈췄어요. 복구 시작 버튼을 눌러 아준 관제사의 임무를 시작하세요!";


  startBtn.disabled =
    false;


  startBtn.classList.remove(
    "disabled-start"
  );


  startBtn.classList.add(
    "ready-start"
  );

}


/* ======================================= */
/* 게임 시작 */
/* ======================================= */

function startGame() {

  if (
    !crashOccurred
  ) {
    return;
  }


  currentIndex = 0;

  score = 0;

  streak = 0;

  ktxRepair = 0;

  mugunghwaRepair = 0;


  updateScore();

  updateRepairBars();


  startBtn.classList.add(
    "hidden"
  );


  showMission();

}


/* ======================================= */
/* 임무 표시 */
/* ======================================= */

function showMission() {

  currentMission =
    missions[
      currentIndex
    ];


  awaitingSpeech =
    false;


  missionTypeEl.textContent =
    currentMission.type;


  phaseBadge.textContent =
    currentMission.phase;


  missionIcon.textContent =
    currentMission.icon;


  missionTitle.textContent =
    currentMission.title;


  missionText.textContent =
    currentMission.text;


  showCharacters(
    currentMission.characters
  );


  choiceArea.innerHTML =
    "";


  feedback.className =
    "feedback hidden";


  speechBox.classList.add(
    "hidden"
  );


  nextBtn.classList.add(
    "hidden"
  );


  clearTeamHighlights();


  currentMission
    .choices
    .forEach(
      (choice,index) => {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "choice-btn";


        button.textContent =
          `${index + 1}. ${choice}`;


        button.addEventListener(
          "click",
          () =>
            checkAnswer(
              index,
              button
            )
        );


        choiceArea.appendChild(
          button
        );

      }
    );

}


/* ======================================= */
/* 등장인물 */
/* ======================================= */

function showCharacters(ids) {

  characterArea.innerHTML =
    "";


  ids.forEach(
    id => {

      const person =
        characters[id];


      if (!person) {
        return;
      }


      const chip =
        document.createElement(
          "span"
        );


      chip.className =
        "character-chip";


      chip.textContent =
        `${person.emoji} ${person.name}`;


      characterArea.appendChild(
        chip
      );

    }
  );

}


/* ======================================= */
/* 정답 */
/* ======================================= */

function checkAnswer(
  index,
  button
) {

  if (
    awaitingSpeech
  ) {
    return;
  }


  const buttons =
    [
      ...choiceArea
        .querySelectorAll(
          ".choice-btn"
        )
    ];


  if (
    index ===
    currentMission.answer
  ) {


    button.classList.add(
      "correct"
    );


    buttons.forEach(
      btn => {

        btn.disabled = true;

      }
    );


    score += 1;

    streak += 1;


    updateScore();


    feedback.textContent =
      currentMission.feedback;


    feedback.className =
      "feedback good";


    applyProgress(
      currentMission.progress
    );


    if (
      currentMission.team
    ) {

      highlightTeam(
        currentMission.team
      );

    }


    if (
      currentMission.fixFault
    ) {

      fixFault(
        currentMission.fixFault
      );

    }


    speechPrompt.textContent =
      currentMission.speech;


    speechBox.classList.remove(
      "hidden"
    );


    awaitingSpeech =
      true;

  }

  else {


    button.classList.add(
      "wrong"
    );


    button.disabled =
      true;


    streak =
      0;


    updateScore();


    feedback.textContent =
      "다시 생각해 볼까요? 누구에게 무엇을 어떻게 말해야 할까요?";


    feedback.className =
      "feedback try";

  }

}


/* ======================================= */
/* 말하기 끝 */
/* ======================================= */

function completeSpeech() {

  if (
    !awaitingSpeech
  ) {
    return;
  }


  awaitingSpeech =
    false;


  speechBox.classList.add(
    "hidden"
  );


  if (
    currentMission.final
  ) {

    finishGame();

    return;

  }


  nextBtn.classList.remove(
    "hidden"
  );

}


/* ======================================= */
/* 다음 */
/* ======================================= */

function nextMission() {

  currentIndex += 1;


  if (
    currentIndex >=
    missions.length
  ) {

    finishGame();

    return;

  }


  showMission();

}


/* ======================================= */
/* 진행도 */
/* ======================================= */

function applyProgress(progress) {

  ktxRepair =
    Math.min(
      100,
      ktxRepair +
      progress.ktx
    );


  mugunghwaRepair =
    Math.min(
      100,
      mugunghwaRepair +
      progress.mugunghwa
    );


  updateRepairBars();

}


/* ======================================= */
/* 진행 표시 */
/* ======================================= */

function updateRepairBars() {

  ktxProgress.style.width =
    `${ktxRepair}%`;


  mugunghwaProgress.style.width =
    `${mugunghwaRepair}%`;


  ktxPercent.textContent =
    `${ktxRepair}%`;


  mugunghwaPercent.textContent =
    `${mugunghwaRepair}%`;

}


/* ======================================= */
/* 정비팀 */
/* ======================================= */

function highlightTeam(team) {

  clearTeamHighlights();


  const selected =
    document.querySelector(
      `.team-card[data-team="${team}"]`
    );


  if (
    selected
  ) {

    selected.classList.add(
      "active"
    );

  }

}


function clearTeamHighlights() {

  teamCards.forEach(
    card => {

      card.classList.remove(
        "active"
      );

    }
  );

}


/* ======================================= */
/* 고장 수리 */
/* ======================================= */

function fixFault(info) {

  const container =
    info.train === "ktx"
      ? ktxFaults
      : mugunghwaFaults;


  const fault =
    container.querySelector(
      `[data-fault="${info.fault}"]`
    );


  if (
    !fault
  ) {
    return;
  }


  const icons = {

    door:
      "🚪✅",

    electric:
      "⚡✅",

    wheel:
      "🛞✅",

    track:
      "🛤️✅"

  };


  fault.textContent =
    icons[
      info.fault
    ];


  fault.classList.add(
    "fixed"
  );

}


/* ======================================= */
/* 점수 */
/* ======================================= */

function updateScore() {

  scoreEl.textContent =
    score;


  streakEl.textContent =
    streak;

}


/* ======================================= */
/* 읽기 */
/* ======================================= */

function speakMission() {

  if (
    !currentMission
  ) {
    return;
  }


  if (
    !(
      "speechSynthesis"
      in window
    )
  ) {
    return;
  }


  window
    .speechSynthesis
    .cancel();


  const utterance =
    new SpeechSynthesisUtterance(
      `${currentMission.title}. ${currentMission.text}`
    );


  utterance.lang =
    "ko-KR";


  utterance.rate =
    .9;


  window
    .speechSynthesis
    .speak(
      utterance
    );

}


/* ======================================= */
/* 최종 복구 */
/* ======================================= */

function finishGame() {

  ktxRepair =
    100;


  mugunghwaRepair =
    100;


  updateRepairBars();


  impactZone.classList.add(
    "hidden"
  );


  ktxTrain.classList.remove(
    "crashed"
  );


  mugunghwaTrain.classList.remove(
    "crashed"
  );


  ktxTrain.classList.add(
    "repaired"
  );


  mugunghwaTrain.classList.add(
    "repaired"
  );


  sceneMessage.textContent =
    "✅ 복구 완료! 재출발 준비!";


  departureSignal.textContent =
    "🟢";


  departureText.textContent =
    "✅ 운행 가능";


  setTimeout(
    () => {

      sceneMessage.textContent =
        "🚄🚆 두 열차가 다시 출발합니다!";


      ktxTrain.classList.add(
        "final-run"
      );


      mugunghwaTrain.classList.add(
        "final-run"
      );

    },
    700
  );


  setTimeout(
    () => {

      successModal.classList.remove(
        "hidden"
      );

    },
    1700
  );

}


/* ======================================= */
/* 초기화 */
/* ======================================= */

function restartGame() {

  successModal.classList.add(
    "hidden"
  );


  ktxDeparted =
    false;


  mugunghwaDeparted =
    false;


  crashOccurred =
    false;


  currentIndex =
    0;


  score =
    0;


  streak =
    0;


  ktxRepair =
    0;


  mugunghwaRepair =
    0;


  updateScore();

  updateRepairBars();


  ktxTrain.className =
    "train ktx";


  mugunghwaTrain.className =
    "train mugunghwa reverse";


  impactZone.classList.add(
    "hidden"
  );


  ktxFaults.classList.add(
    "hidden"
  );


  mugunghwaFaults.classList.add(
    "hidden"
  );


  resetFaultBadges();


  ktxStartBtn.disabled =
    false;


  mugunghwaStartBtn.disabled =
    false;


  ktxStartBtn.classList.remove(
    "departed"
  );


  mugunghwaStartBtn.classList.remove(
    "departed"
  );


  ktxStartBtn.textContent =
    "▶️ 출발";


  mugunghwaStartBtn.textContent =
    "▶️ 출발";


  departureSignal.textContent =
    "🔴";


  departureText.textContent =
    "두 열차를 출발시켜 보세요!";


  sceneMessage.textContent =
    "🚦 열차 출발 대기 중";


  startBtn.classList.remove(
    "hidden",
    "ready-start"
  );


  startBtn.classList.add(
    "disabled-start"
  );


  startBtn.disabled =
    true;


  nextBtn.classList.add(
    "hidden"
  );


  speechBox.classList.add(
    "hidden"
  );


  feedback.className =
    "feedback hidden";


  choiceArea.innerHTML =
    "";


  missionTypeEl.textContent =
    "출발 관제";


  phaseBadge.textContent =
    "준비";


  missionIcon.textContent =
    "🚦";


  missionTitle.textContent =
    "열차를 출발시켜 주세요!";


  missionText.textContent =
    "위쪽의 KTX-산천과 무궁화호 출발 버튼을 눌러보세요.";


  characterArea.innerHTML =
    `<span class="character-chip">👦 아준 관제사</span>`;


  clearTeamHighlights();

}


/* ======================================= */
/* 고장 아이콘 초기화 */
/* ======================================= */

function resetFaultBadges() {

  const door =
    ktxFaults.querySelector(
      '[data-fault="door"]'
    );


  const electric =
    ktxFaults.querySelector(
      '[data-fault="electric"]'
    );


  const wheel =
    mugunghwaFaults.querySelector(
      '[data-fault="wheel"]'
    );


  const track =
    mugunghwaFaults.querySelector(
      '[data-fault="track"]'
    );


  door.textContent =
    "🚪❌";


  electric.textContent =
    "⚡❌";


  wheel.textContent =
    "🛞❌";


  track.textContent =
    "🛤️❌";


  document
    .querySelectorAll(
      ".fault"
    )
    .forEach(
      fault => {

        fault.classList.remove(
          "fixed"
        );

      }
    );

}


/* ======================================= */
/* 버튼 */
/* ======================================= */

ktxStartBtn.addEventListener(
  "click",
  startKtx
);


mugunghwaStartBtn.addEventListener(
  "click",
  startMugunghwa
);


startBtn.addEventListener(
  "click",
  startGame
);


nextBtn.addEventListener(
  "click",
  nextMission
);


speechDoneBtn.addEventListener(
  "click",
  completeSpeech
);


soundBtn.addEventListener(
  "click",
  speakMission
);


restartBtn.addEventListener(
  "click",
  restartGame
);
