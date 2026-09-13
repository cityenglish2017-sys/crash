/* ========================================= */
/* 게임 데이터 */
/* ========================================= */

const missions = [

  {
    phase: "1단계",
    type: "상황 파악",
    icon: "🚨",

    title:
      "사고 직후 가장 먼저",

    text:
      "KTX-산천과 무궁화호가 접촉한 뒤 멈췄어요. 가장 먼저 무엇을 해야 할까요?",

    choices: [
      "🚦 다른 열차가 들어오지 못하게 한다",
      "🏁 어느 기차가 더 빠른지 본다",
      "📷 사진부터 찍는다",
      "▶️ 바로 다시 출발시킨다"
    ],

    answer: 0,

    feedback:
      "맞아요! 가장 먼저 다른 열차가 접근하지 못하도록 해야 해요.",

    speech:
      "모든 열차는 현재 위치에서 정지해 주세요. 안전을 확인하겠습니다.",

    team:
      "inspect",

    ktx:
      5,

    mugunghwa:
      5
  },


  {
    phase: "2단계",
    type: "작업 지시",
    icon: "🛞",

    title:
      "무궁화호 바퀴",

    text:
      "무궁화호 오른쪽 바퀴에 문제가 생겼어요. 정비팀에게 어떻게 말할까요?",

    choices: [
      "🔧 빨리 고쳐요!",
      "🛞 무궁화호 오른쪽 바퀴를 확인해 주세요",
      "👀 기차 좀 봐주세요",
      "🤷 아무거나 먼저 해주세요"
    ],

    answer: 1,

    feedback:
      "좋아요! 어느 열차의 어느 부분인지 정확하게 말했어요.",

    speech:
      "바퀴 정비팀, 무궁화호 오른쪽 바퀴를 확인해 주세요.",

    team:
      "wheel",

    ktx:
      0,

    mugunghwa:
      20,

    fix:
      "wheel"
  },


  {
    phase: "3단계",
    type: "작업 지시",
    icon: "🚪",

    title:
      "KTX 출입문",

    text:
      "KTX-산천 2호차 출입문이 제대로 닫히지 않아요. 어떻게 지시할까요?",

    choices: [
      "🚪 문 고쳐주세요!",
      "🚄 KTX-산천 2호차 출입문을 확인해 주세요",
      "👆 저기 고쳐주세요",
      "🚆 무궁화호부터 확인하세요"
    ],

    answer: 1,

    feedback:
      "맞아요! 작업 위치까지 정확하게 전달했어요.",

    speech:
      "출입문 정비팀, KTX-산천 2호차 출입문을 확인해 주세요.",

    team:
      "door",

    ktx:
      20,

    mugunghwa:
      0,

    fix:
      "door"
  },


  {
    phase: "4단계",
    type: "대화 기술",
    icon: "📡",

    title:
      "무전이 잘 안 들렸어요",

    text:
      "정비팀의 마지막 말을 잘 듣지 못했어요. 어떻게 해야 할까요?",

    choices: [
      "🤔 대충 알아들은 척한다",
      "📡 마지막 말씀을 다시 해달라고 한다",
      "🔧 내 생각대로 작업시킨다",
      "😠 화를 낸다"
    ],

    answer: 1,

    feedback:
      "좋아요! 잘 못 들었을 때는 다시 물어보는 것이 중요해요.",

    speech:
      "죄송합니다. 마지막 내용을 다시 한 번 말씀해 주세요.",

    team:
      "radio",

    ktx:
      10,

    mugunghwa:
      10
  },


  {
    phase: "5단계",
    type: "작업 지시",
    icon: "⚡",

    title:
      "KTX 전기 점검",

    text:
      "KTX-산천 전기 계통에도 문제가 있어요. 가장 정확한 지시는 무엇일까요?",

    choices: [
      "⚡ 전기팀 알아서 하세요",
      "⚡ KTX-산천 전원 계통을 점검해 주세요",
      "💡 전기 한번 켜보세요",
      "🚆 무궁화호만 확인하세요"
    ],

    answer: 1,

    feedback:
      "정답! 담당 팀과 작업 대상을 정확하게 말했어요.",

    speech:
      "전기 정비팀, KTX-산천 전원 계통을 점검해 주세요.",

    team:
      "electric",

    ktx:
      25,

    mugunghwa:
      0,

    fix:
      "electric"
  },


  {
    phase: "6단계",
    type: "작업 지시",
    icon: "🛤️",

    title:
      "무궁화호 선로",

    text:
      "무궁화호 아래쪽 선로도 확인해야 해요. 어떻게 지시할까요?",

    choices: [
      "🛤️ 무궁화호 아래쪽 선로를 점검해 주세요",
      "👷 저쪽 좀 보세요",
      "🚄 KTX만 확인하세요",
      "🏃 빨리 하세요"
    ],

    answer: 0,

    feedback:
      "좋아요! 어디를 확인해야 하는지 분명하게 전달했어요.",

    speech:
      "선로 정비팀, 무궁화호 아래쪽 선로를 점검해 주세요.",

    team:
      "track",

    ktx:
      0,

    mugunghwa:
      25,

    fix:
      "track"
  },


  {
    phase: "7단계",
    type: "돌발 상황",
    icon: "🌧️",

    title:
      "비가 오기 시작했어요",

    text:
      "수리 중 비가 많이 오기 시작했어요. 어떻게 말하는 것이 좋을까요?",

    choices: [
      "🏃 빨리 끝내세요",
      "🌧️ 미끄러운 곳을 조심하고 안전부터 확인해 주세요",
      "🔧 그냥 계속하세요",
      "😠 왜 이렇게 느려요?"
    ],

    answer: 1,

    feedback:
      "맞아요! 상황이 바뀌면 새로운 위험도 알려줘야 해요.",

    speech:
      "비가 많이 옵니다. 미끄러운 곳을 조심하고 안전을 먼저 확인해 주세요.",

    team:
      "track",

    ktx:
      10,

    mugunghwa:
      10
  },


  {
    phase: "8단계",
    type: "다시 설명하기",
    icon: "🗣️",

    title:
      "정비사가 못 알아들었어요",

    text:
      "정비사가 어느 출입문인지 모르겠다고 해요. 어떻게 다시 설명할까요?",

    choices: [
      "😠 아까 말했잖아요",
      "🚪 KTX-산천 2호차 오른쪽 출입문입니다",
      "👀 알아서 찾으세요",
      "🤷 그냥 하지 마세요"
    ],

    answer: 1,

    feedback:
      "좋아요! 상대가 이해하지 못하면 더 구체적으로 설명할 수 있어요.",

    speech:
      "KTX-산천 2호차 오른쪽 출입문을 확인해 주세요.",

    team:
      "door",

    ktx:
      10,

    mugunghwa:
      0
  },


  {
    phase: "9단계",
    type: "상황 보고",
    icon: "📋",

    title:
      "수리 상황을 보고해요",

    text:
      "정비 책임자가 현재 상황을 물었어요. 어떻게 보고할까요?",

    choices: [
      "👍 거의 다 됐어요",
      "📋 KTX는 출입문과 전기, 무궁화호는 바퀴와 선로 점검이 완료됐습니다",
      "🤷 아마 끝났어요",
      "🔧 정비팀이 알아서 합니다"
    ],

    answer: 1,

    feedback:
      "좋아요! 어떤 작업이 끝났는지 정확하게 보고했어요.",

    speech:
      "KTX-산천은 출입문과 전기, 무궁화호는 바퀴와 선로 점검이 완료됐습니다.",

    team:
      "inspect",

    ktx:
      10,

    mugunghwa:
      20
  },


  {
    phase: "10단계",
    type: "최종 판단",
    icon: "✅",

    title:
      "다시 출발할까요?",

    text:
      "수리가 모두 끝났어요. 다시 출발하기 전에 무엇을 해야 할까요?",

    choices: [
      "🏁 바로 빠르게 출발한다",
      "✅ 최종 안전 점검과 신호를 확인한다",
      "🚄🚆 동시에 출발한다",
      "👷 정비사가 있는 상태로 출발한다"
    ],

    answer: 1,

    feedback:
      "정답! 마지막 안전 점검과 신호 확인이 필요해요.",

    speech:
      "최종 안전 점검 완료. 신호를 확인하고 천천히 출발해 주세요.",

    team:
      "inspect",

    ktx:
      20,

    mugunghwa:
      30,

    final:
      true
  }

];


/* ========================================= */
/* 상태 */
/* ========================================= */

let ktxStarted =
  false;

let mugunghwaStarted =
  false;

let crashed =
  false;

let missionIndex =
  0;

let currentMission =
  null;

let score =
  0;

let streak =
  0;

let ktxRepair =
  0;

let mugunghwaRepair =
  0;


/* ========================================= */
/* 출발 - 핵심 */
/* ========================================= */

function startKtx() {

  if (
    ktxStarted ||
    crashed
  ) {
    return;
  }


  ktxStarted =
    true;


  const train =
    document.getElementById(
      "ktxTrain"
    );


  const button =
    document.getElementById(
      "ktxStartBtn"
    );


  train.classList.add(
    "started"
  );


  button.classList.add(
    "running"
  );


  button.innerHTML =
    "🚄 운행 중";


  document.getElementById(
    "mainSignal"
  ).innerHTML =
    "🟢";


  document.getElementById(
    "signalMessage"
  ).innerHTML =
    "KTX 출발!";


  document.getElementById(
    "sceneMessage"
  ).innerHTML =
    "🚄 KTX-산천이 출발했습니다!";


  checkBothTrains();

}


/* ========================================= */
/* 무궁화호 출발 */
/* ========================================= */

function startMugunghwa() {

  if (
    mugunghwaStarted ||
    crashed
  ) {
    return;
  }


  mugunghwaStarted =
    true;


  const train =
    document.getElementById(
      "mugunghwaTrain"
    );


  const button =
    document.getElementById(
      "mugunghwaStartBtn"
    );


  train.classList.add(
    "started"
  );


  button.classList.add(
    "running"
  );


  button.innerHTML =
    "🚆 운행 중";


  document.getElementById(
    "mainSignal"
  ).innerHTML =
    "🟢";


  document.getElementById(
    "signalMessage"
  ).innerHTML =
    "무궁화호 출발!";


  document.getElementById(
    "sceneMessage"
  ).innerHTML =
    "🚆 무궁화호가 출발했습니다!";


  checkBothTrains();

}


/* ========================================= */
/* 두 열차 모두 출발했는지 */
/* ========================================= */

function checkBothTrains() {

  if (
    ktxStarted &&
    mugunghwaStarted &&
    !crashed
  ) {


    document.getElementById(
      "mainSignal"
    ).innerHTML =
      "🟡";


    document.getElementById(
      "signalMessage"
    ).innerHTML =
      "⚠️ 접근 중";


    document.getElementById(
      "sceneMessage"
    ).innerHTML =
      "⚠️ 두 열차가 같은 구간으로 접근하고 있어요!";


    setTimeout(
      crashTrains,
      1200
    );

  }

}


/* ========================================= */
/* 충돌 */
/* ========================================= */

function crashTrains() {

  if (
    crashed
  ) {
    return;
  }


  crashed =
    true;


  const ktx =
    document.getElementById(
      "ktxTrain"
    );


  const mug =
    document.getElementById(
      "mugunghwaTrain"
    );


  ktx.classList.remove(
    "started"
  );


  mug.classList.remove(
    "started"
  );


  ktx.classList.add(
    "collision"
  );


  mug.classList.add(
    "collision"
  );


  document
    .getElementById(
      "impact"
    )
    .classList
    .remove(
      "hidden"
    );


  document
    .getElementById(
      "ktxFaults"
    )
    .classList
    .remove(
      "hidden"
    );


  document
    .getElementById(
      "mugunghwaFaults"
    )
    .classList
    .remove(
      "hidden"
    );


  document.getElementById(
    "mainSignal"
  ).innerHTML =
    "🔴";


  document.getElementById(
    "signalMessage"
  ).innerHTML =
    "🚨 정지";


  document.getElementById(
    "sceneMessage"
  ).innerHTML =
    "💥 쿵! 두 열차가 정지했습니다.";


  document.getElementById(
    "missionType"
  ).innerHTML =
    "사고 발생";


  document.getElementById(
    "phaseBadge"
  ).innerHTML =
    "긴급";


  document.getElementById(
    "missionIcon"
  ).innerHTML =
    "🚨";


  document.getElementById(
    "missionTitle"
  ).innerHTML =
    "복구 준비!";


  document.getElementById(
    "missionText"
  ).innerHTML =
    "복구 시작 버튼을 눌러 아준 관제사의 임무를 시작하세요!";


  const start =
    document.getElementById(
      "repairStartBtn"
    );


  start.disabled =
    false;


  start.innerHTML =
    "🚨 복구 시작";


  start.classList.add(
    "ready"
  );

}


/* ========================================= */
/* 복구 시작 */
/* ========================================= */

function beginRepair() {

  if (
    !crashed
  ) {
    return;
  }


  missionIndex =
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

  updateProgress();


  document
    .getElementById(
      "repairStartBtn"
    )
    .classList
    .add(
      "hidden"
    );


  showMission();

}


/* ========================================= */
/* 문제 표시 */
/* ========================================= */

function showMission() {

  currentMission =
    missions[
      missionIndex
    ];


  document.getElementById(
    "missionType"
  ).innerHTML =
    currentMission.type;


  document.getElementById(
    "phaseBadge"
  ).innerHTML =
    currentMission.phase;


  document.getElementById(
    "missionIcon"
  ).innerHTML =
    currentMission.icon;


  document.getElementById(
    "missionTitle"
  ).innerHTML =
    currentMission.title;


  document.getElementById(
    "missionText"
  ).innerHTML =
    currentMission.text;


  const area =
    document.getElementById(
      "choiceArea"
    );


  area.innerHTML =
    "";


  currentMission
    .choices
    .forEach(
      function(
        choice,
        index
      ) {


        const button =
          document.createElement(
            "button"
          );


        button.className =
          "choice-button";


        button.innerHTML =
          choice;


        button.onclick =
          function() {

            answerMission(
              index,
              button
            );

          };


        area.appendChild(
          button
        );

      }
    );


  document
    .getElementById(
      "feedback"
    )
    .className =
      "feedback hidden";


  document
    .getElementById(
      "speechBox"
    )
    .classList
    .add(
      "hidden"
    );


  document
    .getElementById(
      "nextBtn"
    )
    .classList
    .add(
      "hidden"
    );


  clearTeams();

}


/* ========================================= */
/* 정답 */
/* ========================================= */

function answerMission(
  answer,
  button
) {

  const buttons =
    document.querySelectorAll(
      ".choice-button"
    );


  if (
    answer ===
    currentMission.answer
  ) {


    button.classList.add(
      "correct"
    );


    buttons.forEach(
      function(btn) {

        btn.disabled =
          true;

      }
    );


    score++;

    streak++;


    updateScore();


    const feedback =
      document.getElementById(
        "feedback"
      );


    feedback.innerHTML =
      currentMission.feedback;


    feedback.className =
      "feedback good";


    ktxRepair =
      Math.min(
        100,
        ktxRepair +
        currentMission.ktx
      );


    mugunghwaRepair =
      Math.min(
        100,
        mugunghwaRepair +
        currentMission.mugunghwa
      );


    updateProgress();


    highlightTeam(
      currentMission.team
    );


    if (
      currentMission.fix
    ) {

      fixFault(
        currentMission.fix
      );

    }


    document.getElementById(
      "speechPrompt"
    ).innerHTML =
      "“" +
      currentMission.speech +
      "”";


    document
      .getElementById(
        "speechBox"
      )
      .classList
      .remove(
        "hidden"
      );

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


    const feedback =
      document.getElementById(
        "feedback"
      );


    feedback.innerHTML =
      "🤔 한 번 더 생각해 볼까요?";


    feedback.className =
      "feedback bad";

  }

}


/* ========================================= */
/* 말하기 완료 */
/* ========================================= */

function speechComplete() {

  document
    .getElementById(
      "speechBox"
    )
    .classList
    .add(
      "hidden"
    );


  if (
    currentMission.final
  ) {

    finishRepair();

  }

  else {

    document
      .getElementById(
        "nextBtn"
      )
      .classList
      .remove(
        "hidden"
      );

  }

}


/* ========================================= */
/* 다음 문제 */
/* ========================================= */

function nextMission() {

  missionIndex++;


  if (
    missionIndex >=
    missions.length
  ) {

    finishRepair();

    return;

  }


  showMission();

}


/* ========================================= */
/* 진행도 */
/* ========================================= */

function updateProgress() {

  document.getElementById(
    "ktxProgress"
  ).style.width =
    ktxRepair + "%";


  document.getElementById(
    "ktxPercent"
  ).innerHTML =
    ktxRepair + "%";


  document.getElementById(
    "mugunghwaProgress"
  ).style.width =
    mugunghwaRepair + "%";


  document.getElementById(
    "mugunghwaPercent"
  ).innerHTML =
    mugunghwaRepair + "%";

}


/* ========================================= */
/* 점수 */
/* ========================================= */

function updateScore() {

  document.getElementById(
    "score"
  ).innerHTML =
    score;


  document.getElementById(
    "streak"
  ).innerHTML =
    streak;

}


/* ========================================= */
/* 팀 강조 */
/* ========================================= */

function highlightTeam(
  name
) {

  clearTeams();


  const team =
    document.querySelector(
      '[data-team="' +
      name +
      '"]'
    );


  if (
    team
  ) {

    team.classList.add(
      "active"
    );

  }

}


function clearTeams() {

  document
    .querySelectorAll(
      ".team"
    )
    .forEach(
      function(team) {

        team.classList.remove(
          "active"
        );

      }
    );

}


/* ========================================= */
/* 고장 수리 */
/* ========================================= */

function fixFault(
  fault
) {

  let element;


  if (
    fault === "door"
  ) {

    element =
      document.querySelector(
        '#ktxFaults [data-fault="door"]'
      );

    element.innerHTML =
      "🚪✅";

  }


  if (
    fault === "electric"
  ) {

    element =
      document.querySelector(
        '#ktxFaults [data-fault="electric"]'
      );

    element.innerHTML =
      "⚡✅";

  }


  if (
    fault === "wheel"
  ) {

    element =
      document.querySelector(
        '#mugunghwaFaults [data-fault="wheel"]'
      );

    element.innerHTML =
      "🛞✅";

  }


  if (
    fault === "track"
  ) {

    element =
      document.querySelector(
        '#mugunghwaFaults [data-fault="track"]'
      );

    element.innerHTML =
      "🛤️✅";

  }


  if (
    element
  ) {

    element.classList.add(
      "fixed"
    );

  }

}


/* ========================================= */
/* 수리 완료 */
/* ========================================= */

function finishRepair() {

  ktxRepair =
    100;


  mugunghwaRepair =
    100;


  updateProgress();


  document
    .getElementById(
      "impact"
    )
    .classList
    .add(
      "hidden"
    );


  const ktx =
    document.getElementById(
      "ktxTrain"
    );


  const mug =
    document.getElementById(
      "mugunghwaTrain"
    );


  ktx.classList.remove(
    "collision"
  );


  mug.classList.remove(
    "collision"
  );


  ktx.classList.add(
    "repaired"
  );


  mug.classList.add(
    "repaired"
  );


  document.getElementById(
    "sceneMessage"
  ).innerHTML =
    "✅ 두 열차 복구 완료!";


  document.getElementById(
    "mainSignal"
  ).innerHTML =
    "🟢";


  document.getElementById(
    "signalMessage"
  ).innerHTML =
    "운행 가능";


  setTimeout(
    function() {

      document
        .getElementById(
          "successModal"
        )
        .classList
        .remove(
          "hidden"
        );

    },
    700
  );

}


/* ========================================= */
/* 다시하기 */
/* ========================================= */

function restartGame() {

  location.reload();

}


/* ========================================= */
/* 음성 읽기 */
/* ========================================= */

function readMission() {

  if (
    !currentMission
  ) {
    return;
  }


  if (
    !window.speechSynthesis
  ) {
    return;
  }


  speechSynthesis.cancel();


  const voice =
    new SpeechSynthesisUtterance(
      currentMission.title +
      ". " +
      currentMission.text
    );


  voice.lang =
    "ko-KR";


  voice.rate =
    0.9;


  speechSynthesis.speak(
    voice
  );

}


/* ========================================= */
/* 버튼 이벤트 */
/* ========================================= */

document
  .getElementById(
    "repairStartBtn"
  )
  .addEventListener(
    "click",
    beginRepair
  );


document
  .getElementById(
    "speechDoneBtn"
  )
  .addEventListener(
    "click",
    speechComplete
  );


document
  .getElementById(
    "nextBtn"
  )
  .addEventListener(
    "click",
    nextMission
  );


document
  .getElementById(
    "restartBtn"
  )
  .addEventListener(
    "click",
    restartGame
  );


document
  .getElementById(
    "soundBtn"
  )
  .addEventListener(
    "click",
    readMission
  );


/* ========================================= */
/* 브라우저에서 함수가 확실히 보이게 */
/* ========================================= */

window.startKtx =
  startKtx;

window.startMugunghwa =
  startMugunghwa;
